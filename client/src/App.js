import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Router, navigate } from '@reach/router';
import Username from './components/Username';
import Chat from './components/Chat';

function App() {
	const [ socket ] = useState(() => io(':7000'));
	const [ user, setUser ] = useState('');
	const [ color, setColor ] = useState('#ffbe40');
	const [ messages, setMessages ] = useState([]);
	const [ message, setMessage ] = useState('');

	useEffect(
		() => {
			console.log('Checking..');
			return () => socket.disconnect(true);
		},
		[ socket ]
	);
	socket.on('Welcome', (data) => console.log(data));
	socket.on('newMessage', (data) => {
		console.log(data);
		setMessages([ data, ...messages ]);
	});

	const setName = (e) => {
		e.preventDefault();
		navigate('/chat');
	};
	const sendMessage = (e) => {
		e.preventDefault();
		console.log({ user, message, color });
		setMessages([ { user, message, color }, ...messages ]);
		socket.emit('incoming message', { user, message, color }); //the data we are sending to the server
		setMessage('');
	};
	return (
		<Router>
			<Username
				path="/"
				user={user}
				userHandler={(e) => setUser(e.target.value)}
				color={color}
				colorHandler={(e) => setColor(e.target.value)}
				setName={setName}
			/>
			<Chat
				path="/chat"
				messages={messages}
				submitMessage={sendMessage}
				message={message}
				chatHandler={(e) => setMessage(e.target.value)}
			/>
		</Router>
	);
}

export default App;
