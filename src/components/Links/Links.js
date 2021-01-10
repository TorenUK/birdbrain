import React, { useState } from "react";

// components
import {
  LinksContainer,
  LinksUl,
  LinksLi,
  Burger,
  MobileContainer,
  MobileUl,
  MobileLinksLi,
  Close,
} from "./Links.elements";

// other

const Links = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <LinksContainer>
        <LinksUl>
          <LinksLi to="/">Home</LinksLi>
          <LinksLi to="/shop">Shop</LinksLi>
          <LinksLi to="/about">About Us</LinksLi>
          <LinksLi to="#">FAQ's</LinksLi>
          <LinksLi to="#">Feedback</LinksLi>
          <LinksLi to="#">Get In Touch</LinksLi>
          <LinksLi to="/blog">Blog</LinksLi>
        </LinksUl>
        <Burger
          onClick={() => {
            setClicked(!clicked);
          }}
        />
      </LinksContainer>
      {clicked ? (
        <MobileContainer>
          <Close
            onClick={() => {
              setClicked(!clicked);
            }}
          />
          <MobileUl>
            <MobileLinksLi to="/">Home</MobileLinksLi>
            <MobileLinksLi to="/shop">Shop</MobileLinksLi>
            <MobileLinksLi to="/about">About Us</MobileLinksLi>
            <MobileLinksLi to="#">FAQ's</MobileLinksLi>
            <MobileLinksLi to="#">Feedback</MobileLinksLi>
            <MobileLinksLi to="#">Get In Touch</MobileLinksLi>
            <MobileLinksLi to="/blog">Blog</MobileLinksLi>
          </MobileUl>
        </MobileContainer>
      ) : null}
    </>
  );
};

export default Links;
