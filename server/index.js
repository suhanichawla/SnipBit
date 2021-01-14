require("dotenv").config();
var express=require("express")
var app=express()
var bodyParser=require("body-parser")
var cors=require("cors")
var bot="mybot"
var server = require('http').Server(app);
var io = require('socket.io')(server, {origins:'localhost:*'});
var authRoutes=require("./routes/auth")
var errorHandler=require("./handlers/error")
var snippetRoutes=require("./routes/snips")
const {loginRequired,correctUser}=require("./middleware/auth")
const {joinUserToExistingRoom,joinUserToNewRoom,getCurrentUser,leaveUser,getRoomUsers,updateRoomCode}=require("./realtime")
const formatMessage = require("./messages")
var db=require("./models")
const port=process.env.PORT || 8080;


io.on('connection', (socket)=> {
    console.log('User Online');
    console.log("new socket connection")
    socket.on("joinRoom",(data)=>{
        console.log("data received on joinroom is",data)
        if(data.code){
            var {username,room,code}=data;
            const user=joinUserToNewRoom(socket.id,username,room,code)
            socket.join(user.room)
            console.log("user has joined new room")
            console.log("room joined is",room)
        }else{
            var {username,room}=data;
            const {user,code}=joinUserToExistingRoom(socket.id,username,room)
            console.log("here in index im getting code as",code)
            socket.join(user.room)
            console.log("user has joined existing room")
            console.log("room joined is",room)
            socket.emit("code-data",code)
        }
        
        // const user=joinUser(socket.id,username,room)
        // socket.join(user.room)
        // console.log("user has joined room")
        //socket.emit("code-data",formatMessage(bot,"welcome to dev connect"))
        
        //socket.broadcast.to(user.room).emit("message",formatMessage(bot,   `${user.username} has joined the chat`));

        // io.to(user.room).emit('roomUsers',{
        //     room:user.room,
        //     users:getRoomUsers(user.room)
        // })
       
    })

    socket.on("code",(msg)=>{
        console.log("getting right thing here",msg)
        const user=getCurrentUser(socket.id)
        console.log("emmitting to room no",user.room)
        updateRoomCode(user.room,msg);
        io.to(user.room).emit("code-data",msg)
    })
    

    //when user disconnects
    socket.on("disconnect",()=>{
        console.log("user disconnected")
        const user=leaveUser(socket.id)
        if(user){
            io.to(user.room).emit("message",formatMessage(bot,`${user.username} has left the chat`))
            io.to(user.room).emit('roomUsers',{
                room:user.room,
                users:getRoomUsers(user.room)
            })
        }
        
    })


})


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use("/api/auth",authRoutes)
app.use("/api/users/:userID/snips",loginRequired,correctUser, snippetRoutes)



app.use((req,res,next)=>{
    let err=new Error("NOT FOUND")
    err.status=404
    next(err)
})


app.use(errorHandler)

server.listen(port,()=>{
    console.log(`SERVER STARTED ON ${port}`)
})
