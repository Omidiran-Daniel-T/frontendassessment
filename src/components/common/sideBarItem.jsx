import React from "react";
const SideBarItem = ({ imgsrc, imgalt, imgclass, link, linkclass, value }) => {
  return (
    <React.Fragment>
      <img src={imgsrc} alt={imgalt || "icon"} className={imgclass} />
      <a href={link} className={linkclass + " nav-link-text"}>
        {value}
      </a>
    </React.Fragment>
  );
};

export default SideBarItem;
