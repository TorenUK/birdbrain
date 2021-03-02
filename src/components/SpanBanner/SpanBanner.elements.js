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
    border-radius: 100% 80%;
    width: 110%;
    height: 120px;
    background-color: white;

    top: -30%;

    @media only screen and (max-width: 850px) {
      height: 50px;
      top: -25%;
    }
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 100% 80%;
    width: 110%;
    height: 120px;
    background-color: white;

    bottom: -30%;

    @media only screen and (max-width: 850px) {
      height: 40px;
      bottom: -10%;
    }
  }

  @media only screen and (max-width: 850px) {
    display: none;
  }
`;
