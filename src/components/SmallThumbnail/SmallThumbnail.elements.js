import styled from "styled-components";

export const SmallThumbnailContainer = styled.div`
  width: 150px;
  max-height: 100%;
  min-height: 130px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => `url(${props.background})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
`;
