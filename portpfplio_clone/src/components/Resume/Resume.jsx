import React, { useState } from "react";
import Tittle from "../layouts/Tittle";
import "./resume.css";
import Skills from "./Skills";

const Resume = () => {
  const [skillsData, setSkillsData] = useState(null);

  function skill() {
    setSkillsData(skillsData === skillsData ? null:skillsData);
  }  
  


  return (
    <section id="resume">
      <div className="flex justify-center items-center text-center">
        <Tittle des="Skill Set" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1">
          <li
            onClick={skill }
            className={`${
              skillsData
                ? "border-gray-800 border-[2px] bg-gray-400"
                : "border-none bg-gray-600"
            } resume_li`}
          >
            Skills and Tools
          </li>
        </ul>
      </div>

      {skillsData && <Skills />}
    </section>
  );
};

export default Resume;
