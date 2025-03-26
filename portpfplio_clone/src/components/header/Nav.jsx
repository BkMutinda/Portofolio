import React, { useState } from "react";
import "./nav.css";
import Navlist from "./constants/Listnav";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import SideMenu from "./Home/SideMenu";
import { motion } from "framer-motion";

const Nav = () => {
  const [SideBarMenu, setSideBarMenu] = useState(false);
  const openSideBar = () => {
    setSideBarMenu(true);
  };

  const closeSideBar = () => {
    setSideBarMenu(false);
  };

  return (
    <>
      <div className="header_container sticky z-30 top-0 bg-black flex justify-between items-center  border-b-[1px] border-b-gray-200 ">
        <div className="nav_main flex ">
          <h1 className="nav_h1 text-gray-400 font-logo text-5xl  ">
            {" "}
            Mutinda
          </h1>
        </div>

        <motion.div

          className="block  "
        >
          <FaBars
            className="bars text-3xl hover:cursor-pointer"
            onClick={openSideBar}
          />
          {SideBarMenu && <SideMenu closeSideBar={closeSideBar} />}
        </motion.div>
      </div>
    </>
  );
};

export default Nav;
