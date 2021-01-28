import React from "react";

// components
import {
  ModalContainer,
  ModalClose,
  ModalTitle,
  ModalCarouselContainer,
  ModalImageContainer,
  ModalPrice,
} from "./Modal.elements";
import { Form1 } from "../../components";
import { TextContainer } from "../../globalStyles";

// other
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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
      <ModalCarouselContainer>
        <Carousel>
          <div>
            <ModalImageContainer src={image} />
          </div>
          <div>
            <ModalImageContainer src={image} />
          </div>
        </Carousel>
      </ModalCarouselContainer>

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
