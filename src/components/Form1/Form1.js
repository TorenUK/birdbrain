import React from "react";

// components
import { Form1Wrapper } from "./Form1.elements";

// custom forms
import { ToteForm, SmallJarCandle, Candle, Default } from "../../customForms";

//other
import { FormTextContainer } from "../../globalStyles";

const Form1 = ({
  id,
  title,
  image,
  price,
  setOpen,
  notify,
  formType,
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
      case "candle":
        return (
          <Candle
            id={id}
            title={title}
            image={image}
            price={price}
            setOpen={setOpen}
            notify={notify}
          ></Candle>
        );
        break;
      case "default":
        return (
          <Default
            id={id}
            title={title}
            image={image}
            price={price}
            setOpen={setOpen}
            notify={notify}
          ></Default>
        );
      case "default":
        return (
          <Candle
            id={id}
            title={title}
            image={image}
            price={price}
            setOpen={setOpen}
            notify={notify}
          ></Candle>
        );

      default:
        return null;
    }
  };

  return (
    <Form1Wrapper>
      <FormTextContainer>{description}</FormTextContainer>
      {formSelect(formType)}
    </Form1Wrapper>
  );
};

export default Form1;
