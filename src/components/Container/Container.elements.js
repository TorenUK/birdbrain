import styled from "styled-components";

export const ContainerWrapper = styled.div`
  width: 90%;
  min-height: 500px;
  margin: 40px auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;
