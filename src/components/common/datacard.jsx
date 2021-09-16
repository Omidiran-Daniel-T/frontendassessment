import React from "react";
const DataCard = ({ tag, icon, gicon, value, color }) => {
  return (
    <div className={color}>
      <div className="du-up">
        <span className="du-up-text">{tag}</span>
        <img src={icon} alt="icon" />
      </div>
      <div className="du-down">
        <div>
          <span className="du-down-text">{value}</span>
          <img src={gicon} alt="gicon" />
        </div>
        <div className="dropdown"></div>
      </div>
    </div>
  );
};

export default DataCard;
