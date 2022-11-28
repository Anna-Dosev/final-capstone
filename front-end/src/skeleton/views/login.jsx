import Register from '../../components/register';
import Login from '../../components/login';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/features/isLoggedInSlice';
import PostLogIn from '../../components/postLogIn';
import '../../styles/loginStyles.css';

const LogIn = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (!isLoggedIn || isLoggedIn === 1) {
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
  } else if (isLoggedIn === 2) {
    return (<PostLogIn/>)
  } 
};
  
  export default LogIn;


