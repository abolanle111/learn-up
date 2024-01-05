import React from "react";
import Heading from "../layout/Heading";
import Button from "../layout/Button";
import contactUs from '/images/contact.jpg'

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10">
      <Heading title1="Contact" title2="Us" />

      <div className="flex flex-col md:flex-row justify-between w-full">
        <form className="w-full md:w-2/5 space-y-5 pt-20">
          <div className="flex flex-col">
            <label htmlFor="userName">Your Name</label>
            <input
            className="py-4 px-2 rounded bg-amber-400 hover:shadow-lg transition-all border-none"
              type="text"
              id="userName"
              name="userName"
              placeholder="Enter your name"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="userName">Your Email</label>
            <input
            className="py-3 px-2 rounded bg-amber-400 hover:shadow-lg transition-all border-none"
              type="email"
              id="userEmail"
              name="userEmail"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="userName">Your Number</label>
            <input
            className="py-3 px-2 rounded bg-amber-400 hover:shadow-lg transition-all border-none mb-10"
              type="text"
              id="userNumber"
              name="userNumber"
              placeholder="Enter your number"
            />
          </div>

          <div className="flex flex-row justify-center">
            <Button title="Send Message" />
          </div>
        </form>

        <div className="w-full md:w-2/4">
            <img src={contactUs} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
