import React from "react";
import "./profile.scss";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
function Profile() {
  const user = firebase.auth().currentUser;
  return (
    <div className="profile">
      <h1>Welcome to your profile</h1>
      {user ? <p>Email: {user.email}</p> : <p>Please log in</p>}
    </div>
  );
}

export default Profile;
