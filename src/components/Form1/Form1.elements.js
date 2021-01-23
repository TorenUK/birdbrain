import styled from "styled-components";

export const Form1Wrapper = styled.div`
  width: 50%;
  height: 60%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 1.2rem;

  background: white;
  border-radius: 5px;

  @media screen and (max-width: 1000px) {
    width: 100%;
    height: 50%;

    flex-direction: column;
  }
`;
