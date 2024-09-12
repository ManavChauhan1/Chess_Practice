//Basic Socket.io setup
const socket = io();

socket.emit("test");
socket.on("Broadcast", function(){
    console.log("Broadcast complete");
    
});
