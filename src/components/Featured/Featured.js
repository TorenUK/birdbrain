import React from "react";

// components
import { FeaturedContainer, FeaturedSection } from "./Featured.elements";
import { Carousel } from "../../components";

// other
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";

const slides = [
  { title: "Follow us here:", subtitle: "" },
  { title: "instagram.com/birdbrain_gifts", subtitle: "" },
  { title: "Handmade with care", subtitle: "" },
];

const Featured = () => {
  return (
    <FeaturedContainer>
      <FeaturedSection></FeaturedSection>
      <FeaturedSection>
        <Carousel slides={slides}>
          <FavoriteIcon />
        </Carousel>
      </FeaturedSection>
      <FeaturedSection></FeaturedSection>
    </FeaturedContainer>
  );
};

export default Featured;
