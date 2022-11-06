import { useState } from 'react';
import Message from './message';
import Message3 from './message3';
import '../styles/loginComponentStyles.css'

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(false);
  const [message3, setMessage3] = useState(false);

  const handleChange3 = (e) => {
    const inputVal = e.target.value;
    setEmail(inputVal);
  };
  const handleChange4 = (e) => {
    const inputVal = e.target.value;
    console.log(inputVal)
    setPassword(inputVal);
  };

  const handleSubmit = (e, email, password) => {
    e.preventDefault();
    if (email == '' || password == '') {
      setMessage(true);
    } else if (email == 'XYZ@email.com') {
      setMessage3(true);
    }  else {
      fetch("http://localhost:8080/login", {
        method: "POST",
        body: JSON.stringify({ email, password }), 
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json ())
        .then((data) => console.log(data));
      setIsLoggedIn(true);
    }
}
  

  return (
    <form className="login-container" onSubmit={(e) => handleSubmit(e, email, password)}>
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
      {message3 && <Message3 />}
    </form>
  );
};

export default Login;