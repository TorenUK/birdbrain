import styled from "styled-components";

export const FeaturedContainer = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  background-image: linear-gradient(
    to right,
    #ff8177 0%,
    #ff867a 0%,
    #ff8c7f 21%,
    #f99185 52%,
    #cf556c 78%,
    #b12a5b 100%
  );
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
