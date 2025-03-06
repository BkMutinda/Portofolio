import React from "react";
import "./nav.css";
import Navlist from "./constants/nav";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <>
      <div className="header_container sticky top-0 z-20 bg-black flex justify-around items-center  border-b-[1px] border-b-gray-200  ">
        <div className="nav_main ">
          <h1 className="text-gray-400 font-logo"> Mutinda</h1>
        </div>
        <div className="nav_menu">
          <ul className="inline-flex gap-15">
            {Navlist.map(({ _id, title, link }) => (
              <li
                className=" text-gray-400 tracking-wide cursor-pointer hover:text-white duration-200"
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
      </div>
    </>
  );
};

export default Nav;
