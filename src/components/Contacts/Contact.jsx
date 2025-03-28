import React from "react";
import Tittle from "../layouts/Tittle";
import "./contact.css";
import Footer from "./Footer"

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "417c7893-6527-45ed-8f68-884945763c0a");

    const name = formData.get("name");
    const email = formData.get("email");

    console.log("name:", name , "email:", email );

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
  };

  return (
    <>
      <section id="contact" className=" border-b-2 border-gray-700 ">
        <div className="flex flex-col ">
          <div className="justify-center flex  items-center text-center  ">
            <Tittle des="Contact Me" />
          </div>
          <div className="w-full  ">
            <div className="grid grid-cols-1 sm:grid sm:grid-cols-2">
              <div className=" text-sm flex justify-center items-center text-center   ">
                <p className="contact-p   ">Your feedback is a appreciated.</p>
              </div>
              <div className=" ">
                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  className="contact-form gap-1 flex flex-col  "
                >
                  <input
                    type="hidden"
                    name="access_key"
                    value="417c7893-6527-45ed-8f68-884945763c0a"
                  />
                  <label htmlFor="name">Name</label>
                  <input
                    id="message"
                    type="text"
                    placeholder="Enter Name"
                    name="name"
                    required
                    className="outline-none bg-gray-800 rounded-sm h-10 text-1xl"
                  />
                  <label htmlFor="name">Email</label>
                  <input
                    id="message"
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    required
                    className="outline-none bg-gray-800 rounded-sm h-10 text-1xl"
                    target
                  />
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Enter message"
                    cols="30"
                    rows="10"
                    className="outline-none bg-gray-800 rounded-sm"
                    required
                  ></textarea>
                  <br />
                  <button
                    className="bg-gray-700 cursor-pointer hover:bg-gray-800 duration-300 rounded-md  "
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
        <Footer />
      </section>
    </>
  );
};

export default Contact;