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
        <div className="grid grid-cols-1 gap-10">
          <ProjectCard
            tittle="Ecomerce websit"
            des="A nice looking and functioning eccomerce website made in react js, tailwindcss, framer motion, react icons, react smooth scroll"
            src={project1}
          />
          <ProjectCard
            tittle="Ecomerce websit"
            des="A nice looking and functioning eccomerce website made in react js, tailwindcss, framer motion, react icons, react smooth scroll"
            src={project2}
          />
          <ProjectCard
            tittle="Ecomerce websit"
            des="A nice looking and functioning eccomerce website made in react js, tailwindcss, framer motion, react icons, react smooth scroll"
            src={project3}
          />
          <ProjectCard
            tittle="Ecomerce websit"
            des="A nice looking and functioning eccomerce website made in react js, tailwindcss, framer motion, react icons, react smooth scroll"
            src={project4}
          />
          <ProjectCard
            tittle="Ecomerce websit"
            des="A nice looking and functioning eccomerce website made in react js, tailwindcss, framer motion, react icons, react smooth scroll"
            src={project5}
          />
          <ProjectCard
            tittle="Ecomerce websit"
            des="A nice looking and functioning eccomerce website made in react js, tailwindcss, framer motion, react icons, react smooth scroll"
            src={project6}
          />
        </div>
      </section>
    </>
  );
};

export default project;
