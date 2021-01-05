import React from "react";

// components
import { GiftContainer, GiftImage, GiftInteract } from "./Gift.elements";

const Gift = () => {
  return (
    <GiftContainer>
      <GiftImage>image</GiftImage>
      <GiftInteract>button here</GiftInteract>
    </GiftContainer>
  );
};

export default Gift;

// create handmade soap gift in strapi

// properties include:
// image, price, info and options object

// options object should include the following properties:
// scent and colour

// colours - black, blue, green, grey, red, pink

// scents - chocolate, christmas spice, citrus and basil, fresh linen, mocha coffee, pumpkin spice, sweet fig, vanilla

// dispatch customer item with options to redux upon adding to basket
