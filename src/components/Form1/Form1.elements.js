import styled from "styled-components";

export const Form1Wrapper = styled.div`
  width: 50%;
  height: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: white;

  @media screen and (max-width: 1000px) {
    width: 100%;
    height: 100%;

    flex-direction: column;
  }
`;
