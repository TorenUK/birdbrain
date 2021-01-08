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
          <LinksLi>FAQ's</LinksLi>
          <LinksLi>Feedback</LinksLi>
          <LinksLi>Get In Touch</LinksLi>
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
            <MobileLinksLi>FAQ's</MobileLinksLi>
            <MobileLinksLi>Feedback</MobileLinksLi>
            <MobileLinksLi>Get In Touch</MobileLinksLi>
            <MobileLinksLi>Blog</MobileLinksLi>
          </MobileUl>
        </MobileContainer>
      ) : null}
    </>
  );
};

export default Links;
