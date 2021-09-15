import React from "react";
import ProgressBar from "./common/progressBar";
const DailyProgress = ({ day, value }) => {
  return (
    <div className="progress-day">
      <span className="progress-title">{day}</span>
      <div className="progress-bar-wrap">
        <ProgressBar
          classes="daily-progress-bar"
          role="progressbar"
          valuenow={"" + value + ""}
          curValue={value}
          valuemin="0"
          valuemax="100"
          parentClasses="daily-progress"
        />
      </div>
    </div>
  );
};

export default DailyProgress;
