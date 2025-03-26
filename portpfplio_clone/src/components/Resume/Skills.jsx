import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div>
      <motion.div className="flex flex-col-1 w-full gap-5 ">
        <div className=" w-[90%] ">
          <div className="">
            <h2 className="text-xl font-semi-bold ">Development Skills</h2>
          </div>
          <div className=" w-full flex flex-col  ">
            <div className="overflow-x-hidden">
              <p className="text-sm font-medium capitalize">html</p>
              <span  className="bg-gray-700 h-2 w-full  flex">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="w-[90%] h-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 relative"
                ></motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <span className="text-sm font-medium capitalize">css</span>
              <span className="bg-gray-700 h-2 w-full inline-flex">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="w-[70%] h-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 relative"
                ></motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <span className="text-sm font-medium capitalize">react</span>
              <span className="bg-gray-700 h-2 w-full inline-flex">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="w-[30%] h-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 relative"
                ></motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <span className="text-sm font-medium capitalize">tailwindcss</span>
              <span className="bg-gray-700 h-2 w-full inline-flex">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="w-[50%] h-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 relative"
                ></motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <span className="text-sm font-medium capitalize">typesrcipt</span>
              <span className="bg-gray-700 h-2 w-full inline-flex">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="w-[40%] h-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 relative"
                ></motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <span className="text-sm font-medium capitalize">javascript</span>
              <span className="bg-gray-700 h-2 w-full inline-flex">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="w-[30%] h-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 relative"
                ></motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <span className="text-sm font-medium capitalize">mySQL</span>
              <span className="bg-gray-700 h-2 w-full inline-flex">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="w-[40%] h-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 relative"
                ></motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <span className="text-sm font-medium capitalize">php</span>
              <span className="bg-gray-700 h-2 w-full inline-flex">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="w-[40%] h-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 relative"
                ></motion.span>
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
