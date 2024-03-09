import Wrapper from "./Components/Wrapper/Wrapper";
import LoginPage from "./Components/User/LoginPage/LoginPage";
import Register from "./Components/User/Register/Register";
import Profile from "./Components/User/Profile/Profile";
import "./stylesDefault/App.scss";
import "./stylesDefault/reset.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Wrapper />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
