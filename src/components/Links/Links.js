import React from "react";

// components
import { LinksContainer, LinksUl, LinksLi } from "./Links.elements";

// other
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <LinksContainer>
      <LinksUl>
        <LinksLi to="/">Home</LinksLi>
        <LinksLi to="/shop">Shop</LinksLi>
        <LinksLi to="/about">About Us</LinksLi>
        <LinksLi>FAQ's</LinksLi>
        <LinksLi>Feedback</LinksLi>
        <LinksLi>Get In Touch</LinksLi>
        <LinksLi>Blog</LinksLi>
      </LinksUl>
    </LinksContainer>
  );
};

export default Links;
