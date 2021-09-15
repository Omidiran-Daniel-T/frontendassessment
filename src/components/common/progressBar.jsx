import React from "react";
const ProgressBar = ({
  classes,
  role,
  valueNow,
  curValue,
  valueMin,
  valueMax,
  parentClasses,
}) => {
  return (
    <div className={parentClasses}>
      <div
        className={classes}
        role={role}
        aria-valuenow={valueNow}
        aria-valuemin={valueMin}
        aria-valuemax={valueMax}
        style={{ width: curValue + "%" }}
      ></div>
    </div>
  );
};

export default ProgressBar;
