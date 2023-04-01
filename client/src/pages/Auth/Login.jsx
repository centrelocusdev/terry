import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputPrimary from "../../components/InputPrimary";
import { login } from "../../config/UserApi";

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
      const res = await login(formData)
      res && navigate('/dashboard')
  };

  return (
    <div className="h-screen bg-gray-100 w-screen text-gray-600">
      <div className="flex justify-between">
        {/* form */}
        <div className="lg:w-1/3 h-screen md:px-16 px-8 flex flex-col justify-center">
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
            <button
                className="bg-sky-400 text-white py-2 w-full rounded-lg font-semibold mt-5 capitalize"
                type="submit"
              >
                login
              </button>
            <p className="text-sm mt-2">Don't have an account? <a href="/login" className="text-sky-500">Register here</a></p>
          </form>
        </div>

        {/* photo */}
        <div className="w-2/3 h-screen bg-white hidden md:block"></div>
      </div>
    </div>
  );
};

export default Login;
