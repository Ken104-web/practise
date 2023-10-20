import React, { useState } from "react";
import "./login.css";
import Card from "./card/card";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const LoginForm = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});

  const errors = {
    username: "Invalid username",
    password: "Invalid password",
    noUsername: "Please enter your username",
    noPassword: "Please enter your password",
  };

  const handleSubmit = (e) => {
    // Prevent page from reloading
    e.preventDefault();

    if (!username) {
      // Username input is empty
      setErrorMessages({ name: "noUsername", message: errors.noUsername });
      return;
    }

    if (!password) {
      // Password input is empty
      setErrorMessages({ name: "noPassword", message: errors.noPassword });
      return;
    }


  };

  // Render error messages
  const renderErrorMsg = (name) =>
    name === errorMessages.name && (
      <p className="error_msg">{errorMessages.message}</p>
    );

  return (
    <Card>
      <h1 className="title">Tour Guide</h1>
      <p className="subtitle">
        Please log in using your username and password!
      </p>
      <form onSubmit={handleSubmit}>
        <div className="inputs_container" id="body">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {renderErrorMsg("username")}
          {renderErrorMsg("noUsername")}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {renderErrorMsg("password")}
          {renderErrorMsg("noPassword")}
        </div>
        <input type="submit" value="Log In" className="login_button" />
      </form>
      <div className="link_container">
        <a href="" className="small">
          Forgot Password?
        </a>
      </div>
      <div className="icons">
        <GoogleIcon className="icon" />
        <FacebookIcon className="icon" />
        <TwitterIcon className="icon" />
      </div>
    </Card>
  );
};

export default LoginForm;