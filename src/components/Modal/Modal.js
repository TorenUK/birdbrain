import React from "react";

// components
import {
  ModalContainer,
  ModalClose,
  ModalTitle,
  ModalImageContainer,
} from "./Modal.elements";

const Modal = ({
  open,
  setOpen,
  title,
  image,
  previousPrice,
  price,
  scent,
  waxColour,
  stock,
}) => {
  return (
    <ModalContainer>
      <ModalTitle>{title}</ModalTitle>
      <ModalImageContainer image={image} />
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
