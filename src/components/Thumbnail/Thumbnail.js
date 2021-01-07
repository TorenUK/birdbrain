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
import trialImage from "../../assets/trial.webp";
import VisibilityIcon from "@material-ui/icons/Visibility";

const Thumbnail = () => {
  return (
    <ThumbnailContainer trialImage={trialImage}>
      <ThumbnailTitle>Handmade Soap</ThumbnailTitle>
      <ThumbnailView>
        <VisibilityIcon />
        <p>Quick View</p>
      </ThumbnailView>
      <ThumbnailBottom>
        <ThumbnailPrice>£2.70</ThumbnailPrice>
      </ThumbnailBottom>
    </ThumbnailContainer>
  );
};

export default Thumbnail;
