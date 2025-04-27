import React from "react";
import "./About.css";
import Tittle from "../../layouts/Tittle.jsx";
import { FaMobile, FaServer, FaBars, FaPen } from "react-icons/fa";
import { SiAntdesign, } from "react-icons/si";
import Card from "./Card.jsx";
import { FaMagnifyingGlass } from "react-icons/fa6";

const About = () => {
  return (
    <>
      <section
        id="about"
        className=" w-full text-White border-b-[1px] border-b-gray-600  "
      >
        <Tittle title="about" des="What i do" />
        <div className="grid grid-cols-1 gap-10 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3">
          <Card
            title="Fullstack Web-development"
            des="Versatile Front and Back-end Developer "
            icon={<FaBars />}
          />
          <Card
            title="Mobile Development"
            des="Android developer"
            icon={<FaMobile />}
          />
          <Card
            title="UI/UX Designer"
            des="UI/UX and Graphic Designer"
            icon={<SiAntdesign />}
          />
          <Card
            title="Pen-Tester"
            des="Well Equiped Pen-Tester "
            icon={<FaMagnifyingGlass />}
          />
          <Card
            title="Free Lancer (Online Writting) "
            des="A good Desertaion, Assignments and Essays Writter "
            icon={<FaPen />}
          />
        </div>
      </section>
    </>
  );
};

export default About