import React, { useState, useEffect } from "react";
import InputPrimary from "../../components/InputPrimary";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { base_url, localhost } from "../../config";

const Signup = () => {
  const navigate = useNavigate();
  
  const [showRegister, setShowRegister] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleShowRegister = (value) => {
    setShowRegister(value ? true : false);
    console.log(showRegister);
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(base_url + 'register', formData)
      navigate('/confirm/user-registered')
    } catch (err) {
      navigate('/confirm/could-not-register-user')
    } 
  };

  const [email, setEmail] = useState("");

  const onOTPChange = (e) => {
    setEmail(e.target.value);
  };

  const onOTPSubmit = async (e) => {
    e.preventDefault();
    handleShowRegister(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 w-screen text-gray-600">
      <div className="md:flex justify-between">
        <div className="lg:w-1/3 min-h-screen p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold uppercase underline decoration-4 underline-offset-8 decoration-sky-500">
            {!showRegister ? "Register" : "Send OTP"}
          </h2>
          {!showRegister ? (
            <form
              action=""
              className="text-xl mt-5 flex flex-col gap-3"
              onSubmit={onSubmit}
              onChange={onChange}
            >
              <InputPrimary
                label={"Full name"}
                name={"name"}
                placeholder={" "}
                value={formData.name}
                width={true}
              />
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
                className="bg-sky-400 text-white py-2 w-full rounded-2xl font-semibold mt-5 capitalize"
                type="submit"
              >
                submit
              </button>
            </form>
          ) : (
            <form
              action=""
              className="text-xl mt-5"
              onSubmit={onOTPSubmit}
              onChange={onOTPChange}
            >
              <InputPrimary
                label={"Email address"}
                name={"email"}
                placeholder={"Enter your email address"}
                value={email}
                width={true}
              />

              <button
                className="bg-sky-400 text-white py-2 w-full rounded-2xl font-semibold mt-5 capitalize"
                type="submit"
              >
                send email
              </button>
            </form>
          )}
        </div>
        <div className="w-2/3 min-h-screen bg-white hidden lg:block"></div>
      </div>
    </div>
  );
};

export default Signup;
