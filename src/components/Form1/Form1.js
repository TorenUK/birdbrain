import React from "react";

// components
import { Form1Wrapper } from "./Form1.elements";

// other
import { useDispatch, useSelector } from "react-redux";
import { selectBasket } from "../../features/basket/basketSlice";

// custom forms
import {
  HandmadeSoapForm,
  MarbleCoasterForm,
  ToteForm,
} from "../../customForms";

const Form1 = ({ title, image, price, setOpen, notify, formType }) => {
  const formSelect = (formType) => {
    const newFormType = formType?.toString();

    switch (newFormType) {
      case "soap":
        return (
          <HandmadeSoapForm
            title={title}
            image={image}
            price={price}
            setOpen={setOpen}
            notify={notify}
          />
        );
        break;
      case "coaster":
        return (
          <MarbleCoasterForm
            title={title}
            image={image}
            price={price}
            setOpen={setOpen}
            notify={notify}
          />
        );
        break;
      case "tote":
        return (
          <ToteForm
            title={title}
            image={image}
            price={price}
            setOpen={setOpen}
            notify={notify}
          />
        );
      default:
        return console.log("no match");
    }
  };

  const test = true;

  return (
    <Form1Wrapper>
      <h2>form options here</h2>
      <br />
      <h3>dispatch object to redux on submit</h3>
      <br />
      <h3> ← image to correspond with selection</h3>
      <br />
      <h3>different form fields for different product types</h3>
      <br />
      {formSelect(formType)}
    </Form1Wrapper>
  );
};

export default Form1;
