import React from "react";
import Jumbotron from "../components/jumbotron";
import Logo from "./logo";
import Register from "./register";
const LandingPage2 = () => {
  return (
    <div className="App">
      <Logo />
      <div className="container">
        <div className="left">
          <Jumbotron />
        </div>
        <div className="right">
          <Register />
        </div>
      </div>
    </div>
  );
};

export default LandingPage2;
