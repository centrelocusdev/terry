import React from "react";
import puzzle from "../assets/puzzle.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md"

const Header = ({title}) => {
  const loc = window.location.href;
  const spilitLoc = loc.split("/");

  return (
    <section className="bg-indigo-dark md:px-12 p-8">
      <div className="md:flex justify-between items-center md:w-2/3 mx-auto">
        <div>
          <h2 className="uppercase text-white flex items-center text-sm text">home <MdOutlineKeyboardArrowRight className="text-2xl" /> <span>{spilitLoc[spilitLoc.length - 1]}</span></h2>
          <h2 className="text-4xl text-gray-100 font-semibold my-3">{title}</h2>
        </div>
        <img src={puzzle} alt="" />
      </div>
    </section>
  );
};

export default Header;
