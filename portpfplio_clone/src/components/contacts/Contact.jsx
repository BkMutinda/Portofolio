import React from "react";
import Tittle from "../layouts/Tittle";
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
    <section id="contacts  ">
      <div className="flex flex-col ">
        <div className="justify-center flex  items-center text-center  ">
          <Tittle des="Contact Me" />
        </div>
        <div className="w-full  ">
          <div className="flex flex-wrap ">
            <div className="flex justify-center items-center text-center ">
              <div className="contact_data flex flex-col w-[50%] justify-center items-center  ">
                <p className="contact-p flex flex-col text-sm ">
                  I'd like to hear a word from you on my Portofolio, resume,
                  work.
                </p>

              </div>
            </div>
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
                  <input
                    id="message"
                    type="text"
                    placeholder="Enter Name"
                    required
                    className="outline-none bg-gray-600 rounded-sm h-10 text-1xl"
                  />
                  <label htmlFor="name">Email</label>
                  <input
                    id="message"
                    type="email"
                    placeholder="Enter Email"
                    required
                    className="outline-none bg-gray-600 rounded-sm h-10 text-1xl"
                  />
                  <label htmlFor="message">Message</label>
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
                    className="bg-gray-500 cursor-pointer hover:bg-gray-800 duration-300 rounded-md  "
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
