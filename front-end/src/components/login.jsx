import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { login, fetchUser } from '../redux/features/userSlice';
import { selectIsLoggedIn, fetchVerify } from '../redux/features/isLoggedInSlice';
import Message from './message';
import Message3 from './message3';
import '../styles/loginComponentStyles.css'

const Login = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(false);
  const [message3, setMessage3] = useState(false);
  const dispatch = useDispatch();
  // useEffect(()=> {
  //   if (isLoggedIn === 1) {
  //     setMessage3(true)
  //   }
  // })

  const handleChange3 = (e) => {
    const inputVal = e.target.value;
    setEmail(inputVal);
  };
  const handleChange4 = (e) => {
    const inputVal = e.target.value;
    console.log(inputVal)
    setPassword(inputVal);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      setMessage(true);
    } else {
      dispatch(fetchVerify({token : undefined, email, password}))
    }

}
  

  return (
    <form className="login-container" onSubmit={handleSubmit}>
      <div className="input-container">
        <input className="info-field"
          value={email}
          onChange={handleChange3}
          type="email"
          name="email"
          placeholder="EMAIL"
        ></input>
        <input className="info-field"
          value={password}
          onChange={handleChange4}
          type="password"
          name="password"
          placeholder="PASSWORD"
        ></input>
      </div>
      <button type="submit" className="login-button">
        Log In
      </button>
      {message && <Message />}
      {isLoggedIn === 1 && <Message3 />}
    </form>
  );
};

export default Login;

//the code below was removed from the navbarData.json file in order to remove login/logout functionlity from the nav bar
//     {
//       "className": "navs__secondary",
//       "href": "/logout",
//       "id": 6,
//       "onLoggedIn": true,
//       "onLoggedOut": false,
//       "text": "Log Out"
//     },
//     {
//       "className": "navs__secondary",
//       "href": "/login",
//       "id": 7,
//       "onLoggedIn": false,
//       "onLoggedOut": true,
//       "text": "Log In"
//     }