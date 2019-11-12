// client side javaScript will go here
const socket = io('http://localhost:3000') //where server is hosting application

socket.on('chatMessage', data => {
    console.log(data)
}) 