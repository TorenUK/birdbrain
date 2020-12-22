import styled from "styled-components";

export const ContainerWrapper = styled.div`
  width: ${(props) => props.width || "90%"};
  min-height: ${(props) => props.minHeight || "400px"};

  margin: 40px auto;

  display: ${(props) => props.display || "flex"};
  grid-template-columns: ${(props) => props.gtc};
  grid-template-rows: ${(props) => props.gtr};
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.background || "white"};

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;
