import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getUserData, setUserData } from "../Storage/Storage";
import "./register.scss";

const Register = ({ setUserData, newUser, setNewUser }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "surname") {
      setSurname(value);
    } else {
      setNewUser((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
    }
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const userExists = getUserData().some(
      (user) => user.email === newUser.email
    );
    if (!userExists) {
      setUserData((prevData) => [
        ...prevData,
        {
          name: newUser.name || "",
          surname: newUser.surname || "",
          email: newUser.email,
          password: newUser.password,
        },
      ]);

      setNewUser({ name: "", email: "", password: "" });
      alert("Новый пользователь добавлен.");
    } else {
      alert("Пользователь уже существует");
    }
  };

  return (
    <div className="wrapper">
      <form className="form">
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
              onChange={handleInputChange}
              value={name}
            />
            <span>Firstname</span>
          </label>
          <label>
            <input
              name="surname"
              required=""
              placeholder=""
              type="text"
              className="input"
              onChange={handleInputChange}
              value={surname}
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
            onChange={handleInputChange}
            value={newUser.email}
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
            onChange={handleInputChange}
            value={newUser.password}
          />
          <span>Password</span>
        </label>
        <button className="submit" onClick={handleAddUser}>
          Submit
        </button>
        <p className="signin">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;

// import "./register.scss";
// import { React } from "react";
// import { Link } from "react-router-dom";
// export default function Register(props) {
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     props.setNewUser((prevUser) => ({
//       ...prevUser,
//       [name]: value,
//     }));
//   };

//   const handleAddUser = (e) => {
//     e.preventDefault();
//     const userExists = props.userData.some(
//       (user) => user.email === props.newUser.email
//     );
//     if (!userExists) {
//       props.setUserData((prevData) => [
//         ...prevData,
//         {
//           name: props.newUser.name,
//           email: props.newUser.email,
//           password: props.newUser.password,
//         },
//       ]);

//       alert("Новый пользователь добавлен.");
//       props.setNewUser({ name: "", email: "", password: "" });
//     } else {
//       alert("Пользователь уже существует");
//     }
//   };

//   return (
//     <div className="wrapper">
//       <form className="form">
//         <p className="title">Sign Up </p>
//         <p className="message">Signup now and get full access to our app. </p>
//         <div className="flex">
//           <label>
//             <input
//               name="name"
//               required=""
//               placeholder=""
//               type="text"
//               className="input"
//               onChange={handleInputChange}
//               value={props.newUser.name}
//             />
//             <span>Firstname</span>
//           </label>
//           <label>
//             <input
//               name="surname"
//               required=""
//               placeholder=""
//               type="text"
//               className="input"
//               onChange={handleInputChange}
//             />
//             <span>Lastname</span>
//           </label>
//         </div>
//         <label>
//           <input
//             name="email"
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
//             name="password"
//             required=""
//             placeholder=""
//             type="password"
//             className="input"
//             onChange={handleInputChange}
//             value={props.newUser.password}
//           />
//           <span>Password</span>
//         </label>
//         <button className="submit" onClick={handleAddUser}>
//           Submit
//         </button>
//         <p className="signin">
//           Already have an acount ? <Link to="/login">Login</Link>
//         </p>
//       </form>
//     </div>
//   );
// }
