import React from "react";
import "./Home.css";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Home = () => {
  const [text] = useTypewriter({
    words: [
      "Web Developer.",
      "Graphic Designer.",
      "Mobile Developer.",
      "Cybersecurity Analyst.",
    ],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <>
      <section
        id="home"
        className="Banner_style border-b-[1px] border-b-[gray]  items-center flex  "
      >
        <div className="section_div_1 w-1/2 flex flex-col gap-20">
          <div className="flex flex-col gap-3  ">
            <h4>WELCOME TO MY WORLD</h4>
            <h1 className="text-5xl font-bold text-white ">
              Hello i am{" "}
              <span className="text-orange-600 capitalize">
                Bernard Mutinda
              </span>{" "}
            </h1>
            <h2 className="text-4xl font-bold">
              a <span>{text}</span>
              <Cursor
                cursorBlinking={true}
                cursorStyle="|"
                cursorColor={"#0000ff"}
              />
            </h2>
            <p>
              A proefficient software developer using Javascript, TypeScript,
              Python, Php, Tailwindcss and Framer Motion. Commited to excelence
              and delivering creative problem-solving solutions. Currently open
              to work.
            </p>
          </div>
          <div className="">
            <p className=" find_me_icons uppercase ">Find Me</p>
              <div className="flex">
                <span className="home_icon">
                  <FaFacebook />
                </span>
                <span className="home_icon">
                  <FaTwitter />
                </span>
                <span className="home_icon">
                  <FaInstagram />
                </span>
                <span className="home_icon">
                  <FaLinkedin />
                </span>
              </div>
          </div>
        </div>
        <div className="w-1/2 bg-green-600">
        </div>
      </section>
    </>
  );
};
export default Home;
