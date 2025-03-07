import React from "react";
import Tittle from "../layouts/Tittle";
import "./resume.css";
import ResumeCard from "./ResumeCard";

const Resume = () => {
  return (
    <section id="resume">
      <div className="flex justify-center items-center text-center">
        <Tittle des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-4">
          <li className="resume_li">Education</li>
          <li className="resume_li">Skill</li>
          <li className="resume_li">Experience</li>
          <li className="resume_li">Achievements</li>
        </ul>
      </div>
      <div className="resume_left">
        <h2 className="text-4xl font-bold ">Education</h2>
      </div>
      <div className="resume_data w-1/2 h-[1000px] border-l-[4px] border-gray-400 flex flex-col">
        <ResumeCard
          title="Kirinyaga University"
          subtitle="Bachelor of Science in software Engineering"
          time="2023-2027"
          result="Degree in software Engineering"
          des="Atained a degree in software engineering with additional IT, graphic Design, Networking and Freelancing."
        />
        <ResumeCard
          title="Kirinyaga University"
          subtitle="Bachelor of Science in software Engineering"
          time="2023-2027"
          result="Degree in software Engineering"
          des="Atained a degree in software engineering with additional IT, graphic Design, Networking and Freelancing."
        />
        <ResumeCard
          title="Kirinyaga University"
          subtitle="Bachelor of Science in software Engineering"
          time="2023-2027"
          result="Degree in software Engineering"
          des="Atained a degree in software engineering with additional IT, graphic Design, Networking and Freelancing."
        />
      </div>
    </section>
  );
};

export default Resume;
