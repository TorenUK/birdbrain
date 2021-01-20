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

  color: white;
  background: #b7235a;
  border-radius: 5px;
  cursor: pointer;
`;
