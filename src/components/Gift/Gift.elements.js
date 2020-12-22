import styled from "styled-components";

export const GiftContainer = styled.div`
  height: 300px;
  width: 300px;
  min-width: 300px;
  min-height: 300px;
  margin: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  background-color: black;
  border-radius: 5px;

  @media screen and (max-width: 1000px) {
    width: 300px;
    height: 300px;
    min-width: unset;
    min-height: unset;
  }
`;

export const GiftImage = styled.div`
  width: 95%;
  height: 70%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: white;
`;

export const GiftInteract = styled.div`
  width: 95%;
  height: 10%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: white;
`;
