import React from "react";
import "./resume.css";

const ResumeCard = ({ title, result, subtitle, des, time}) => {
  return (
    <div className="resume_cards w-full h-1/3 group flex  ">
      <div className="resume_card_content  w-10 h-[80] relative ">
        <span className="absolute w-4 h-4 bg-black group-hover:bg-gray-300 -left-3 top-2 rounded-full  flex justify-center items-center bg-opacity-60 "></span>
        <span className="w-10 h-2 bg-gray-600 -left-3 inline-flex group-hover:bg-gray-900   "></span>
      </div>
      <div className=" w-full bg-gray-900 bg-opacity-70 hover:bg-opacity-30 duration-400 rounded-lg flex flex-col justify-center gap-10 drop-shadow-md hover:bg-gray-800 ">
        <div className=" flex justify-between items-center">
          <div className="resume_info">
            <h3 className="">{title}</h3>
            <p>{subtitle} </p>
          </div>
          <div className="resume_time text-gray-500 tracking-wide">
            <p>{time} </p>
          </div>
        </div>
        <p className="resume_p">{des} </p>

      </div>
    </div>
  );
};

export default ResumeCard;
