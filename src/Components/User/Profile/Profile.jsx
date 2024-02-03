import React from "react";
import "./profile.scss";
const Profile = ({ userData }) => {
  return (
    <div className="profile">
      <h1>Welcome to your profile!</h1>
      {userData.map((user, index) => (
        <div key={index}>
          <p>Name: {user.name || "N/A"}</p>
          <p>Surname: {user.surname || "N/A"}</p>
          <p>Email: {user.email}</p>
          <p>Password: {user.password}</p>
        </div>
      ))}
    </div>
  );
};

export default Profile;
