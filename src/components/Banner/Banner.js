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

const Banner = () => {
  return (
    <BannerContainer>
      <BannerTextContainer>
        <BannerTitle>BIRD BRAIN GIFTS</BannerTitle>
        <BannerSubtitle>Handmade items for all occasions</BannerSubtitle>
        <BannerText>
          BirdBrain Gifts is an independent homemade gift store, every item is
          made to order and with care. We also have our own BirdBrain Blog where
          you can see other independent businesses we support for more gift and
          item ideas!
        </BannerText>
      </BannerTextContainer>
    </BannerContainer>
  );
};

export default Banner;
