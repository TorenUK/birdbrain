import styled from "styled-components";

export const BasketItemContainer = styled.div`
  width: 300px;
  height: 200px;
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
    width: 150px;
    height: 150px;
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
  color: white;
  background: black;
  border-radius: 5px;
  text-align: center;

  @media screen and (max-width: 1000px) {
    font-size: 0.7rem;
    padding: 2px;
  }
`;

export const BasketPrice = styled.p`
  margin-bottom: 1rem;
  padding: 4px;

  font-size: 1.5rem;
  font-weight: 700;

  color: black;
  background: white;
  border-radius: 5px;

  @media screen and (max-width: 1000px) {
    font-size: 1rem;
  }
`;
