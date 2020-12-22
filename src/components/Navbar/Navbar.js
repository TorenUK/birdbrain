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
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

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
            <NavLink>
              <InstagramIcon />
            </NavLink>
            <NavLink>
              <FacebookIcon />
            </NavLink>
            <NavLink>
              <MailOutlineIcon />
            </NavLink>
          </NavLinks>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
