import "./register.scss";
import { useState, React } from "react";
import { Link } from "react-router-dom";
export default function Register(props) {
  return (
    <div className="wrapper">
      <form className="form" onSubmit={props.handleRegistration}>
        <p className="title">Sign Up </p>
        <p className="message">Signup now and get full access to our app. </p>
        <div className="flex">
          <label>
            <input
              name="name"
              required=""
              placeholder=""
              type="text"
              className="input"
              onChange={props.handleInputChange}
              value={props.formData.name}
            />
            <span>Firstname</span>
          </label>
          <label>
            <input
              name="secondname"
              required=""
              placeholder=""
              type="text"
              className="input"
              onChange={props.handleInputChange}
              value={props.formData.secondname}
            />
            <span>Lastname</span>
          </label>
        </div>
        <label>
          <input
            name="email"
            required=""
            placeholder=""
            type="email"
            className="input"
            onChange={props.handleInputChange}
            value={props.formData.email}
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
            onChange={props.handleInputChange}
            value={props.formData.password}
          />
          <span>Password</span>
        </label>
        <button className="submit">Submit</button>
        <p className="signin">
          Already have an acount ? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
