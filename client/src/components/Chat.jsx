import React from 'react';

const Chat = (props) => {
const{messages, message, chatHandler, submitMessage}=props
	return (
		<div className="row col-12">
            <form onSubmit={submitMessage}>
                <label>Message</label>
                <input type="textarea" onChange={chatHandler} value={message}/>
                <button>Send</button>
            </form>
		</div>
	);
};

export default Chat;
