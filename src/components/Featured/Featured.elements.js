import styled from "styled-components";

export const FeaturedContainer = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  background: linear-gradient(to bottom, #323232 0%, #3f3f3f 40%, #1c1c1c 150%),
    linear-gradient(
      to top,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(0, 0, 0, 0.25) 200%
    );
  background-blend-mode: multiply;
  color: white;

  @media screen and (max-width: 850px) {
    display: none;
  }
`;

export const FeaturedSection = styled.section`
  width: 30%;
  height: 80%;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  text-align: center;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
