import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

function JoinUs(props) {
  const getData = () => {
    let x = document.getElementById("username");
    let y = document.getElementById("password");
    const username = x.value;
    const password = y.value;
    alert(`Username: ${username}\nPassword: ${password}`);
  };

  return (
    <div className="container">
      <div className="login-field">
        <h1>Login</h1>
        <form>
          <label htmlFor="username">Username</label>
          <div className="username">
            <i className="fa-light fa-user-vneck"></i>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Type your username"
              required
            />
          </div>
          <label htmlFor="password">Password</label>
          <div className="password">
            <i className="fa-light fa-lock-keyhole"></i>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Type your password"
              required
            />
          </div>
          <Link to="/">Forgot Password?</Link>
          <br />
          <input type="submit" value="LOGIN" id="submit-btn" onClick={getData} />
        </form>
        <div className="links">
          <p>Or Sign In Using</p>
          <div className="icons">
            <Link to="https://www.facebook.com" target="_blank">
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
            <Link to="https://www.twitter.com" target="_blank">
              <i className="fa-brands fa-twitter"></i>
            </Link>
            <Link to="https://www.google.com" target="_blank">
              <i className="fa-brands fa-google"></i>
            </Link>
          </div>
        </div>
        <div className="sign-up">
          <p>Do not have an account?</p>
          <Link to="/">SIGN UP</Link>
        </div>
      </div>
    </div>
  );
}

JoinUs.propTypes = {};

export default JoinUs;
