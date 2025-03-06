import "./App.css";
import About from "./components/header/About/About";
import Home from "./components/header/Home/Home";
import Nav from "./components/header/nav";

function App() {
  return (
    <>
      <div className="app_style  ">
        <Nav />
        <Home />
        <About />
      </div>
    </>
  );
}

export default App;
