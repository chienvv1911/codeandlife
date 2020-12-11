import React, { Fragment, useState, useContext } from "react";
import UserContext from '../context/UserContext'
import axios from 'axios'

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const { setUserData } = useContext(UserContext);
  const submitLogin = async (e) => {
    e.preventDefault();
    const loginUser = { email, password};
    const loginRes =  axios.post("http:localhost:3002/api/users/login", loginUser);
    setUserData({
        user: loginRes.data.token,
        token: loginRes.data.user
    });
    localStorage.setItem("auth-token", loginRes.data.user);
  }

  return (
    <Fragment>
      <div className="container">
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>

        <label for="email">
          <b>Email</b>
        </label>
        <input type="text" placeholder="Enter Email" name="email" id="email" 
               onChange={e => setEmail(e.target.value)}/>

        <label for="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          id="psw"
          onChange={e => setPassword(e.target.value)}
        />
       

        <button type="submit" className="registerbtn" onClick={submitLogin}>
          Login
        </button>
      </div>
    </Fragment>
  );
};

export default LoginPage;
