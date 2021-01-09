import React from "react";

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
  console.log(stock);

  return (
    <ThumbnailContainer image={image}>
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
  );
};

export default Thumbnail;
