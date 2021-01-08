import styled from "styled-components";

import { PageContainer } from "../../globalStyles";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  width: 80%;
  height: 100px;
  margin: 50px auto;

  display: flex;

  align-items: center;

  font-size: 1.2rem;
  z-index: 999;
`;

export const NavbarContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export const NavLogo = styled(Link)`
  display: flex;
  align-items: center;

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
  min-width: 200px;
  height: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  cursor: pointer;
`;
