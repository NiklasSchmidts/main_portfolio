import React, { useRef } from "react";
import axios from "axios";

function Contact() {
  const buttonRef = useRef(null);

  return (
    <div
      id="contact"
      className="w-full h-screen bg-[#111111] text-white flex justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center">
        <div className="p-5 md:ml-10">
          <h1 className="text-2xl font-bold border-b-4 inline">Contact</h1>
          <p className="text-xl font-medium mt-2">
            // Feel free to contact me using the form below or directly by
            e-mail - niklas@schmidts.dev
          </p>
        </div>
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            const formData = new FormData(event.target);
            try {
              const response = await axios.post(
                "https://getform.io/f/fc8ed902-9fc5-4560-804f-0270d7ff9c60",
                formData
              );
              console.log("Form submitted successfully");
              buttonRef.current.innerHTML = "successfully Submitted!";
              buttonRef.current.style.backgroundColor = "green";
              setTimeout(() => {
                buttonRef.current.innerHTML = "Submit!";
                buttonRef.current.style.backgroundColor = "";
              }, 2000);
            } catch (error) {
              console.log("Error submitting form", error);
              buttonRef.current.innerHTML = "Error submitting!";
              buttonRef.current.style.backgroundColor = "red";
              setTimeout(() => {
                buttonRef.current.innerHTML = "Submit!";
                buttonRef.current.style.backgroundColor = "";
              }, 2000);
            }
          }}
          className="flex flex-col gap-4 mt-2 md:mt-10"
        >
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="w-72 md:w-[600px] sm:w-96 h-12 pl-5 text-black"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-72 md:w-[600px] sm:w-96 h-12 pl-5 text-black"
          />
          <textarea
            placeholder="Message"
            name="message"
            className="w-72 md:w-[600px] sm:w-96  h-48 p-5 resize-none text-black"
          ></textarea>
          <div className="w-full flex justify-center mt-2">
            <button
              ref={buttonRef}
              type="submit"
              className="border-2 mt-3 p-2 md:p-3 hover:scale-110 duration-200"
            >
              Submit!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
