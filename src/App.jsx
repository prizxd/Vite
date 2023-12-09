import Wrapper from "./Components/Wrapper/Wrapper";
import LoginPage from "./Components/User/LoginPage/LoginPage";
import Register from "./Components/User/Register/Register";
import "./stylesDefault/App.scss";
import "./stylesDefault/reset.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState, React } from "react";
function App() {
  const [userData, setUserData] = useState([
    { name: "a", email: "a@a.com", password: "123" },
    { name: "b", email: "b@b.com", password: "qwe" },
  ]);

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });
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
                setUserData={setUserData}
              />
            }
          />
          <Route
            path="/registration"
            element={
              <Register
                userData={userData}
                newUser={newUser}
                setNewUser={setNewUser}
                setUserData={setUserData}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
