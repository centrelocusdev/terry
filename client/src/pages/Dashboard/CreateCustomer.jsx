import React from "react";
import InputPrimary from "../../components/InputPrimary";
import DashHeading from "../../components/DashHeading";
import ButtonPrimary from "../../components/ButtonPrimary";

const CreateCustomer = () => {
  return (
    <>
      <div className="">
        <DashHeading text="create customer" />
        <form action="" className="mx-auto bg-white md:p-16 p-5 rounded mt-5">
          <div className="md:flex gap-5 justify-between mt-4">
            <InputPrimary
              label={"your name"}
              name={"name"}
              placeholer={"e.g. Roe Smith"}
            />
            <InputPrimary
              label={"email address"}
              name={"email"}
              placeholer={"example@mail.com"}
            />
          </div>
          <div className="md:flex gap-5 justify-between mt-4">
            <InputPrimary
              label={"phone"}
              name={"phone"}
              placeholer={"xxxxxxxxx"}
            />
            <InputPrimary
              label={"skype"}
              name={"skype"}
              placeholer={"EsrotLabs"}
            />
          </div>
          <div className="md:flex gap-5 justify-between mt-4">
            <InputPrimary
              label={"desgignation"}
              name={"desgignation"}
              placeholer={"e.g. Developer"}
            />
            <InputPrimary
              label={"department"}
              name={"department"}
              placeholer={"e.g. IT"}
            />
          </div>
          <ButtonPrimary text={'create'} />
        </form>
      </div>
    </>
  );
};

export default CreateCustomer;
