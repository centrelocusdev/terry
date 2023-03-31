import React from "react";
import InputPrimary from "../../components/InputPrimary";
import ButtonPrimary from "../../components/ButtonPrimary";
import DashHeading from "../../components/DashHeading";

const CreateItem = () => {
  return (
    <>
      <DashHeading text={'Create Item'} />
      <form action="">
        <div className="md:flex gap-5 justify-between mt-4">
          <InputPrimary
            label={"name"}
            name={"name"}
            placeholer={""}
          />
          <InputPrimary
            label={"description"}
            name={"description"}
            placeholer={""}
          />
        </div>
        <div className="md:flex gap-5 justify-between mt-4">
          <InputPrimary
            label={"rate"}
            name={"rate"}
            placeholer={""}
          />
          <InputPrimary
            label={"product type"}
            name={"product_type"}
            placeholer={""}
          />
        </div>

        <button>
          <ButtonPrimary text={'create'} />
        </button>
      </form>
    </>
  );
};

export default CreateItem;
