import Wrapper from "./Components/Wrapper/Wrapper";
import LoginPage from "./Components/User/LoginPage/LoginPage";
import Register from "./Components/User/Register/Register";
import "./stylesDefault/App.scss";
import "./stylesDefault/reset.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState, React } from "react";
function App() {
  const [formData, setFormData] = useState({
    name: "",
    secondname: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log("Registration Form Data:", formData);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Wrapper />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/registration"
            element={
              <Register
                handleRegistration={handleRegistration}
                formData={FormData}
                handleInputChange={handleInputChange}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
