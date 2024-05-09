import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import Tagline from "./Components/Tagline";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Slider></Slider>
      <Tagline></Tagline>
    </>
  );
}

export default App;
