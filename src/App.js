import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Exp from "./Pages/Exp";
import Works from "./Pages/Works";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Exp />
      <Works />
    </div>
  );
}

export default App;
