import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    font-family: 'Raleway', sans-serif;
    
}

body {
  position: relative;
}

.Toastify__toast--dark {
  background-color: #B7235A !important;
  border-radius: 5px !important;
  text-align: center !important;
  font-size: 1.2rem !important;
  font-weight: 700 !important;
  color: #fff !important;
}

.Toastify__progress-bar {
  background-color: #fff !important;
}

*::-webkit-scrollbar {
  /* display: none; */
}

`;

export const PageContainer = styled.div`
  width: 100%;
  max-width: 1600px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 500px;
  min-height: 500px;
  margin: 50px 0;

  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;

  background: #f1f1f1;

  @media screen and (max-width: 1000px) {
    flex-direction: row;
  }
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
