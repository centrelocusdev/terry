import React from "react";
import ButtonPrimary from "../../components/ButtonPrimary";
import InputPrimary from "../../components/InputPrimary";

const Item = () => {
  return (
    <form className="">
      <div className="md:flex gap-5 justify-between mt-4">
        <InputPrimary
          label={"Name"}
          name={"item_name"}
          placeholer={"e.g. Roe Smith"}
        />
        <InputPrimary label={"Rate"} name={"item_rate"} placeholer={""} />
        <InputPrimary
          label={"Description"}
          name={"invNumber"}
          placeholer={"e.g. Roe Smith"}
        />
        <InputPrimary
          label={"Product type"}
          name={"e.g. goods"}
          placeholer={""}
        />
      </div>
      <ButtonPrimary text={'Save'} />
    </form>
  );
};

export default Item