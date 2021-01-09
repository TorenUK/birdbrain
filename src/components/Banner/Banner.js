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
import feathers from "../../assets/feathers.png";

const Banner = ({ title, subtitle, text }) => {
  return (
    <BannerContainer backgroundImg={feathers}>
      <BannerTextContainer>
        <BannerTitle>{title}</BannerTitle>
        <BannerSubtitle>{subtitle}</BannerSubtitle>
        <BannerText>{text}</BannerText>
      </BannerTextContainer>
    </BannerContainer>
  );
};

export default Banner;
