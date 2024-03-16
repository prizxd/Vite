import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./loginPage.scss";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigate("/profile");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="wrapper">
      <form className="form" onSubmit={handleLogin}>
        <p className="title">Login</p>
        <div className="flex"></div>
        <label>
          <input
            required=""
            placeholder=""
            type="email"
            className="input"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="email"
          />
          <span>Email</span>
        </label>
        <label>
          <input
            required=""
            placeholder=""
            type="password"
            className="input"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name="password"
          />
          <span>Password</span>
        </label>
        {error && <p>{error.message}</p>}
        <button className="submit" type="submit">
          Submit
        </button>
        <p className="signup">
          Don't have an account? <Link to="/registration">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;