import { Link } from "react-router-dom";

import "./header.scss";

export default function Header() {
  return (
    <header>
      <img src="/Logo.svg" alt="Logo.svg" />
      <nav>
        <a href="#" className="header-li">
          Home
        </a>
        <a href="#" className="header-li">
          Service
        </a>
        <a href="#" className="header-li">
          Feature
        </a>
        <a href="#" className="header-li">
          Product
        </a>
        <a href="#" className="header-li">
          Feedback
        </a>
        <a href="#" className="header-li">
          FAQ
        </a>
      </nav>
      <div className="reg-pages">
        <Link to="/login">
          <button className="header-button-1">Login</button>
        </Link>
        <Link to="/registration">
          <button className="header-button-2">Sign up</button>
        </Link>
      </div>
    </header>
  );
}
