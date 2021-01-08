import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Router, navigate } from '@reach/router';
import Username from './components/Username';
import Chat from './components/Chat';

function App() {
	const [ socket ] = useState(() => io(':7000'));
	const [ user, setUser ] = useState('');
	const [ messages, setMessages ] = useState([]);
	const [ message, setMessage ] = useState('');

	useEffect(() => {
		console.log('Checking..');
		socket.on('Welcome', (data) => console.log(data));
		// return () => socket.disconnect(true);
	}, []);

	const setName = (e) => {
		e.preventDefault();
		navigate('/chat');
	};
	const sendMessage = (e) => {
		e.preventDefault();
		console.log({ user, message });
		socket.emit('incoming message', { user, message }); //the data we are sending to the server
	};
	return (
		<div className="container mt-5">
			<Router>
				<Username path="/" user={user} userHandler={(e) => setUser(e.target.value)} setName={setName} />
				<Chat
					path="/chat"
					messages={messages}
					submitMessage={sendMessage}
					message={message}
					chatHandler={(e) => setMessage(e.target.value)}
				/>
			</Router>
		</div>
	);
}

export default App;
