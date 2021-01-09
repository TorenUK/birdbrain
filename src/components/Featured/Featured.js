import React from "react";

// components
import { FeaturedContainer, FeaturedSection } from "./Featured.elements";
import { Carousel } from "../../components";

// other
import FavoriteIcon from "@material-ui/icons/Favorite";

const slides = [
  { title: "info here?", subtitle: "(ʘ ͜ʖ ʘ)" },
  { title: "and here", subtitle: "(¬‿¬)" },
  { title: "also here", subtitle: "ヾ(⌐■_■)ノ♪" },
];

const Featured = () => {
  return (
    <FeaturedContainer>
      <FeaturedSection>colour?</FeaturedSection>
      <FeaturedSection>
        <Carousel slides={slides}>
          <FavoriteIcon />
        </Carousel>
      </FeaturedSection>
      <FeaturedSection>
        <p>Shop Valentines Items →</p>
      </FeaturedSection>
    </FeaturedContainer>
  );
};

export default Featured;
