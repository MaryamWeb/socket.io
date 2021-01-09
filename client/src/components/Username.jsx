import ChattingImg from '../images/chatting.png';

const Username = (props) => {
const{user, userHandler, setName}=props;
	return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light py-3">
                <span>JoyChat</span>
            </nav>
            <div className="row align-items-center bg-white">
                <div className="col-md-6 order-1 order-md-2">
                    <img src={`${ChattingImg}`} alt="chatting" className="img-fluid mb-3"/>
                </div>
                <div className="col-md-6 order-sm-2">
                <h1>Welcome to JoyChat</h1>
                    <p className="text-muted mb-4">A place where you can chat with friends</p>
                    <form onSubmit={setName}>
                        <div className="row ">
                            <div className="input-group col-lg-12 mb-4 pl-0">
                                <label className="col-sm-4 col-form-label">Enter Username:</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" onChange={userHandler} value={user}/>
                                </div>
                            </div>
                            <div className="input-group col-lg-12 mb-4 pl-0">
                            <label className="col-sm-4 col-form-label"></label>
                                <div className="col-sm-8">
                                    <button type="button" className="btn-block btn bg-yellow btn-cont">Continue</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
	);
};
export default Username;