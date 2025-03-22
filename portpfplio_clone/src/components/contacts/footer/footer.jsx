import React from "react";
import "./footer.css";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { FaLocationPin } from "react-icons/fa6";

const footer = () => {
  const MyLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/bernard-mutinda-9869b8293/",
      "nopener noreferer"
    );
  };
  const MyGIthub = () => {
    window.open("https://github.com/BkMutinda", "nopener, noreferer");
  };
  const MyFacebook = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=61553949750461",
      "nopener noreferer"
    );
  };
  const MyWhatsApp = () => {
    window.open("https://wa.me/message/TYFJMC3LYPYPB1", 'nopener noreferer');
  };

  return (
    <section>
      <div className="container_footer">
        <h3 className="flex justify-center text-center items-center text-xl border-b-2 border-gray-400 ">
          Connect With Me
        </h3>
        <div className="flex justify-around">
          <div className="footer_info">
            <ul className="grid grid-cols-3 gap-3">
              <li className="h-8  w-8 flex justify-center items-center text-center bg-gray-800 rounded-sm hover:translate-y-1 duration-200 hover:cursor-pointer ">
                <FaLinkedin onClick={MyLinkedIn} />{" "}
              </li>
              <li className="h-8  w-8 flex justify-center items-center text-center bg-gray-800 rounded-sm hover:translate-y-1 duration-200 hover:cursor-pointer ">
                {" "}
                <FaGithub onClick={MyGIthub} />{" "}
              </li>
              <li className="h-8  w-8 flex justify-center items-center text-center bg-gray-800 rounded-sm hover:translate-y-1 duration-200 hover:cursor-pointer ">
                <FaFacebook onClick={MyFacebook} />{" "}
              </li>
              <li className=" h-8  w-8 flex justify-center items-center text-center bg-gray-800 rounded-sm ">
                <FaInstagram />{" "}
              </li>
              <li className="h-8  w-8 flex justify-center items-center text-center bg-gray-800 rounded-sm ">
                <FaXTwitter />{" "}
              </li>
              <li className="h-8  w-8 flex justify-center items-center text-center bg-gray-800 rounded-sm hover:translate-y-1 duration-200 hover:cursor-pointer ">
                <BsWhatsapp onClick={MyWhatsApp} />{" "}
              </li>
            </ul>
          </div>
          <div className="">
            <ul className="">
              <li className="flex flex-col h-4 ">
                <span className="text-sm" > mkbbernard@gmail.com</span>
              </li>
              <li className="flex  ">
                <span className="text-sm" > Kutus, Kenya</span>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center font-logo text-sm "> &copy; Eng. Mutinda 2025.</p>
      </div>
    </section>
  );
};

export default footer;
