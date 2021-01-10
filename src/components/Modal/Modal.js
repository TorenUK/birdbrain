import React from "react";

// components
import { ModalContainer, ModalClose, ModalTitle } from "./Modal.elements";

const Modal = ({ open, setOpen }) => {
  return (
    <ModalContainer>
      <ModalTitle>Product Tite</ModalTitle>
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
