import React from "react";
import InputPrimary from "../../components/InputPrimary";
import ButtonPrimary from "../../components/ButtonPrimary";

const Contact = () => {
  return (
    <form action="">
      <div className="md:flex gap-5 justify-between mt-4">
        <InputPrimary
          label={"Name"}
          name={"contact_name"}
          placeholer={"Roe Smith"}
        />
        <InputPrimary
          label={"email"}
          name={"contact_email"}
          placeholer={"you@example.com"}
        />
      </div>
      <div className="md:flex gap-5 justify-between mt-4">
        <InputPrimary
          label={"phone"}
          name={"contact_phone"}
          placeholer={"xxxx....xx"}
        />
        <InputPrimary
          label={"website"}
          name={"contact_website"}
          placeholer={"https://..."}
        />
      </div>
      <ButtonPrimary text={'Save'} />
    </form>
  );
};

export default Contact;
