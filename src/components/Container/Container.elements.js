import styled from "styled-components";

export const ContainerWrapper = styled.div`
  width: ${(props) => props.width || "90%"};
  min-height: ${(props) => props.minHeight || "400px"};
  height: 500px;
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
