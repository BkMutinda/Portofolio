import React, { useState } from "react";
import Tittle from "../layouts/Tittle";
import "./resume.css";
import Skills from "./Skills";

const Resume = () => {


  return (
    <section id="resume">
      <div className="flex justify-center items-center text-center   ">
        <Tittle des="Skill Set" />
      </div>
      <Skills />
    </section>
  );
};

export default Resume;