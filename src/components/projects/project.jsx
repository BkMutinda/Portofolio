import React from "react";
import Tittle from "../layouts/Tittle";
import "./projects.css";
import ProjectCard from "./ProjectCard/ProjectCard";
import project1 from "/assets/project1.png"
import project2 from "/assets/project2.jpg"
import project3 from "/assets/project3.jpg"
import project4 from "/assets/project4.jpg"
import project5 from "/assets/project5.jpg"
import project6 from "/assets/project6.jpeg"

const project = () => {
  return (
    <>
      <section
        id="projects"
        className="projects_section w-full borderb-[1px] border-b-gray-400 "
      >
        <div className="flex justify-center items-center text-center">
          <Tittle des="my projects" />
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid sm:grid-cols-2 sm:gap-10  lg:grid lg:grid-cols-3 ">
          <ProjectCard
            tittle="Single Webpage"
            des="A nice looking simple html and css webpage"
            src={project1}
          />
          <ProjectCard
            tittle="Number System Converter"
            des="A js system that converts input numbers to a variety of their equivalent forms."
            src={project2}
          />
          <ProjectCard
            tittle="Social App"
            des="Comming soon"
            src={project6}
          />
          <ProjectCard
            tittle="Hospital System"
            des="Coming soon"
            src={project5}
          />

        </div>
      </section>
    </>
  );
};

export default project;