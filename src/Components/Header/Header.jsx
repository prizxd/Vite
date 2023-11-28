import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import "./header.scss";

export default function Header() {
  return (
    <header>
      <img src="/Logo.svg" alt="Logo.svg" />
      <nav>
        <a href="#" className="header-li">
          Service
        </a>
        <a href="#" className="header-li">
          Feature
        </a>
        <a href="#" className="header-li">
          Home
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
        {/* <NavLink to="/">Home</NavLink>
          <NavLink to="/">Service</NavLink>
          <NavLink to="/">Feature</NavLink>
          <NavLink to="/">Product</NavLink>
          <NavLink to="/">Feedback</NavLink>
          <NavLink to="/">FAQ</NavLink> */}
      </nav>
      <div className="reg-pages">
        <button className="header-button-1">Login</button>
        <button className="header-button-2">Sign up</button>
      </div>
    </header>
  );
}
