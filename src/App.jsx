import "./style/App.scss";
import "./style/reset.css";
import { useState } from "react";

function App() {
  const [flag, setFlag] = useState(false);

  function changeFlag() {
    setFlag(!flag);
  }

  function getRender() {
    if (flag === false) {
      return <button onClick={changeFlag}>Открыть</button>;
    } else {
      return (
        <div className="block">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
            suscipit.
          </p>
          <button onClick={changeFlag}>Закрыть</button>
        </div>
      );
    }
  }

  return <div className="App">{getRender()}</div>;
}

export default App;
