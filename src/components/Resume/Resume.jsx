import React, { useState } from "react";
import Tittle from "../layouts/Tittle";
import "./resume.css";
import Skills from "./skills";
import Experience from "./Experience";
import Achievements from "./Achievements";
import Education from "./Education";

const Resume = () => {
  const [EducationData, setEducationData] = useState(true);
  const [skillsData, setSkillsData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementsData, setAchievementsData] = useState(false);

  function Edu() {
    setEducationData(true) &
      setSkillsData(false) &
      setExperienceData(false) &
      setAchievementsData(false);
  }

  function skill() {
    setEducationData(false) &
      setSkillsData(true) &
      setExperienceData(false) &
      setAchievementsData(false);
  }
  function Expe() {
    setEducationData(false) &
      setSkillsData(false) &
      setExperienceData(true) &
      setAchievementsData(false);
  }
  function Achiev() {
    setEducationData(false) &
      setSkillsData(false) &
      setExperienceData(false) &
      setAchievementsData(true);
  }

  return (
    <section id="resume">
      <div className="flex justify-center items-center text-center">
        <Tittle des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-4">
          <li
            onClick={Edu}
            className={` hover:bg-gray-600 ${
              EducationData
                ? "border-gray-800 border-[2px] bg-gray-400  " 
                : "border-none bg-gray-600"
            } resume_li  `}
          >
            Education
          </li>
          <li
            onClick={skill}
            className={`${
              skillsData
                ? "border-gray-800 border-[2px] bg-gray-400"
                : "border-none bg-gray-600"
            } resume_li`}
          >
            Skill
          </li>
          <li
            onClick={Expe}
            className={`${
              experienceData
                ? "border-gray-800 border-[2px] bg-gray-400"
                : "border-none bg-gray-600"
            } resume_li`}
          >
            Experience
          </li>
          <li
            onClick={Achiev}
            className={`${
              achievementsData
                ? "border-gray-800 border-[2px] bg-gray-400"
                : "border-none bg-gray-600"
            } resume_li`}
          >
            Achievements
          </li>
        </ul>
      </div>

      {EducationData && <Education />}
      {skillsData && <Skills />}
      {experienceData && <Experience />}
      {achievementsData && <Achievements />}
    </section>
  );
};

export default Resume;
