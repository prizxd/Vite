import "./style/App.scss";
import "./style/reset.css";
import { useState } from "react";
import Form from "./Components/Form/Form";
import Posts from "./Components/Posts/Posts";

function App() {
  const [arr, setArr] = useState("");
  const [flag, setFlag] = useState(false);

  const addPost = (name, surName, number, email, address) => {
    setArr([
      ...arr,
      {
        name,
        surName,
        number,
        email,
        address,
      },
    ]);
  };

  function changeFlag() {
    setFlag(!flag);
  }
  function getRender() {
    if (flag === true) {
      return (
        <div className="parent">
          {arr.map((item) => (
            <Posts obj={item} key={item} />
          ))}
        </div>
      );
    }
  }
  return (
    <div className="App">
      <Form addPost={addPost} />
      <button type="button" onClick={changeFlag}>
        Показать заказы
      </button>
      {getRender()}
    </div>
  );
}

export default App;
