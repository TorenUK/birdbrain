import React from "react";

// components
import {
  ModalContainer,
  ModalClose,
  ModalTitle,
  // ModalCarouselContainer,
  ModalImageContainer,
  ModalPrice,
  CarouselDiv,
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
  image2,
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

      <Carousel>
        <CarouselDiv image={image}>
          <ModalImageContainer src={image} />
        </CarouselDiv>
        <CarouselDiv image={image2}>
          <ModalImageContainer src={image2} />
        </CarouselDiv>
      </Carousel>

      <Form1
        id={id}
        title={title}
        image1={image}
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
