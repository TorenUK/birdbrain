import styled from "styled-components";

// other
import { Button } from "@material-ui/core";

export const ModalContainer = styled.div`
  width: 95%;
  height: 85%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  background: black;
  z-index: 100;

  @media screen and (max-width: 1000px) {
    width: 100%;
    height: 100vh;

    height: 100vh;
    overflow-y: hidden;

    flex-direction: column;
  }
`;

export const ModalClose = styled(Button)`
  width: 80px !important;
  height: 40px !important;
  position: absolute !important;
  top: 2rem;
  left: 2rem;
  color: black !important;
  background: grey !important;

  @media screen and (max-width: 1000px) {
    width: 50px !important;
    height: 30px !important;
    top: 1rem;
    left: 1rem;
  }
`;

export const ModalTitle = styled.h1`
  position: absolute;
  top: 2rem;

  font-size: 1.5rem;
  font-weight: 700;
  font-weight: 700;
  color: white;
`;

export const ModalImageContainer = styled.div`
  width: 400px;
  height: 400px;

  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 5px;

  @media screen and (max-width: 1000px) {
    width: 80%;
    height: 80%;

    background-size: contain;
  }
`;
