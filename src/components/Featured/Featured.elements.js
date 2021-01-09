import styled from "styled-components";

export const FeaturedContainer = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.15) 0%,
      rgba(0, 0, 0, 0.15) 100%
    ),
    radial-gradient(
        at top center,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(0, 0, 0, 0.4) 120%
      )
      #989898;
  background-blend-mode: multiply, multiply;
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
