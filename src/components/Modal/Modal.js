import React from "react";

// components
import {
  ModalContainer,
  ModalClose,
  ModalTitle,
  ModalImageContainer,
  ModalPrice,
} from "./Modal.elements";
import { Form1 } from "../../components";
import { TextContainer } from "../../globalStyles";

const Modal = ({
  id,
  open,
  setOpen,
  title,
  image,
  previousPrice,
  price,
  stock,
  notify,
  formType,
  description,
}) => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else if (!open) {
    document.body.style.overflow = "unset";
  }

  return (
    <ModalContainer>
      <ModalTitle>{title}</ModalTitle>
      <ModalPrice>
        <h2>£{price.toFixed(2)}</h2>
      </ModalPrice>
      <ModalImageContainer image={image} />
      <Form1
        id={id}
        title={title}
        image={image}
        price={price}
        setOpen={setOpen}
        notify={notify}
        formType={formType}
        description={description}
      />
      <ModalClose
        onClick={() => {
          setOpen(false);
          document.body.style.overflow = "unset";
        }}
      >
        close
      </ModalClose>
    </ModalContainer>
  );
};

export default Modal;
