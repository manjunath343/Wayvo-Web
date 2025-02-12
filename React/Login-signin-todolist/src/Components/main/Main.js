import React from "react";
import { Link } from 'react-router-dom';
import './Main.css';
import logo from './image.png';
function Main() {
    return (
        <div className="App1">
        <div className="App-header">
        <img src={logo} alt="Wayvo Logo" className="img1"/>
        <h1>Welcome to Wayvo.ai</h1>
        <h1>Access the Todo List</h1>
        <div className="button-container">
          <Link to="/signup">
            <button className="signup-button1">Sign Up</button>
          </Link>
          <Link to="/login">
            <button className="login-button1">Log In</button>
          </Link>
        </div>
        </div>
        </div>

    );
    }
export default Main;