import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/features/isLoggedInSlice';
import '../../styles/navbarStyles.css';

const Header = ( {data} ) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const navItems = data.map((navItem) => {
    if (navItem.onLoggedOut === true && !isLoggedIn) { //if navbar item is supposed to show up when user is logged out, and the user is logged out : show 'log in' in nav
      return (
          <NavLink className="navbar" to={navItem.href} key={navItem.id}>{navItem.text}</NavLink>
      )
    } else if (navItem.onLoggedIn === true && isLoggedIn) { //if navbar item is supposed to show when user is logged in, and the user is logged in : show 'log out' in nav
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