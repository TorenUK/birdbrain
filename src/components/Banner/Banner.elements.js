import styled from "styled-components";

export const BannerContainer = styled.div`
  width: 100%;
  min-height: 300px;
  height: 300px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: black url(${(props) => props.backgroundImg});
  background-position: center;
  background-size: 20%;

  @media screen and (max-width: 1000px) {
    background-size: 100%;
  }
`;

export const BannerTextContainer = styled.div`
  max-width: 370px;
  height: 90%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  text-align: center;
`;

export const BannerTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  letter-spacing: 2px;
  color: #fff;
`;

export const BannerSubtitle = styled.h2`
  margin: 20px 0;

  font-size: 1rem;
  color: #fff;
  font-weight: 600;
  font-style: italic;
`;

export const BannerText = styled.p`
  font-size: 0.9rem;
  color: #fff;
  line-height: 1.5rem;
`;
