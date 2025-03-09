import React from "react";
import "./footer.css";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

const footer = () => {
  return (
    <section>
      <div className="">
        <h3 className="w-full text-2xl border-b-2 border-gray-400">Find Me</h3>
        <div className="flex justify-around">
          <div className="">
            <ul className="flex flex-col gap-5">
              <li>
                <FaLinkedin className="" />{" "}
              </li>
              <li>
                {" "}
                <FaGithub />{" "}
              </li>
              <li>
                <FaFacebook />{" "}
              </li>
              <li>
                <FaInstagram />{" "}
              </li>
              <li>
                <FaXTwitter />{" "}
              </li>
            </ul>
          </div>
          <div className="">
            <ul className="flex flex-col gap-5">
              <li>
                <MdEmail />{" "}
              </li>
              <li>
                <FaPhoneAlt />
              </li>
              <li>
                <BsWhatsapp />{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default footer;
