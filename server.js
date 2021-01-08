const express = require('express');
const { Socket } = require('socket.io');
const app = express();
const port = 7000;

const server = app.listen(port, () => console.log(`Server is runing on port ${port}`));

const io = require('socket.io')(server, {
	cors: {
		origin: 'http://localhost:3000',
		methods: [ 'GET', 'POST' ]
	}
});

//will listen for an event from the client
io.on('connection', (socket) => {
	console.log(socket.id);
	io.emit('Welcome', 'It has started'); //emits an event to all connected clients
	socket.on('incoming message', (data) => {
		//listens for the 'incoming message' sent from the client
		console.log(data);
		socket.broadcast.emit('newMessage', data);
	});
});
