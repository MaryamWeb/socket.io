import React from 'react';

const Username = (props) => {
const{user, userHandler, setName}=props;
	return (
		<div className="row col-12">
            <form onSubmit={setName}>
                <label>Enter your name:</label>
                <input type="text" onChange={userHandler} value={user}/>
                <button>Submit</button>
            </form>
		 </div>
	);
};

export default Username;

