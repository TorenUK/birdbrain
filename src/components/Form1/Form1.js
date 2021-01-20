import React from "react";

// components
import { Form1Wrapper } from "./Form1.elements";

// custom forms
import {
  HandmadeSoapForm,
  MarbleCoasterForm,
  ToteForm,
  SmallJarCandle,
  SoapBar,
  WaxMelt,
} from "../../customForms";

const Form1 = ({ id, title, image, price, setOpen, notify, formType }) => {
  const formSelect = (formType) => {
    const newFormType = formType?.toString();

    switch (newFormType) {
      case "soap":
        return (
          <HandmadeSoapForm
            id={id}
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
            id={id}
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
            id={id}
            title={title}
            image={image}
            price={price}
            setOpen={setOpen}
            notify={notify}
          />
        );
        break;
      case "soapbar":
        return (
          <SoapBar
            id={id}
            title={title}
            image={image}
            price={price}
            setOpen={setOpen}
            notify={notify}
          />
        );
        break;
      case "sjarcandle":
        return (
          <SmallJarCandle
            id={id}
            title={title}
            image={image}
            price={price}
            setOpen={setOpen}
            notify={notify}
          />
        );
        break;
      case "waxmelt":
        return (
          <WaxMelt
            id={id}
            title={title}
            image={image}
            price={price}
            setOpen={setOpen}
            notify={notify}
          />
        );

      default:
        return null;
    }
  };

  return <Form1Wrapper>{formSelect(formType)}</Form1Wrapper>;
};

export default Form1;
