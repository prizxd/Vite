import { Link } from "react-router-dom";
import { useState, React } from "react";
import "./loginPage.scss";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ Email: email, Password: password });
  };
  return (
    <div className="wrapper">
      <form className="form" onSubmit={handleLogin}>
        <p className="title">Login </p>
        <div className="flex"></div>
        <label>
          <input
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
            required=""
            placeholder=""
            type="password"
            className="input"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <span>Password</span>
        </label>
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
