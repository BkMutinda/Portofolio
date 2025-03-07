import React from "react";
import "./card.css";
import { HiArrowRight } from "react-icons/hi";

const Card = ({ title, des, icon }) => {
  return (
    <>
      <div className="card w-full h-[250px]  rounded-lg flex items-center bg-gradient-to-r from bg-gray-950 to-[#80808550] group hover:bg-gradient-to-b hover:from-gray-900 to-[#80808090] transition-colors duration-300 : group
      ">
        <div className=" overflow-hidden">
          <div className="flex flex-col h-full gap-4 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
            <div className="">
              <span className="text-4xl bg-gray-500">{icon} </span>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-bold text-gray-400 ">{title} </h2>
              <p>{des} </p>
              <span className="text-3xl text-gray-500">
                <HiArrowRight />{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
