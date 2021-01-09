import React from "react";

// components
import { FeaturedContainer, FeaturedSection } from "./Featured.elements";

// other
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const Featured = () => {
  return (
    <FeaturedContainer>
      <FeaturedSection>featured stuff here?</FeaturedSection>
      <FeaturedSection>discount stuff here?</FeaturedSection>
      <FeaturedSection>
        <p>Shop Valentines Items →</p>
      </FeaturedSection>
    </FeaturedContainer>
  );
};

export default Featured;
