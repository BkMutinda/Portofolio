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
    typeSpeed: 30,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  const MyLinkedIn = () => {
    window.open('https://www.linkedin.com/in/bernard-mutinda-9869b8293/',  'nopener noreferer');
  }

  return (
    <>
      <section
        id="home"
        className="Banner_style border-b-[1px] border-b-[gray]    "
      >
        <div className="section_div_1 flex flex-col ">
          <div className="flex flex-col ">
            <h1 className="text-xl font-bold text-white ">
              Hello i am {" "} <br />
              <span className="text-orange-600 capitalize font-logo" >
                Bernard Mutinda
              </span>
            </h1>
            <h2 className="text-2xl font-bold">
              a <span>{text}</span>
              <Cursor
                cursorBlinking={true}
                cursorStyle="|"
                cursorColor={"#0000ff"}
              />
            </h2>
            <p className=" flex  " >
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
                  <FaFacebook  />
                </span>
                <span className="home_icon">
                  <FaTwitter />
                </span>
                <span className="home_icon">
                  <FaInstagram />
                </span>
                <span className="home_icon">
                  <FaLinkedin onClick={MyLinkedIn} />
                </span>
              </div>
          </div>
        </div>

      </section>
    </>
  );
};
export default Home;
