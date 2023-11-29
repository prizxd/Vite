import Header from "./Components/Header/Header";
import MainPart1 from "./Components/Main/MainPart1/MainPart1";
import MainPart2 from "./Components/Main/MainPart2/MainPart2";
import Footer from "./Components/Footer/Footer";
import "./stylesDefault/App.scss";
import "./stylesDefault/reset.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <MainPart1 />
        <MainPart2 />
      </main>
      <Footer />
    </div>
  );
}

export default App;
