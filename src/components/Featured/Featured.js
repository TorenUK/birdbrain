import React from "react";

// components
import { FeaturedContainer, FeaturedSection } from "./Featured.elements";
import { Carousel } from "../../components";

// other
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";

const slides = [
  { title: "Follow us here:", subtitle: "" },
  { title: "instagram.com/birdbrain_gifts", subtitle: "" },
  { title: "facebook.com/birdbraingifts", subtitle: "" },
];

const Featured = () => {
  return (
    <FeaturedContainer>
      <FeaturedSection>
        <LocalShippingIcon />
        Dispatch within 3-5 working days
      </FeaturedSection>
      <FeaturedSection>
        <Carousel slides={slides}>
          <FavoriteIcon />
        </Carousel>
      </FeaturedSection>
      <FeaturedSection>
        <CardGiftcardIcon />
        Handmade with care
      </FeaturedSection>
    </FeaturedContainer>
  );
};

export default Featured;
