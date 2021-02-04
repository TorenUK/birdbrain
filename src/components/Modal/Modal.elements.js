import styled from "styled-components";

// other
import { Button } from "@material-ui/core";

export const ModalContainer = styled.div`
  width: 90%;
  height: 80%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  background: black;
  z-index: 100;
  border-radius: 5px;

  @media screen and (max-width: 1600px) {
    overflow-y: scroll;

    flex-direction: column;
  }
  @media screen and (max-width: 850px) {
    width: 100%;
    height: 100%;
    overflow-y: scroll;

    flex-direction: column;
  }
`;

export const ModalClose = styled(Button)`
  width: 80px !important;
  height: 40px !important;
  position: absolute !important;
  top: 2rem;
  left: 2rem;

  z-index: 100;
  color: black !important;
  background: grey !important;

  @media screen and (max-width: 1000px) {
    width: 50px !important;
    height: 30px !important;
    top: 1rem !important;
    left: 1rem;
  }
`;

export const ModalTitle = styled.h1`
  position: absolute;
  top: 2rem;
  padding: 3px;

  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  font-weight: 700;
  color: white;
  background: black;
  border-radius: 5px;
  z-index: 100;
  @media screen and (max-width: 1000px) {
    margin-top: 1rem;
  }
`;

export const CarouselDiv = styled.div`
  width: 400px;
  height: 450px;

  margin: 0 auto;

  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media screen and (max-width: 1000px) {
    width: 300px;
    height: 300px;
    overflow: hidden;
  }
`;

export const ModalImageContainer = styled.img`
  width: 100%;
  opacity: 0;

  object-fit: contain;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1000px) {
    max-width: 300px;
  }
`;

export const ModalPrice = styled.div`
  position: absolute;
  top: 5rem;
  padding: 3px;

  font-size: 1.2rem;
  font-weight: 700;
  font-weight: 700;
  color: white;
  background: black;
  border-radius: 5px;
  @media screen and (max-width: 1700px) {
    background: black;
    z-index: 100;
  }
  @media screen and (max-width: 1000px) {
    top: 0.4rem;

    background: black;
    z-index: 100;
  }
`;
