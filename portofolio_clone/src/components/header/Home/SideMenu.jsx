import React from "react";
import { Link } from "react-scroll";
import { FaX } from "react-icons/fa6";
import Navlist from "../constants/Listnav";
import "../../header/nav.css";
import { delay, motion } from "framer-motion";
import { MdOutlinePrivateConnectivity } from "react-icons/md";

const SideMenu = ({ closeSideBar }) => {
  return (
    <>
      <motion.div
        initial={{ x: "50%", opacity: 0 }}
        animate={{ x: "0", opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="side-menu-container inline-block bg-gray-600  w-[200px] w-max-[520px] "
      >
        <motion.p className="text-3xl hover:cursor-pointer  ">
          <FaX
            onClick={closeSideBar}
            className="x-mark  text-white hover:text-gray-400  "
          />
        </motion.p>
        <ul className="block sm:flex sm:bg-amber-400  md:flex lg:flex xl:flex ">
          {Navlist.map(({ _id, title, link }) => (
            <motion.li key={_id}>
              <Link
                className="link-item flex text-gray-400 hover:bg-gray-800   tracking-wide cursor-pointer hover:text-gray-500 duration-200     "
                acticeclass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </>
  );
};

export default SideMenu;
