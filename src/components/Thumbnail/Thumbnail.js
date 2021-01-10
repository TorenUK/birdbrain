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
} from "./Thumbnail.elements";
import { Modal } from "../../components";

// other
import VisibilityIcon from "@material-ui/icons/Visibility";

const Thumbnail = ({
  title,
  image,
  previousPrice,
  price,
  scent,
  waxColour,
  stock,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ThumbnailContainer
        onClick={() => {
          setOpen(true);
          document.body.style.overflow = "hidden";
        }}
        image={image}
      >
        {stock <= 5 ? <ThumbnailStock>Low in stock</ThumbnailStock> : null}
        <ThumbnailTitle>{title}</ThumbnailTitle>
        <ThumbnailView>
          <VisibilityIcon />
          <p>Quick View</p>
        </ThumbnailView>
        <ThumbnailBottom>
          <ThumbnailPreviousPrice>
            £{previousPrice.toFixed(2)}
          </ThumbnailPreviousPrice>
          <ThumbnailPrice>£{price.toFixed(2)}</ThumbnailPrice>
        </ThumbnailBottom>
      </ThumbnailContainer>
      {open ? (
        <Modal
          title={title}
          image={image}
          previousPrice={previousPrice}
          price={price}
          scent={scent}
          waxColour={waxColour}
          stock={stock}
          open={open}
          setOpen={setOpen}
        />
      ) : null}
    </>
  );
};

export default Thumbnail;
