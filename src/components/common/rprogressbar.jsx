import React from "react";
import RProgressBar from "@ramonak/react-progress-bar";

const RProgressBars = ({ day, value }) => {
  return (
    <tr>
      <td className="do-day">{day}</td>
      <td className="do-progress-bar">
        <RProgressBar
          completed={value}
          width={"270px"}
          height={"10px"}
          bgColor={"#053582"}
          isLabelVisible={false}
        />
      </td>
    </tr>
  );
};

export default RProgressBars;
