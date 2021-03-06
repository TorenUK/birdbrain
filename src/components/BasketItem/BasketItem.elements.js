import styled from "styled-components";

export const BasketItemContainer = styled.div`
  width: 300px;
  height: 250px;
  margin: 20px;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${(props) => props.image});
  background-size: 70%;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 5px;
  color: white;
  border: 1px solid black;

  @media screen and (max-width: 850px) {
    width: 170px;
    height: 170px;
    margin: 5px;
  }
`;

export const BasketRemove = styled.button`
  width: 35px;
  height: 35px;
  position: absolute;
  bottom: 5%;
  left: 5%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: black;
  background: transparent;
  border-radius: 5px;
  cursor: pointer;
`;

export const BasketTitle = styled.h2`
  position: absolute;
  top: 1px;

  padding: 3px;

  font-size: 1rem;
  font-weight: 700;
  color: black;
  background: white;
  border-radius: 5px;
  text-align: center;

  @media screen and (max-width: 1000px) {
    font-size: 0.6rem;
    padding: 2px;
    color: black;
    background: white;
  }
`;

export const BasketPrice = styled.p`
  position: absolute;
  bottom: 0.5rem;

  padding: 3px;

  font-size: 1.1rem;
  font-weight: 700;

  color: white;
  background: black;
  border-radius: 5px;

  @media screen and (max-width: 1000px) {
    font-size: 1rem;
  }
`;

export const BasketOption = styled.p`
  position: absolute;
  top: 15%;

  padding: 3px;

  font-size: 1rem;
  font-weight: 700;

  color: black;
  background: white;
  border-radius: 5px;

  @media screen and (max-width: 1000px) {
    top: 15%;
    font-size: 0.6rem;
    color: black;
    background: white;
  }
`;
