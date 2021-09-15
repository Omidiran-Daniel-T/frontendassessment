import React from "react";
const Input = ({ type, classes, id, placeholder, dClass }) => {
  return (
    <div className={"mb-3 " + dClass || ""}>
      <input
        type={type}
        className={classes}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
