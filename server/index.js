require("dotenv").config();
var express=require("express")
var bodyParser=require("body-parser")
const moment=require("moment")
var app=express()
var server = require('http').Server(app);
var io = require('socket.io')(server, {origins:'localhost:*'});


var bot="SnipBitBot"
const port=process.env.PORT || 8080;

var authRoutes=require("./routes/auth")
var errorHandler=require("./handlers/error")
var snippetRoutes=require("./routes/snips")

const {loginRequired,correctUser}=require("./middleware/auth")
const {joinUserToExistingRoom,joinUserToNewRoom,getCurrentUser,leaveUser,getRoomUsers,updateRoomCode}=require("./handlers/realtime")

function formatMessage(username,text){
    return {
        username,
        text,
        time: moment().format("h:mm a")
    }
}


io.on('connection', (socket)=> {
    socket.on("joinRoom",(data)=>{
        if(data.code){
            var {username,room,code}=data;
            const user=joinUserToNewRoom(socket.id,username,room,code)
            socket.join(user.room)
            console.log("User has joined new room "+room)
            
        }else{
            var {username,room}=data;
            const {user,code}=joinUserToExistingRoom(socket.id,username,room)
            socket.join(user.room)
            console.log("user has joined existing room "+room)
            socket.emit("code-data",code)
        }
       
    })

    socket.on("code",(msg)=>{
        const user=getCurrentUser(socket.id)
        updateRoomCode(user.room,msg);
        io.to(user.room).emit("code-data",msg)
    })
    

    //when user disconnects
    socket.on("disconnect",()=>{
        console.log("User disconnected")
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
