import React from "react";
import { Link } from "react-scroll";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <hr className="w-full h-0.5 bg-yellow"/>
      <footer className="flex flex-col items-center   text-white">
        <div className="container pt-9">
          <div className="mb-9 flex justify-center">
            <a href="/" className="mr-9 text-neutral-800 dark:text-neutral-200">
              <FaFacebookF className="hover:text-yellow" />
            </a>
            <a href="" className="mr-9 text-neutral-800 dark:text-neutral-200">
              <FaInstagramSquare className="hover:text-yellow"/>
            </a>
            <a href="" className="mr-9 text-neutral-800 dark:text-neutral-200">
              <FaTwitter className="hover:text-yellow"/>
            </a>
            <a href="" className="mr-9 text-neutral-800 dark:text-neutral-200">
              <MdEmail className="hover:text-yellow"/>
            </a>
          </div>
        </div>

        <div className="w-full p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
          © 2023 Copyright:
          <a
            className="text-neutral-800 dark:text-neutral-400"
            href="https://github.com/abolanle111"
          >
            Ojo A.
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
