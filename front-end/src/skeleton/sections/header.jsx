import { NavLink } from 'react-router-dom';
import '../../styles/navbarStyles.css';

const Header = ( {data, setIsLoggedIn }) => {
  const navItems = data.map((navItem) => {
    if (navItem.onLoggedOut == true) {
      return (
          <NavLink className="navbar" to={navItem.href} key={navItem.id}>{navItem.text}</NavLink>
      )
    } else if (!setIsLoggedIn) {
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