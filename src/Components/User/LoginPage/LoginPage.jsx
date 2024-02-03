import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getUserData } from "../Storage/Storage";
import "./loginPage.scss";

const Login = ({ userData, setNewUser, newUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleCheckUser = (e) => {
    e.preventDefault();
    const userExists = userData.some(
      (user) => user.email === email && user.password === password
    );
    if (userExists) {
      alert("Пользователь найден.");
      setNewUser({ name: "", email: "", password: "" });
    } else {
      alert("Пользователь не найден.");
    }
  };

  return (
    <div className="wrapper">
      <form className="form">
        <p className="title">Login</p>
        <div className="flex"></div>
        <label>
          <input
            required=""
            placeholder=""
            type="email"
            className="input"
            onChange={handleInputChange}
            value={newUser.email}
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
            onChange={handleInputChange}
            value={newUser.password}
            name="password"
          />
          <span>Password</span>
        </label>
        <button className="submit" type="submit" onClick={handleCheckUser}>
          Submit
        </button>
        <p className="signup">
          Don't have an account? <Link to="/registration">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

// import { Link } from "react-router-dom";
// import { React } from "react";
// import "./loginPage.scss";
// export default function LoginPage(props) {
//   const handleInputChange = (e) => {
//     console.log("1");
//     const { name, value } = e.target;
//     props.setNewUser((prevUser) => ({
//       ...prevUser,
//       [name]: value,
//     }));
//   };

//   const handleCheckUser = (e) => {
//     e.preventDefault();
//     console.log("2");
//     const userExists = props.userData.some(
//       (user) => user.email === props.newUser.email
//     );
//     if (userExists) {
//       alert(`Вы вошли.`);
//       props.setNewUser({ name: "", email: "", password: "" });
//     } else {
//       alert(`Пользователь не найден.`);
//     }
//   };
//   return (
//     <div className="wrapper">
//       <form className="form">
//         <p className="title">Login</p>
//         <div className="flex"></div>
//         <label>
//           <input
//             required=""
//             placeholder=""
//             type="email"
//             className="input"
//             onChange={handleInputChange}
//             value={props.newUser.email}
//           />
//           <span>Email</span>
//         </label>
//         <label>
//           <input
//             required=""
//             placeholder=""
//             type="password"
//             className="input"
//             onChange={handleInputChange}
//             value={props.newUser.password}
//           />
//           <span>Password</span>
//         </label>
//         <button className="submit" type="submit" onClick={handleCheckUser}>
//           Submit
//         </button>
//         <p className="signup">
//           Don't have an account? <Link to="/registration">Sign Up</Link>
//         </p>
//       </form>
//     </div>
//   );
// }
