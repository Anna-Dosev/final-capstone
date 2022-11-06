import Register from '../../components/register';
import Login from '../../components/login';
import '../../styles/loginStyles.css';

const LogIn = () => {
    return (
    <div className="main-login-container">
      <div className="login-container-text">
        <h3 className="login-signup-text">Log in to see more content!</h3>
        <div className="forms-container">
          <Login className="login-login"/>
          <div className="vl"></div>
          <Register className="login-register"/>
        </div>
      </div>
    </div>
      )  
    };
  
  export default LogIn;


