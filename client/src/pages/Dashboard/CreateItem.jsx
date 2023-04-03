import React from "react";
import InputPrimary from "../../components/InputPrimary";
import ButtonPrimary from "../../components/ButtonPrimary";
import DashHeading from "../../components/DashHeading";
import Item from "./Item";

const CreateItem = () => {
  return (
    <>
      <DashHeading text={"Create Item"} />
      <div className="bg-white md:p-16 p-5 rounded mt-5">
        <Item />
      </div>
    </>
  );
};

export default CreateItem;
