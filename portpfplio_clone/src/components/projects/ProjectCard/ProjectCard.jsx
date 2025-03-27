import React from "react";
import "./projectcard.css";
import { FaArrowCircleRight, FaGithub } from "react-icons/fa";

const ProjectCard = ({ tittle, des, src }) => {
  return (
    <div className="project_card w-full h-auto rounded-lg flex items-center bg-gradient-to-r from bg-gray-950 to-[#80808570] group hover:bg-gradient-to-b hover:from-gray-900 to-[#80808090] transition-colors duration-300 : group">
      <div className="overflow-hidden">
        <div className="w-full h-[70%] overflow-hidden rounded-lg  ">
          <img
            className="project_img w-full object-cover group-hover:scale-110 duration-200 cursor-pointer "
            src={src}
            alt=""
          />
        </div>
        <div className="">
          <div className="flex justify-between">
            <h3 className="text-xl flex flex-col text-gray-400 font-bold capitalize">
              {tittle}{" "}
            </h3>
            <div className="project_icons flex justify-center items-center text-center">
              <span className="flex justify-center items-center h-10 w-10 rounded-sm text-center text-xl text-gray-400 bg-gray-700 hover:cursor-pointer hover:bg-gray-950 duration-300 hover:text-white ">
                {" "}
                <FaArrowCircleRight />{" "}
              </span>
            </div>
          </div>
          <div className="Project-footer">
            <span className="text-secondary  text-sm tracking-wide duration-300 flex justify-items-center text-center ">
              {des}{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
