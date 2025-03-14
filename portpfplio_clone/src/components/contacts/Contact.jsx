import React from "react";
import Tittle from "../layouts/Tittle";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import "./contact.css";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "417c7893-6527-45ed-8f68-884945763c0a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      // alert("Message sent successfully");
      // console.log("Success", res);
    }
  };


  return (
    <section id="contacts">
      <div className="justify-center  flex  items-center text-center  ">
        <Tittle des="Contact Me" />
      </div>
      <div className="w-full  flex justify-between">
        <div className="w-1/2 ">
          <div className="flex flex-col justify-center items-center  ">
            <h3 className=" conatct-h3 text-2xl font-logo ">Reach Out</h3>
          </div>
          <div className="flex justify-center items-center text-center ">
            <div className="contact_data flex flex-col w-[50%] justify-center items-center vbg-gray-00 gap-10 ">
              <p className="contact-p flex flex-col ">
                I'd like to hear a word from you on my Portofolio, resume, work.{" "}
              </p>
              <div className="">
                <p className="flex flex-col">
                  {" "}
                  <MdEmail className="text-1xl" />
                  <span>mkbbernard@gmail.com</span>
                </p>
                <p className="flex flex-col ">
                  <FaLocationPin className="text-1xl" />
                  <span>Kutus, Kenya</span>
                </p>
                <p>
                  <FaPhoneAlt className="text-1xl" />
                  <span>0713965552</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 ">
          <div className="flex justify-center items-center ">
            <div className=" ">
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="contact-form gap-2 flex flex-col  "
              >
                <input
                
                  type="hidden"
                  name="access_key"
                  value="417c7893-6527-45ed-8f68-884945763c0a"
                />
                <label htmlFor="name">Name</label>
                <br />
                <input
                id="message"
                  type="text"
                  placeholder="Enter Name"
                  autoFocus
                  required
                  className="outline-none bg-gray-600 rounded-sm h-10 text-1xl"
                />
                <br />
                <label htmlFor="name">Email</label>
                <br />
                <input
                id="message"
                  type="email"
                  placeholder="Enter Email"
                  required
                  className="outline-none bg-gray-600 rounded-sm h-10 text-1xl"
                />
                <br />
                <label htmlFor="message">Message</label>
                <br />
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter message"
                  cols="30"
                  rows="10"
                  className="outline-none bg-gray-600 rounded-sm"
                  required
                ></textarea>
                <br />
                <button
                  className="bg-gray-500 cursor-pointer hover:bg-gray-800 duration-300 rounded-md "
                  type="submit"
                  onSubmit={onSubmit}

                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
