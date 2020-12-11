import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios'
import UserContext from "./context/UserContext";
import HomePage from "./pages/HomePage";
import PostDetailPage from "./pages/PostDetailPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  const [userData, setUserData] = useState({
      token: undefined,
      user: undefined
  })
 
  useEffect(() => {
    const checkLoggedIn = async () => {
        let token = localStorage.getItem("auth-token");
        if(token == null) {
            localStorage.setItem("auth-token", "");
            token = "";
        }
        const tokenIsValid = await axios.post("http:localhost:3002/api/users/isvalidtoken", null, {
            headers: {
                "x-auth-token": token
            }
        });

        if(tokenIsValid.data) {
            const userData = await axios.get("http:localhost:3002/api/users", {
                headers: {
                    "x-auth-token": token
                }
            });

            setUserData({
                token,
                user: userData
            })
        }
    }
    checkLoggedIn();
  }, [])

  return (
    <Router>
      <UserContext.Provider value={{userData, setUserData}}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/posts/:id" component={PostDetailPage} />
          <Route path="/auth/register" component={RegisterPage} />
          <Route path="/auth/login" component={LoginPage} />
        </Switch>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
