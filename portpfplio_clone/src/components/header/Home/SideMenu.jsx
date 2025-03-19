import React from "react";
import { Link } from "react-scroll";
import { FaX } from "react-icons/fa6";
import Navlist from "../constants/Listnav";
import "../../header/nav.css";

const SideMenu = ({ closeSideBar }) => {
  return (
    <>
      <div className="side-menu-container inline-block bg-gray-600  w-[200px]  " >
        <p className="text-3xl hover:cursor-pointer  ">
          <FaX
            onClick={closeSideBar}
            className="x-mark  text-white  hover:text-gray-400  "
          />
        </p>
        <ul className="block  sm:flex   sm:bg-amber-400  md:flex lg:flex xl:flex ">
          {Navlist.map(({ _id, title, link }) => (
            <li
              className="flex text-gray-400 hover:bg-gray-800   tracking-wide cursor-pointer hover:text-white duration-200  "
              key={_id}
            >
              <Link
              className= "link-item    "
                acticeclass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SideMenu;
