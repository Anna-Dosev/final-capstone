import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/features/registerSlice';
import { fetchVerify } from '../redux/features/isLoggedInSlice';
import Message from './message';
import Message2 from './message2';
import '../styles/loginComponentStyles.css'

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(false);
  const [message2, setMessage2] = useState(false);
  const [newsletter, setNewsletter] = useState(false);
  const dispatch = useDispatch();

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
    console.log(inputVal)
    setPassword(inputVal);
  };
  const handleChange5 = () => {
    setNewsletter(!newsletter);
  }

  const handleSubmit = (e, firstName, lastName, email, password) => {
    e.preventDefault();
    dispatch(register({
      firstName,
      lastName,
      email,
      password,
    }))
    if (firstName === '' || lastName === '' || email === '' || password === '') {
      setMessage(true);
    } else {
      setMessage(false);
    console.log(firstName, lastName, email, password, newsletter)
      fetch("http://localhost:8080/register", {
        method: "POST",
        body: JSON.stringify({ firstName, lastName, email, password, newsletter }), 
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json ())
        .then((data) => {
          if (data.message) {
          setMessage2(true) 
        } else {
          dispatch(fetchVerify({token : undefined, email, password}))
        }
      })
    }
  };

  return (
    <form className="login-container" onSubmit={(e) => handleSubmit(e, firstName, lastName, email, password)}>
      <div className="input-container">
        <div className="names-input-container">
          <input className="name-field"
            value={firstName}
            onChange={handleChange}
            type="text"
            name="firstName"
            placeholder="FIRST"
          ></input>
          <input className="name-field"
            value={lastName}
            onChange={handleChange2}
            type="text"
            name="lastName"
            placeholder="LAST"
          ></input>
        </div>
        <div className="ep-input-container">
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
      </div>
      <div className="checkbox-container">
        <input type="checkbox" onClick={handleChange5}/>
        <p className="checkbox-text">I would like to receive a monthly newsletter</p>
      </div>
      <button type="submit" className="login-button">
        Create Account
      </button>
      {message && <Message />}
      {message2 && <Message2 />}
    </form>
  );
};

export default Register;
