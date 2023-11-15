import "./App.css";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import Content from "./components/Content/Content";

function App() {
  return (
    <div className="App">
      <Header />

      <Carousel />
      <div className="body">
        <Content />
      </div>
    </div>
  );
}

export default App;
