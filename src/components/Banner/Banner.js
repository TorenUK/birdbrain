import React, { useState, useEffect } from "react";

// elements
import {
  BannerContainer,
  BannerTextContainer,
  BannerTitle,
  BannerSubtitle,
  BannerText,
  BannerItem,
} from "./Banner.elements";

const Banner = ({ title, subtitle, text }) => {
  return (
    <BannerContainer backgroundImg="../../assets/feathers.png">
      {/* <BannerItem /> */}
      <BannerTextContainer>
        <BannerTitle>{title}</BannerTitle>
        <BannerSubtitle>{subtitle}</BannerSubtitle>
        <BannerText>{text}</BannerText>
      </BannerTextContainer>
      {/* <BannerItem /> */}
    </BannerContainer>
  );
};

export default Banner;
