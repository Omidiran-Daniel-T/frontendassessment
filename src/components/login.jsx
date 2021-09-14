import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="form-section">
      <div className="top-text">
        <p className="info-text1">You’re Welcome Back!</p>
        <p className="info-text2">Enter the following information below</p>
      </div>
      <form className="form">
        <div className="mb-3">
          <input
            type="email"
            className="form-control textbox"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email Address"
          />
        </div>
        <div className="mb-3 input-group">
          <input
            type="password"
            className="form-control textbox"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <label className="form-label fgp">Forgot Password?</label>
        <br />
        <label className="form-label regnow">
          Just Joining us here?
          <Link to="/register" className="regnowlink">
            Register Now
          </Link>
        </label>
        <button type="submit" className="btn submit-btn loginbx">
          <Link to="/" className="login">
            Login
          </Link>
        </button>
      </form>
    </div>
  );
};

export default Login;
