import React from "react";

// components
import { BasketIconContainer } from "./BasketIcon.elements";

// other
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const BasketIcon = ({ basket }) => {
  return (
    <BasketIconContainer>
      <ShoppingBasketIcon />
      basket thing here
    </BasketIconContainer>
  );
};

export default BasketIcon;
