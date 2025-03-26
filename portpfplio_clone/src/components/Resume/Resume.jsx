import React, { useState } from "react";
import Tittle from "../layouts/Tittle";
import "./resume.css";
import Skills from "./Skills";

const Resume = () => {


  return (
    <section id="resume">
      <div className="flex justify-center items-center text-center">
        <Tittle des="Skill Set" />
      </div>
      {/* <div>
        <ul className="w-full grid grid-cols-1">
          <li
            // className={`${
            //   skillsData
            //     ? "border-gray-800 border-[2px] bg-gray-400"
            //     : "border-none bg-gray-600"
            // } resume_li`}
          >
            Skills and Tools
          </li>
        </ul>
      </div> */}

      {<Skills />}
    </section>
  );
};

export default Resume;
