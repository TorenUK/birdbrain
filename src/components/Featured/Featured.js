import React from "react";

// components
import { FeaturedContainer, FeaturedSection } from "./Featured.elements";
import { Carousel } from "../../components";

// other
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";

const slides = [
  { title: "info here?", subtitle: "(ʘ ͜ʖ ʘ)" },
  { title: "and here", subtitle: "(¬‿¬)" },
  { title: "also here", subtitle: "ヾ(⌐■_■)ノ♪" },
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
