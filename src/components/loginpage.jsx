import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const LoginPage = () => {
  return (
    <div className="form-section">
      <div className="top-text">
        <p className="info-text1">You’re Welcome Back!</p>
        <p className="info-text2">Enter the following information below</p>
      </div>
      <Box
        className="form"
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />

        <label className="form-label fgp">Forgot Password?</label>
        <br />
        <label className="form-label regnow">
          Just Joining us here?{"  "}
          <Link to="/register" className="regnowlink">
            Register Now
          </Link>
        </label>
        <Link to="/dashboard" className="login">
          <button type="submit" className="btn submit-btn loginbx">
            Login
          </button>
        </Link>
      </Box>
    </div>
  );
};

export default LoginPage;
