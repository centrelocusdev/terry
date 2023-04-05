import React, { useState } from "react";
import ButtonPrimary from "../../components/ButtonPrimary";
import InputPrimary from "../../components/InputPrimary";
import { createItem } from "../../config/api";

const Item = ({setItems}) => {
  const [formData, setFormData] = useState({
    name: "",
    rate: "",
    description: "",
    quantity: "",
    // product_type: "",
  });

  const [isTaxable, setIsTaxable] = useState(false)
  const handleTaxableCheck = (e) => {
    setIsTaxable(e.target.checked)
  }

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const item = await createItem({...formData, is_taxable: isTaxable});
    console.log(item)
    setItems(item)
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
          {/* <InputPrimary label={"Product type"} name={"product_type"} placeholer={""} /> */}
          <InputPrimary label={"Quantity"} name={"quantity"} placeholer={""} />
        </div>
        <div className="flex gap-2 text-gray-600 font-semibold mt-4">
          <input type="checkbox" checked={isTaxable} onChange={handleTaxableCheck} />
          <label htmlFor="isTaxable">Taxable</label>
        </div>
      <ButtonPrimary text={"Save"} handleClick={onSubmit} />
    </div>
  );
};

export default Item;
