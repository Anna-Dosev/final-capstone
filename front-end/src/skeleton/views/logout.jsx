import '../../styles/logoutStyles.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, logout } from '../../redux/features/userSlice'

const LogOut = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(logout());
    console.log('logged out')
  };

    return (
    <div className="main-logout-container">
      <div className="logout-container-text">
        <h3 className="logout-signup-text">Thank you for visiting!</h3>
        <p>Check back later for new content.</p>
        <form className="logout-form" onSubmit={handleLogOut}>
          <button type="submit" className="logout-button">
            Log Out
          </button>
      </form>
      </div>
    </div>
      )  
    };
  
  export default LogOut;