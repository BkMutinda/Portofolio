import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div>
      <motion.div

        className="flex  w-full gap-20 "
      >
        <div className="w-1/2">

          <div className="resume_left">
          <h2 className="text-4xl font-bold ">Development Skills</h2>
          </div>
          <div className="resume_data w-full flex flex-col gap-3 ">
            <div className="overflow-x-hidden">
              <p className="text-sm font-medium uppercase">html</p>
              <span className="bg-gray-400 h-2 w-full rounded-md inline-flex">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="w-[90%] h-full bg-gradient-to-r from-blue-500 via-gray-400 to-green-400 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">90%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm font-medium uppercase">css</p>
              <span className="bg-gray-400 h-2 w-full rounded-md inline-flex">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="w-[70%] h-full bg-gradient-to-r from-blue-500 via-gray-400 to-green-400 rounded-md relative"
                >
                  <span className="absolute -top-8 right-0">70%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm font-medium uppercase">react</p>
              <span className="bg-gray-400 h-2 w-full rounded-md inline-flex">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="w-[30%] h-full bg-gradient-to-r from-blue-500 via-gray-400 to-green-400 rounded-md relative"
                >
                  <span className="absolute -top-8 right-0">30%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm font-medium uppercase">tailwindcss</p>
              <span className="bg-gray-400 h-2 w-full rounded-md inline-flex">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="w-[50%] h-full bg-gradient-to-r from-blue-500 via-gray-400 to-green-400 rounded-md relative"
                >
                  <span className="absolute -top-8 right-0">50%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm font-medium uppercase">typesrcipt</p>
              <span className="bg-gray-400 h-2 w-full rounded-md inline-flex">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="w-[20%] h-full bg-gradient-to-r from-blue-500 via-gray-400 to-green-400 rounded-md relative"
                >
                  <span className="absolute -top-8 right-0">20%</span>
                </motion.span>
              </span>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="resume_right">
          </div>
          <div className="resume_data w-full flex flex-col gap-3 ">
            <div className="overflow-x-hidden">
              <p className="text-sm font-medium uppercase">javascript</p>
              <span className="bg-gray-400 h-2 w-full rounded-md inline-flex">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="w-[30%] h-full bg-gradient-to-r from-blue-500 via-gray-400 to-green-400 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">30%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm font-medium uppercase">php</p>
              <span className="bg-gray-400 h-2 w-full rounded-md inline-flex">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="w-[30%] h-full bg-gradient-to-r from-blue-500 via-gray-400 to-green-400 rounded-md relative"
                >
                  <span className="absolute -top-8 right-0">30%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm font-medium uppercase">python</p>
              <span className="bg-gray-400 h-2 w-full rounded-md inline-flex">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="w-[3%] h-full bg-gradient-to-r from-blue-500 via-gray-400 to-green-400 rounded-md relative"
                >
                  <span className="absolute -top-8 right-0">3%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm font-medium uppercase">c</p>
              <span className="bg-gray-400 h-2 w-full rounded-md inline-flex">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="w-[40%] h-full bg-gradient-to-r from-blue-500 via-gray-400 to-green-400 rounded-md relative"
                >
                  <span className="absolute -top-8 right-0">40%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm font-medium uppercase">mysql</p>
              <span className="bg-gray-400 h-2 w-full rounded-md inline-flex">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="w-[30%] h-full bg-gradient-to-r from-blue-500 via-gray-400 to-green-400 rounded-md relative"
                >
                  <span className="absolute -top-8 right-0">30%</span>
                </motion.span>
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
