import styled from "styled-components";

export const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;

  width: 100%;
  height: 50px;
  min-height: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: black;
`;

export const FooterBottom = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: white;
`;
