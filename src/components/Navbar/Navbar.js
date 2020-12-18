import React from "react";

// elements
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  NavLinks,
  NavLink,
} from "./Navbar.elements";

// other
import Logo from "../../assets/birdbrain-logo.jpg";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon src={Logo} />
            BIRD BRAIN GIFTS
          </NavLogo>
          <NavLinks>
            <NavLink>Home</NavLink>
            <NavLink>Shop</NavLink>
            <NavLink>About Us</NavLink>
            <NavLink>FAQ's</NavLink>
            <NavLink>Feedback</NavLink>
            <NavLink>Get In Touch</NavLink>
            <NavLink>Blog</NavLink>
          </NavLinks>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
