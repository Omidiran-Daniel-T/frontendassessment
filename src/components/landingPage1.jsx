import React from "react";
import Jumbotron from "./jumbotron";
import Login from "./login";
import Logo from "./logo";
const LandingPage1 = () => {
  return (
    <div className="App">
      <Logo />
      <div className="container">
        <div className="left">
          <Jumbotron />
        </div>
        <div className="right">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default LandingPage1;
