import React from "react";

// components
import { BasketItemContainer, BasketRemove } from "./BasketItem.elements";

//redux
import { useDispatch } from "react-redux";
import { removeFromBasket } from "../../features/basket/basketSlice";

// other
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const BasketItem = ({ image, id }) => {
  const dispatch = useDispatch();

  return (
    <BasketItemContainer image={image}>
      <BasketRemove>
        <DeleteForeverIcon
          onClick={() => {
            dispatch(removeFromBasket({ id: id }));
          }}
        />
      </BasketRemove>
    </BasketItemContainer>
  );
};

export default BasketItem;
