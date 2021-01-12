import React from 'react';
import moment from 'moment';

const Chat = (props) => {
const{messages, message, chatHandler, submitMessage}=props
	return (
		<div className="container">
            <nav className="navbar navbar-expand-lg navbar-light py-3">
                <span>JoyChat</span>
            </nav>
            <div id="chat-container" className="px-3 bg-white overflow-auto">
                <ul className="list-group pt-2 pl-3 all-messages">
                {messages.map((m, i) => (
                    <div key={i}>
                        <small className="text-muted">{m.user }{m.sender}</small>
                        <li className="col-md-10 mb-3 col-lg-6 p-2 list-group-item single-message" style={{backgroundColor:`${m.color}`}}>
                        {m.message}
                        <small className="time text-muted pr-2">{moment(m.time).format('LT')}</small>
                        </li>
                    </div>
                ))}
                </ul>
            </div>
            <form className="px-3 pb-2 bg-white">
                <div className="form-group">
                    <label className=" col-form-label">Message:</label>
                    <textarea className="form-control" rows="3" onChange={chatHandler} value={message}/>
                </div>
                <div className="form-group clearfix">
                    <button type="button" className=" px-5 btn bg-yellow btn-cont float-right" onClick={submitMessage}>Send</button>
                </div>
            </form>
        </div>
	);
};

export default Chat;
