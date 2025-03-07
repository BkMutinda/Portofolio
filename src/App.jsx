import "./App.css";
import About from "./components/header/About/About";
import Home from "./components/header/Home/Home";
import Nav from "./components/header/nav";
import Projects from "./components/projects/project";
import Resume from "./components/Resume/Resume";

function App() {
  return (
    <>
      <div className="app_style  ">
        <Nav />
        <Home />
        <About />
        <Projects />
        < Resume />
      </div>
    </>
  );
}

export default App;
