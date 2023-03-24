import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate()

  return (
    <section className="bg-zinc-900 p-8 text-gray-400 font-semibold">
      <div className="flex flex-col gap-3 justify-center items-center">
        <h4 onClick={(e) => navigate("/")} className="text-2xl font-bold cursor-pointer hover:text-sky-400">Terry</h4>

        <div className="flex md:flex-row flex-col justify-center items-center gap-4 ">
          <button
            onClick={(e) => navigate("/about")}
            className="w-fit text-md cursor-pointer hover:text-sky-400"
          >
            About us
          </button>
          <button
            onClick={(e) => navigate("/contact")}
            className="w-fit text-md cursor-pointer hover:text-sky-400"
          >
            Contact us
          </button>
          <button
            onClick={(e) => navigate("/")}
            className="w-fit text-md cursor-pointer hover:text-sky-400"
          >
            What we do
          </button>
          <button
            onClick={(e) => navigate("/")}
            className="w-fit text-md cursor-pointer hover:text-sky-400"
          >
            Careers
          </button>
        </div>
        <div className="flex justify-center md:justify-start gap-3 text-2xl">
          <FaTwitter />
          <FaFacebook />
          <FaInstagram />
          <FaPinterest />
        </div>
        <div className="text-center  mt-5">
          &copy; copyright Terry {new Date().getFullYear()}
        </div>
      </div>
    </section>
  );
};

export default Footer;
