import styled from "styled-components";

export const BannerContainer = styled.div`
  width: 100%;
  min-height: 600px;
  height: 600px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: black;
`;

export const BannerTextContainer = styled.div`
  max-width: 370px;
  height: 50%;

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
  font-size: 1rem;
  color: #fff;
  font-weight: 400;
`;

export const BannerText = styled.p`
  font-size: 0.8rem;
  color: #fff;
  line-height: 1.5rem;
`;
