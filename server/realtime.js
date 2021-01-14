const users=[]
const rooms=[]

function joinUserToNewRoom(id,username,room,code){
    const user={id,username,room}
    users.push(user)
    const currroom={id,room,code}
    rooms.push(currroom)
    return user
}

function updateRoomCode(room,code){
    const currroom=rooms.find(element => element.room == room);
    currroom.code=code
}

function joinUserToExistingRoom(id,username,room){
    const user={id,username,room}
    users.push(user)
    //array1.find(element => element > 10);
    const currroom=rooms.find(element => element.room == room);
    console.log("currroom is",currroom.code)
    return {user,code:currroom.code}
}
function getCurrentUser(id){
    return users.find(user=> user.id===id)
}

function leaveUser(id){
    const index=users.findIndex(user=>user.id===id)
    if(index!=-1){
        return users.splice(index,1)[0]
    }
}

function getRoomUsers(room){
    return users.filter(el=>{
        return el.room===room
    })
}

module.exports={
    joinUserToExistingRoom,
    joinUserToNewRoom,
    getCurrentUser,
    leaveUser,
    getRoomUsers,
    updateRoomCode
}