import React from "react";
import InputPrimary from "../../components/InputPrimary";
import DashHeading from "../../components/DashHeading";
import ButtonPrimary from "../../components/ButtonPrimary";
import Contact from "./Contact";

const CreateCustomer = () => {
  return (
    <>
      <DashHeading text="create customer" />
      <div className="bg-white md:p-16 p-5 rounded mt-5">
        <Contact />
      </div>
    </>
  );
};

export default CreateCustomer;
