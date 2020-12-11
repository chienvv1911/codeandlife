import React, { Fragment, useState, useContext } from "react";
import UserContext from '../context/UserContext'
import axios from 'axios'

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const { setUserData } = useContext(UserContext);
  const submitRegister = async (e) => {
    e.preventDefault();
    const newUser = { email, password};
    await axios.post("http:localhost:3002/api/users/register", newUser);

    const loginNewUser =  axios.post("http:localhost:3002/api/users/login", newUser);
    setUserData({
        user: loginNewUser.data.token,
        token: loginNewUser.data.user
    });
    localStorage.setItem("auth-token", loginNewUser.data.user);
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
       

        <button type="submit" className="registerbtn" onClick={submitRegister}>
          Register
        </button>
      </div>
    </Fragment>
  );
};

export default RegisterPage;
