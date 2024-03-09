import React from "react";
import "./profile.scss";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

function Profile() {
  const user = firebase.auth().currentUser;
  return (
    <div className="profile">
      <h1>Welcome to your profile</h1>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Profile;
