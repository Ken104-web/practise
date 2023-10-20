import React from "react";
import "./loggedin.css";
import { Link } from "react-router-dom"

const LoggedIn = ({ setIsLoggedIn }) => {
  return (
    <>
      <h1 className="title">You are now logged in!</h1>
      <button className="back_button" onClick={() => setIsLoggedIn(false)}>
        Go Back
      </button>
      <Link to="/login">
      <button className="back_button" onClick={() => setIsLoggedIn(true)}>
        Continue to adventure
      </button>
      </Link>
    
    </>
  );
};

export default LoggedIn;