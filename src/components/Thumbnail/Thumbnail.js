import React from "react";

// components
import {
  ThumbnailBottom,
  ThumbnailContainer,
  ThumbnailPrice,
  ThumbnailTitle,
  ThumbnailView,
} from "./Thumbnail.elements";

// other
import VisibilityIcon from "@material-ui/icons/Visibility";

const Thumbnail = ({ title, image, price, scent, waxColour, stock }) => {
  return (
    <ThumbnailContainer image={image}>
      <ThumbnailTitle>{title}</ThumbnailTitle>
      <ThumbnailView>
        <VisibilityIcon />
        <p>Quick View</p>
      </ThumbnailView>
      <ThumbnailBottom>
        <ThumbnailPrice>£{price.toFixed(2)}</ThumbnailPrice>
      </ThumbnailBottom>
    </ThumbnailContainer>
  );
};

export default Thumbnail;
