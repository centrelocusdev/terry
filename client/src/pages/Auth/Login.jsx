import React, { useState, useEffect } from "react";
import InputPrimary from "../../components/InputPrimary";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { base_url, localhost } from "../../config";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
      e.preventDefault();
      console.log('submit clicked')
      try {
        const res = await axios.post(base_url + 'login', formData)
        navigate('/confirm/you-are-logged-in-now')
      } catch (err) {
        navigate('/confirm/can-not-login-user')
      }
  };

  return (
    <div className="h-screen bg-gray-100 w-screen text-gray-600">
      <div className="flex justify-between">
        {/* form */}
        <div className="lg:w-1/3 h-screen px-16 flex flex-col justify-center">
          <h2 className="text-3xl font-bold uppercase underline decoration-4 underline-offset-8 decoration-sky-400">
            Login
          </h2>
          <form
            action=""
            className="text-xl mt-5"
            onSubmit={onSubmit}
            onChange={onChange}
          >
            <InputPrimary
              label={"Email Address"}
              name={"email"}
              placeholder={" "}
              value={formData.email}
              width={true}
            />
            <InputPrimary
              label={"Password"}
              name={"password"}
              placeholder={" "}
              value={formData.password}
              width={true}
            />
            <div className="float-right mb-3">
            <a href="/forgot-password" className="text-sky-400 text-xs hover:text-zinc-400">Forgot password</a>
            </div>

            <button
              className="bg-sky-400 text-white py-2 w-full rounded-2xl font-semibold ml-3"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>

        {/* photo */}
        <div className="w-2/3 h-screen bg-white hidden md:block"></div>
      </div>
    </div>
  );
};

export default Login;
