const io = require('socket.io')(3000) //port we want to run on
//this gives each user their own socket
io.on('connection', socket => {
    socket.emit('chatMessage', 'hello world') //message sent to user.
})