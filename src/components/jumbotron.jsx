import React from "react";
import jimg from "../images/jumbotronimg.png";

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <img src={jimg} className="jimg" alt="Jumbo" />
      <p className="largeText">
        Lets help you manage your riders and dilivery systems.
      </p>
      <p className="smallerText">
        Every logistics company whether it’s a multi-national branding
        corporation or a regular local deserves the basic standard necessities
        in achieving a high service delivery
      </p>
      <div className="getStarted">Get Started</div>
    </div>
  );
};

export default Jumbotron;
