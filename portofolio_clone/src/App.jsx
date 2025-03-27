import "./App.css";
import Contact from "./components/contacts/Contact"
import Home from "./components/header/Home/Home";
import Nav from "./components/header/Nav";
import Projects from "./components/projects/project";
import About from "./components/header/about/about"
import Resume from "./components/Resume/Resume"

function App() {
  return (
    <>
      <div className="app_style  ">
        <Nav  />
        <Home />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </div>
    </>
  );
}

export default App;
