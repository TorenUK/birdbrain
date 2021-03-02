import styled from "styled-components";

export const SpanBannerContainer = styled.div`
  position: relative;
  width: 100%;
  min-width: 1000px;
  height: 300px;
  min-height: 300px;
  margin: 100px 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: black;
  color: white;

  &:before {
    content: "";
    display: block;
    position: absolute;
    border-radius: 100% 50%;
    width: 100%;
    height: 100px;
    background-color: white;
    right: -5px;
    top: -25%;
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 100% 50%;
    width: 100%;
    height: 100px;
    background-color: white;
    left: 0;
    bottom: -25%;
  }
`;
