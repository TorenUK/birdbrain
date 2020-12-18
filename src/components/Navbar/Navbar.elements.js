import styled from "styled-components";

import { Container } from "../../globalStyles";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  width: 100%;
  height: 100px;
  margin: 50px 0;

  display: flex;

  align-items: center;

  font-size: 1.2rem;
  z-index: 999;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 100%;

  ${Container}
`;

export const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-self: flex-start;

  font-size: 1.8rem;
  font-weight: 300;
  text-decoration: none;
  color: #000;
  cursor: pointer;
`;

export const NavIcon = styled.img`
  max-width: 150px;

  object-fit: contain;
`;

export const NavLinks = styled.div`
  min-width: 500px;
  height: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const NavLink = styled(Link)`
  font-size: 1rem;
  font-weight: 400;
  text-decoration: none;
`;
