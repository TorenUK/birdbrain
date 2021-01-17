import React from "react";

// components
import { BasketItemContainer } from "./BasketItem.elements";

const BasketItem = ({ image }) => {
  return (
    <BasketItemContainer image={image}>basket item here</BasketItemContainer>
  );
};

export default BasketItem;
