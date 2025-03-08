import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";

const Achievements = () => {
  return (
    <div className="">
      <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:5}}} className="flex gap-20">
        <div className="">
          <div className="resume_left">
            <h2 className="text-4xl font-bold ">Achievements</h2>
          </div>
          <div className="resume_data w-full h-[900px] border-l-[4px] border-gray-400 flex flex-col">
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
        </div>
        <div className="">
        <div className="resume_right">
          </div>
          <div className="resume_data w-full h-[900px] border-l-[4px] border-gray-400 flex flex-col">
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
        </div>
      </motion.div>
    </div>
  );
};

export default Achievements;
