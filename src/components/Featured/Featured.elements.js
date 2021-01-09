import styled from "styled-components";

export const FeaturedContainer = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  background-image: linear-gradient(to right, #868f96 0%, #596164 100%);
  color: white;
`;

export const FeaturedSection = styled.section`
  width: 30%;
  height: 80%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
`;
