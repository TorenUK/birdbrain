import React from "react";

// components
import { BasketIconContainer } from "./BasketIcon.elements";
import { LinksLi } from "../Links/Links.elements";

// other
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

// redux
import { useSelector } from "react-redux";
import { selectBasket } from "../../features/basket/basketSlice";

const BasketIcon = ({ basket }) => {
  return (
    <LinksLi to="/basket">
      <BasketIconContainer>
        <ShoppingBasketIcon />
        basket thing here
      </BasketIconContainer>
    </LinksLi>
  );
};

export default BasketIcon;
