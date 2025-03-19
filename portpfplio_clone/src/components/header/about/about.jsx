import React from "react";
import "./about.css";
import Tittle from "../../layouts/Tittle.jsx";
import { FaMobile, FaServer, FaBars } from "react-icons/fa";
import { SiAntdesign, SiProgress } from "react-icons/si";
import { FaComputer } from "react-icons/fa6";
import Card from "./Card.jsx";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="about w-full text-White border-b-[1px] border-b-gray-600  "
      >
        <Tittle title="about" des="What i do" />
        <div className="grid grid-cols-1 gap-20">
          <Card
            title="Bussiness strategy"
            des="this is the dexcription of the first box"
            icon={<FaBars />}
          />
          <Card
            title="Mobile Development"
            des="this is the dexcription of the first box"
            icon={<FaMobile />}
          />
          <Card
            title="UI/UX Designer"
            des="this is the dexcription of the first box"
            icon={<SiAntdesign />}
          />
          <Card
            title="Website Hosting"
            des="this is the dexcription of the first box"
            icon={<FaServer />}
          />
          <Card
            title="SEO "
            des="this is the dexcription of the first box"
            icon={<SiProgress />}
          />
          <Card
            title="Cyber Security"
            des="this is the dexcription of the first box"
            icon={<FaComputer />}
          />
        </div>
      </section>
    </>
  );
};

export default About
