import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      alert("Registration successful");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert({ errorMessage });
    }
  };
  return (
    <div className="wrapper">
      <form className="form" onSubmit={handleRegister}>
        <p className="title">Sign Up </p>
        <p className="message">Signup now and get full access to our app. </p>
        <label>
          <input
            name="email"
            required=""
            placeholder=""
            type="email"
            className="input"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <span>Email</span>
        </label>
        <label>
          <input
            name="password"
            required=""
            placeholder=""
            type="password"
            className="input"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <span>Password</span>
        </label>
        <button className="submit">Submit</button>
        <p className="signin">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </form>
    </div>
  );
}
export default Register;
