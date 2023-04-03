import React, { useState } from "react";
import ButtonPrimary from "../../components/ButtonPrimary";
import InputPrimary from "../../components/InputPrimary";
import { create_item } from "../../config/ZohoApi";

const Item = () => {
  const [formData, setFormData] = useState({
    name: "",
    rate: "",
    description: "",
    product_type: "",
  });

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // const item = await create_item(formData);
    console.log(formData);
  };

  return (
    <div onChange={onChange}>
      <div className="md:flex gap-5 justify-between mt-4">
          <InputPrimary label={"Name"} name={"name"} placeholer={""} />
          <InputPrimary label={"Rate"} name={"rate"} placeholer={""} />
        </div>
        <div className="md:flex gap-5 justify-between mt-4">
          <InputPrimary
            label={"Description"}
            name={"description"}
            placeholer={""}
          />
          <InputPrimary label={"Product type"} name={""} placeholer={""} />
        </div>
      <ButtonPrimary text={"Save"} handleClick={onSubmit} />
    </div>
  );
};

export default Item;
