import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig.js";
import firebase from "firebase/compat/app";
firebase.initializeApp(firebaseConfig);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./stylesDefault/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
