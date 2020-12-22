import React from "react";

// elements
import {
  BannerContainer,
  BannerTextContainer,
  BannerTitle,
  BannerSubtitle,
  BannerText,
} from "./Banner.elements";

// other

const Banner = ({ title, subtitle, text }) => {
  return (
    <BannerContainer>
      <BannerTextContainer>
        <BannerTitle>{title}</BannerTitle>
        <BannerSubtitle>{subtitle}</BannerSubtitle>
        <BannerText>{text}</BannerText>
      </BannerTextContainer>
    </BannerContainer>
  );
};

export default Banner;
