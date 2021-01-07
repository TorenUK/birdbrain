import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    font-family: 'Raleway', sans-serif;
}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
`;

export const TextContainer = styled.div`
  width: 50%;
  min-width: 250px;
  height: 100%;
  max-height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const Title = styled.h1`
  width: 50%;
  min-width: 350px;

  font-size: 1.6rem;
  font-weight: 500;

  @media screen and (max-width: 1000px) {
    margin: 20px 0;

    text-align: center;
  }
`;

export const Subtitle = styled.h2`
  width: 50%;
  min-width: 350px;

  font-size: 1rem;
  font-style: italic;
  font-weight: 500;

  @media screen and (max-width: 1000px) {
    text-align: center;
  }
`;

export const TextBody = styled.p`
  width: 50%;
  min-width: 350px;

  font-size: 0.9rem;
  font-weight: 400;
  font-style: italic;
  line-height: 30px;
  text-align: left;

  @media screen and (max-width: 1000px) {
    width: 80%;
    text-align: center;
  }
`;

export const ImageContainer = styled.div`
  width: 50%;
  min-width: 350px;
  height: 100%;

  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export default GlobalStyle;
