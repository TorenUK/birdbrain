import React, { useState, useEffect } from "react";

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
import axios from "axios";

const Banner = ({ title, subtitle, text }) => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    axios
      .get("https://birdbrain.herokuapp.com/banner")
      .then((r) => setUrl(r.data.image.url));
  });

  return (
    <BannerContainer backgroundImg={url}>
      <BannerTextContainer>
        <BannerTitle>{title}</BannerTitle>
        <BannerSubtitle>{subtitle}</BannerSubtitle>
        <BannerText>{text}</BannerText>
      </BannerTextContainer>
    </BannerContainer>
  );
};

export default Banner;
