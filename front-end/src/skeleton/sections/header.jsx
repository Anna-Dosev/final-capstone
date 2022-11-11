import { NavLink } from 'react-router-dom';
import '../../styles/navbarStyles.css';

const Header = ( {data, isLoggedIn }) => {
  const navItems = data.map((navItem) => {
    //demo@user.com
    if (navItem.onLoggedOut == true && !isLoggedIn) {
      return (
          <NavLink className="navbar" to={navItem.href} key={navItem.id}>{navItem.text}</NavLink>
      )
    } else if (navItem.onLoggedIn == true && isLoggedIn) {
      return (
          <NavLink className="navbar" to={navItem.href} key={navItem.id}>{navItem.text}</NavLink>
      )
    }
  });
  return (
    <div className="navbar-container">
      {navItems}
    </div>
    )
  };
  
  export default Header;