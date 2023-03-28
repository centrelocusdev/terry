import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Confirm = () => {
  const navigate = useNavigate()
  const {message} = useParams() 

  return (
    <section className="h-screen w-screen bg-indigo-dark flex flex-col justify-center items-center text-gray-200">
      <p className="md:text-6xl text-3xl font-bold capitalize">{message}!</p>
      {/* <div className="w-fit mx-auto bg-gray-900 rounded-xl text-indigo-400 p-5 my-5 text-3xl text-center">
        chillpill@gmail.com
      </div> */}
      <button onClick={() => navigate('/')} className="bg-sky-500 px-6 py-2 rounded font-semibold mt-5">Go To Home</button>
    </section>
  );
};

export default Confirm;
