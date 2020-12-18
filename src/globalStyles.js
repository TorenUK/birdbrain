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

export default GlobalStyle;
