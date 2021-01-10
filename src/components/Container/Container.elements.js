import styled from "styled-components";

export const ContainerWrapper = styled.div`
  width: ${(props) => props.width || "100%"};
  min-height: ${(props) => props.minHeight || "400px"};
  margin: 40px auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.background || "white"};

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const ContainerTitle = styled.h1`
  margin-top: 50px;

  text-align: center;
  font-size: 1.2rem;
  font-weight: 700;
`;
