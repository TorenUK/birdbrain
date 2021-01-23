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

const Thumbnail = ({
  id,
  title,
  image,
  previousPrice,
  price,
  stock,
  notify,
  formType,
  description,
}) => {
  const [open, setOpen] = useState(false);

  if (open) {
    document.body.style.overflow = "unset";
  } else if (!open) {
    document.body.style.overflow = "unset";
  }

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
          image={image}
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
