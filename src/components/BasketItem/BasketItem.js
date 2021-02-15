import React from "react";

// components
import {
  BasketItemContainer,
  BasketRemove,
  BasketTitle,
  BasketPrice,
  BasketOption,
} from "./BasketItem.elements";

//redux
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../../features/basket/basketSlice";

// other
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const BasketItem = ({ image, id, title, price, hide, vals }) => {
  const dispatch = useDispatch();

  console.log(vals, "-----");

  return (
    <BasketItemContainer image={image.url}>
      <BasketTitle>{title}</BasketTitle>
      {!hide ? (
        <BasketRemove>
          <DeleteForeverIcon
            onClick={() => {
              dispatch(removeFromBasket({ id: id }));
            }}
          />
        </BasketRemove>
      ) : null}
      <BasketPrice>£{price.toFixed(2)}</BasketPrice>
      <BasketOption>{vals.scent}</BasketOption>
    </BasketItemContainer>
  );
};

export default BasketItem;
