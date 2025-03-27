import React from "react";
import "./card.css";
import { HiArrowRight } from "react-icons/hi";

const Card = ({ title, des, icon }) => {
  return (
    <>
      <div className="card w-full h-[150px] lg:h-[250px] lg:mb-50  rounded-lg flex items-center bg-gradient-to-r from bg-gray-950 to-[#80808550] group hover:bg-gradient-to-b hover:from-gray-900 to-[#80808090] transition-colors duration-300 : group
      ">
        <div className="overflow-hidden ">
          <div className="flex flex-col  translate-y-7 lg:translate-y-10 group-hover:-translate-y-4 transition-transform duration-500">
            <div className="">
              <span className=" card_span text-3xl ">{icon} </span>
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="md:text-lg font-bold text-gray-400 ">{title} </h2>
              {des}
              <span className="text-2xl text-gray-500 lg:translate-y-5 ">
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
