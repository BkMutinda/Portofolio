import { RiContactsBook2Line } from "react-icons/ri";
import "./App.css";
import About from "./components/header/About/About";
import Home from "./components/header/Home/Home";
import Nav from "./components/header/Nav";
import Projects from "./components/projects/project";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contacts/Contact";

function App() {
  return (
    <>
      <div className="">
        <Nav />
        <div className="app_style  ">
          <Home />
          <About />
          <Projects />
          <Resume />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
