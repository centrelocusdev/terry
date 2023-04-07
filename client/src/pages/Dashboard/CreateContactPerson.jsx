import React from "react";
import InputPrimary from "../../components/InputPrimary";
import DashHeading from "../../components/DashHeading";
import ButtonPrimary from "../../components/ButtonPrimary";
import Contact from "./Contact";

const CreateCustomer = ({ user }) => {
  return (
    <>
      {user?.contact_id ? (
        <>
          <DashHeading text="create contact person" />
          <div className="bg-white md:p-16 p-5 rounded mt-5">
            <Contact />
          </div>
        </>
      ) : (
        <>
          <h2 className="text-4xl text-center text-gray-600">
            Please create a contact first
          </h2>
        </>
      )}
    </>
  );
};

export default CreateCustomer;
