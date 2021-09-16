import React from "react";
const OTSection = ({ color, tag, value }) => {
  return (
    <div className="del">
      <div className="ot-tag">
        <div className={"ot-color-icon" + color}></div>
        {tag}
      </div>
      <span className="ot-value">{value}</span>
    </div>
  );
};

export default OTSection;
