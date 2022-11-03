import Login from '../../components/login';
import '../../styles/loginStyles.css';

const LogIn = () => {
    return (
    <div className="main-login-container">
      <div className="login-container-text">
        <h3 className="login-signup-text">You must be logged in to view this content.</h3>
        <div className="about-container-login">
          <Login />
        </div>
      </div>
    </div>
      )  
    };
  
  export default LogIn;


