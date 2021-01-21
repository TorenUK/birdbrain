import React from "react";

// components
import {
  BasketItemContainer,
  BasketRemove,
  BasketTitle,
} from "./BasketItem.elements";

//redux
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../../features/basket/basketSlice";

// other
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const BasketItem = ({ image, id, title, price, hide }) => {
  const dispatch = useDispatch();

  return (
    <BasketItemContainer image={image}>
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
    </BasketItemContainer>
  );
};

export default BasketItem;
