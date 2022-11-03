import { useState } from 'react';
import Message from './message';
import '../styles/loginComponentStyles.css'

const Login = ({ setIsLoggedIn }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(false);

  const handleChange = (e) => {
    const inputVal = e.target.value;
    setFirstName(inputVal);
  };
  const handleChange2 = (e) => {
    const inputVal = e.target.value;
    setLastName(inputVal);
  };
  const handleChange3 = (e) => {
    const inputVal = e.target.value;
    setEmail(inputVal);
  };
  const handleChange4 = (e) => {
    const inputVal = e.target.value;
    setPassword(inputVal);
  };

  const handleSubmit = (e, firstName, lastName, email, password) => {
    e.preventDefault();
    if (firstName == '' || lastName == '' || email == '' || password == '') {
      setMessage(true);
    } else {
      setIsLoggedIn(true);
    }
  };

  return (
    <form className="login-container" onSubmit={(e) => handleSubmit(e, firstName, lastName, email)}>
      <div className="input-container">
        <div className="names-input-container">
          <input className="info-field"
            value={firstName}
            onChange={handleChange}
            type="text"
            name="firstName"
            placeholder="FIRST NAME"
          ></input>
          <input className="info-field"
            value={lastName}
            onChange={handleChange2}
            type="text"
            name="lastName"
            placeholder="LAST NAME"
          ></input>
        </div>
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
      <div className="checkbox-container">
        <input type="checkbox"/>
        <p className="checkbox-text">I would like to receive a monthly newsletter</p>
      </div>
      <button type="submit" className="login-button">
        Login
      </button>
      <button type="submit" className="login-button">
        Create Account
      </button>
      {message && <Message />}
    </form>
  );
};

export default Login;
