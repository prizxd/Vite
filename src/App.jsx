import Wrapper from "./Components/Wrapper/Wrapper";
import LoginPage from "./Components/User/LoginPage/LoginPage";
import Register from "./Components/User/Register/Register";
import Profile from "./Components/User/Profile/Profile";
import "./stylesDefault/App.scss";
import "./stylesDefault/reset.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState, React } from "react";
function App() {
  const [userData, setUserData] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "", password: "" });
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Wrapper />} />
          <Route
            path="/login"
            element={
              <LoginPage
                userData={userData}
                newUser={newUser}
                setNewUser={setNewUser}
              />
            }
          />
          <Route
            path="/registration"
            element={
              <Register
                setUserData={setUserData}
                newUser={newUser}
                setNewUser={setNewUser}
              />
            }
          />
          <Route path="/profile" element={<Profile userData={userData} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
