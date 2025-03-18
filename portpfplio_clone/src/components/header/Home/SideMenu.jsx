import React from "react";
import { Link } from "react-scroll";
import { FaX } from "react-icons/fa6";
import Navlist from "../constants/Listnav";
import "../../header/nav.css";

const SideMenu = ({ closeSideBar }) => {
  return (
    <>
      <div className="bg-gray-800 w-[200px]  ">
      <FaX onClick={closeSideBar} className="x-mark flex z-10 text-white bg-amber-300 " />

        <ul className="inline-block  sm:flex   sm:bg-amber-400  md:flex lg:flex xl:flex ">

          {Navlist.map(({ _id, title, link }) => (
            <li
              className="flex text-gray-400 tracking-wide cursor-pointer hover:text-white duration-200  "
              key={_id}
            >
              <Link
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
