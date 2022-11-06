
import '../../styles/logoutStyles.css';

const LogOut = ( {setIsLoggedIn}) => {
  const handleLogOut = (e) => {
    setIsLoggedIn(false);
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