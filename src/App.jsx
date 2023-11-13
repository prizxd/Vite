import "./style/App.scss";
import "./style/reset.css";
import { useState } from "react";
import Form from "./Components/Form/Form";
import Posts from "./Components/Posts/Posts";

function App() {
  function delPost(id) {
    const newArr = [...arr];
    const resArr = newArr.filter((item) => item.id != id);
    setArr(resArr);
  }

  return (
    <div className="App">
      <Form />
      <Posts />
    </div>
  );
}

export default App;
