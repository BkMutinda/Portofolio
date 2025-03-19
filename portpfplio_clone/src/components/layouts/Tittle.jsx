import React from "react";
import './Tittle.css'

const Tittle = ({tittle, des}) => {
  return (
    <>
      <div className="about_container flex flex-col gap-2 mb-40">
        <h3 className="text-sm uppercase font-light">{tittle} </h3>
        <h1 className="text-4xl text-gray-500 font-semibold  capitalize ">{des}
        </h1>
      </div>
    </>
  );
};

export default Tittle;
