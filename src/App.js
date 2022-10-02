import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About/>
    </div>
  );
}

export default App;
