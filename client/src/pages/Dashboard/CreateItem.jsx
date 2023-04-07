import React from "react";
import InputPrimary from "../../components/InputPrimary";
import ButtonPrimary from "../../components/ButtonPrimary";
import DashHeading from "../../components/DashHeading";
import Item from "./Item";

const CreateItem = ({ user }) => {
  console.log(user);
  return (
    <>
      {user.contact_id ? (
        <>
          <DashHeading text={"Create Item"} />
          <div className="bg-white md:p-16 p-5 rounded mt-5">
            <Item />
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

export default CreateItem;
