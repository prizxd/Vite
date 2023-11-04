import "./style/App.scss";
import "./style/reset.css";
import { useState } from "react";
import posts from "./data/posts.json";
import Post from "./Components/Post/Post";

function App() {
  const [arr, setArr] = useState(posts);

  function delPost(id) {
    const newArr = [...arr];
    const resArr = newArr.filter((item) => item.id != id);
    setArr(resArr);
  }

  return (
    <div className="App">
      {arr.map((item, index) => (
        <Post object={item} delPost={delPost} key={index} />
      ))}
    </div>
  );
}

export default App;
