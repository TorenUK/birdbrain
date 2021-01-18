import styled from "styled-components";

export const BasketItemContainer = styled.div`
  width: 300px;
  height: 200px;
  margin: 20px;

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
`;
