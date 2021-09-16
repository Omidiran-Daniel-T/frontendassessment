import React from "react";
const scaleC = (start, stops, max) => {
  let s = [];
  for (let i = start; i <= stops; i++) {
    let v = <span>i</span>;
    s.push(v);
  }
  s.push(max);
  let scale = <React.Fragment>{}</React.Fragment>;
};
const Scale = ({ start, stop, max }) => {
  return <React.Fragment></React.Fragment>;
};

export default Scale;
