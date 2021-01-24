import styled from "styled-components";

export const BasketIconContainer = styled.div`
  width: 80px;
  height: 80px;

  position: fixed;
  bottom: 7%;
  left: 5%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  opacity: 0.8;
  font-weight: 700;
  color: white !important;
  background: #b7235a;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;

  @media screen and (max-width: 850px) {
    bottom: 8%;
    width: 45px;
    height: 45px;

    font-size: 0.8rem;
  }
`;
