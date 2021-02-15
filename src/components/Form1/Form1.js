import React from "react";

// components
import { Form1Wrapper } from "./Form1.elements";

// custom forms
import { ToteForm, Candle, Default } from "../../customForms";

//other
import { FormTextContainer } from "../../globalStyles";

const Form1 = ({
  id,
  title,
  image1,
  price,
  setOpen,
  notify,
  formType,
  stock,
  description,
}) => {
  const formSelect = (formType) => {
    const newFormType = formType?.toString();

    switch (newFormType) {
      case "tote":
        return (
          <ToteForm
            id={id}
            title={title}
            image={image1}
            price={price}
            setOpen={setOpen}
            notify={notify}
            stock={stock}
          />
        );
        break;
      case "candle":
        return (
          <Candle
            id={id}
            title={title}
            image={image1}
            price={price}
            setOpen={setOpen}
            notify={notify}
            stock={stock}
          ></Candle>
        );
        break;
      case "default":
        return (
          <Default
            id={id}
            title={title}
            image={image1}
            price={price}
            setOpen={setOpen}
            notify={notify}
            stock={stock}
          ></Default>
        );
      case "default":
        return (
          <Candle
            id={id}
            title={title}
            image={image1}
            price={price}
            setOpen={setOpen}
            notify={notify}
            stock={stock}
          ></Candle>
        );

      default:
        return null;
    }
  };

  return <Form1Wrapper>{formSelect(formType)}</Form1Wrapper>;
};

export default Form1;
