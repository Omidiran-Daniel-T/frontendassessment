import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="register-section">
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div className="top-text">
        <p className="rit1">Basic Information</p>
        <p className="rit2">Enter the following information below</p>
      </div>
      <form className="register-form">
        <div className="mb-3 namebx">
          <input
            type="text"
            className="form-control cnamebx input"
            id="companyname"
            placeholder="Company Name"
          />
          <input
            type="text"
            className="form-control nnamebx input"
            id="lastname"
            placeholder="Last Name"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control input "
            id="companyaddress"
            placeholder="Company Address"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control input"
            id="phonenumber"
            placeholder="Phone number"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control input"
            id="companyemailaddress"
            placeholder="Company Email Address"
          />
        </div>
        <div className="mb-3 input-group">
          <input
            type="password"
            className="form-control input"
            id="password"
            placeholder="Password"
          />
        </div>

        <div className="terms">
          By clicking "Next" you agree to our{" "}
          <span className="policy">Terms of Service, Privacy Policy</span>, and
          to receive marketing communications from Envoy.
        </div>
        <div className="reg-form-footer">
          <label className="got">
            Got an account?{" "}
            <Link to="/login" className="signin">
              Signin
            </Link>
          </label>
          <button type="submit" className="reg btn">
            <span className="regbtn">Register</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
