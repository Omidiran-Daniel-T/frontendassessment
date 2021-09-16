import React from "react";
const UserProfile = ({ imgsrc, name, accType }) => {
  return (
    <div className="details">
      <div className="profile-photo">
        <img src={imgsrc} alt="profile" className="profile-img" />
      </div>
      <div className="name">
        {name} <span className="account-type">{accType}</span>
      </div>
    </div>
  );
};

export default UserProfile;
