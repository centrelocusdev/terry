import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BiMenu, BiX} from "react-icons/bi"

const Navbar = ({isWhite}) => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(isOpen => !isOpen)
  }

  return (
    <section className="transition-all">
    <div className="md:hidden block bg-indigo-dark text-gray-50 p-4 flex justify-between text-2xl text-gray-200">
    <h3 className="text-2xl font-bold">Terri</h3>
      <button onClick={handleClick}>{isOpen ? <BiX /> : <BiMenu />}</button>
    </div>
    <div className={`${isWhite ? 'bg-white text-gray-700 font-semibold' : 'bg-indigo-dark text-gray-50'} md:flex justify-between py-3 md:px-16 px-8 md:h-auto h-screen transition-all ${isOpen ? 'block w-[200px] fixed z-40 bg-indigo-900' : 'hidden'}`}>
    <h3 onClick={(e) => navigate('/')} className="cursor-pointer text-3xl font-bold hidden md:block">Terri</h3>

      <div className="flex md:flex-row flex-col gap-6 justify-start md:items-center md:mt-0 mt-5">
        <button onClick={(e) => navigate('/about')} className="w-fit text-md cursor-pointer hover:text-sky-400">About us</button>
        <button onClick={(e) => navigate('/contact')} className="w-fit text-md cursor-pointer hover:text-sky-400">Contact us</button>
        <button onClick={(e) => navigate('/login')} className="w-fit text-md cursor-pointer underline hover:text-sky-400">Sign in</button>
        <button onClick={(e) => navigate('/signup')} className="w-fit bg-gray-100 rounded-full text-md text-gray-600 px-4 py-2  cursor-pointer hover:bg-sky-400 hover:text-white">
          Start Free
        </button>
      </div>
    </div>
    </section>
  );
};

export default Navbar;
