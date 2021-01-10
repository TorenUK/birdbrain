import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 95%;
  height: 85%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: black;
  z-index: 100;
`;

export const ModalClose = styled.button`
  width: 80px;
  height: 50px;
`;

export const ModalTitle = styled.h1`
  font-size: 1rem;
  font-weight: 700;
  font-weight: 700;
  color: white;
`;
