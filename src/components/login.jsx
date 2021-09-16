import React from "react";
import { Link } from "react-router-dom";
import Input from "./common/input";
const Login = () => {
  return (
    <div className="form-section">
      <div className="top-text">
        <p className="info-text1">You’re Welcome Back!</p>
        <p className="info-text2">Enter the following information below</p>
      </div>
      <form className="form">
        <Input
          type="email"
          classes="form-control textbox"
          id="inputEmail1"
          placeholder="Email Address"
        />
        <Input
          type="password"
          classes="form-control textbox"
          id="inputPassword1"
          placeholder="Password"
          dClass="input-group"
        />
        <label className="form-label fgp">Forgot Password?</label>
        <br />
        <label className="form-label regnow">
          Just Joining us here?{"  "}
          <Link to="/register" className="regnowlink">
            Register Now
          </Link>
        </label>
        <button type="submit" className="btn submit-btn loginbx">
          <Link to="/dashboard" className="login">
            Login
          </Link>
        </button>
      </form>
    </div>
  );
};

export default Login;
