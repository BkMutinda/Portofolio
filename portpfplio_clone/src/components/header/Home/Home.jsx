import React from "react";
import "./Home.css";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { link } from "framer-motion/client";

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

 const MyResume = () => {

  var link= document.createElement('a');
  link.href = 'file:///C:/Users/User/Desktop/BEN/MY%20DOCS/resume.pdf';
  link.download = 'file:///C:/Users/User/Desktop/BEN/MY%20DOCS/resume.pdf';
  link.click();

    // window.open(
    //   'file:///C:/Users/User/Desktop/BEN/MY%20DOCS/poeple/client/students/student1.pdf',
    // );
  };

  return (
    <>
      <section
        id="home"
        className="Banner_style border-b-[1px] border-b-[gray]    "
      >
        <div className="section_div_1 flex flex-col ">
          <div className="flex flex-col ">
            <h1 className="text-xl font-bold text-white ">
              Hello i am <br />
              <span className="text-orange-600 capitalize font-logo">
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
            <p className=" flex text-sm ">
              A proefficient software developer using Javascript, TypeScript,
              Python, Php, Tailwindcss and Framer Motion. Commited to excelence
              and delivering creative problem-solving solutions. Currently open
              to work.
            </p>
          </div>
          <div className="home-footer">
            <button
              className="bg-orange-600 rounded-sm text-sm    "
              onClick={MyResume}
            >
              Read Resume
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
