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

export const ImageContainer = styled.div`
  width: 80%;
  height: 80%;
  margin: 0 auto;
`;

export const LargeImage = styled.img`
  max-width: 100%;
  max-height: 100%;

  object-fit: contain;
`;

export const LargeTextContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export default GlobalStyle;
