import React, { useState } from "react";

// components
import {
  ThumbnailBottom,
  ThumbnailContainer,
  ThumbnailPreviousPrice,
  ThumbnailPrice,
  ThumbnailTitle,
  ThumbnailView,
  ThumbnailStock,
  ThumbnailTitleContainer,
} from "./Thumbnail.elements";
import { Modal } from "../../components";

// other
import VisibilityIcon from "@material-ui/icons/Visibility";
import { useHistory } from "react-router-dom";

//redux
import { useDispatch } from "react-redux";
import { addProduct } from "../../features/product/productSlice";

const Thumbnail = ({
  id,
  title,
  image1,
  image2,
  previousPrice,
  price,
  stock,
  notify,
  formType,
  description,
}) => {
  const [open, setOpen] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  if (open) {
    document.body.style.overflow = "unset";
  } else if (!open) {
    document.body.style.overflow = "unset";
  }

  return (
    <>
      <ThumbnailContainer
        onClick={() => {
          // setOpen(true);
          // document.body.style.overflow = "hidden";
          history.push("/product");
          dispatch(addProduct(id));
        }}
        image={image1}
      >
        {stock <= 4 ? (
          <ThumbnailStock>only {stock} in stock!</ThumbnailStock>
        ) : null}
        <ThumbnailTitleContainer>
          <ThumbnailTitle>{title}</ThumbnailTitle>
        </ThumbnailTitleContainer>

        <ThumbnailView>
          <VisibilityIcon />
          <p>Quick View</p>
        </ThumbnailView>
        <ThumbnailBottom>
          {previousPrice ? (
            <ThumbnailPreviousPrice>
              £{previousPrice.toFixed(2)}
            </ThumbnailPreviousPrice>
          ) : null}
          <ThumbnailPrice>£{price.toFixed(2)}</ThumbnailPrice>
        </ThumbnailBottom>
      </ThumbnailContainer>
      {open ? (
        <Modal
          id={id}
          title={title}
          image={image1}
          image2={image2}
          previousPrice={previousPrice}
          price={price}
          stock={stock}
          open={open}
          setOpen={setOpen}
          notify={notify}
          formType={formType}
          description={description}
        />
      ) : null}
    </>
  );
};

export default Thumbnail;
