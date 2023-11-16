import "./App.css";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import Content from "./components/Content/Content";
import AnimatedLogo from "./components/AnimatedLogo/AnimatedLogo";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <Carousel />

      <Content />

      <AnimatedLogo />

      <Footer />
    </div>
  );
}

export default App;
