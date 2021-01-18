import React from "react";

// components
import {
  ModalContainer,
  ModalClose,
  ModalTitle,
  ModalImageContainer,
} from "./Modal.elements";
import { Form1 } from "../../components";

const Modal = ({
  open,
  setOpen,
  title,
  image,
  previousPrice,
  price,
  stock,
  notify,
  formType,
}) => {
  return (
    <ModalContainer>
      <ModalTitle>{title}</ModalTitle>
      <ModalImageContainer image={image} />
      <Form1
        title={title}
        image={image}
        price={price}
        setOpen={setOpen}
        notify={notify}
        formType={formType}
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
