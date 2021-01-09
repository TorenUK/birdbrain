import styled from "styled-components";

import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

export const LinksContainer = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;

  width: 100%;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: white;
  z-index: 100;
`;

export const LinksUl = styled.ul`
  width: 80%;
  max-width: 1200px;

  height: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const LinksLi = styled(Link)`
  font-weight: 600;
  text-decoration: none;
  list-style: none;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    color: black;
  }
`;

export const Burger = styled(MenuIcon)`
  display: none !important;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    display: block !important;
  }
`;

export const MobileContainer = styled.div`
  position: absolute;

  width: 100vw;
  height: 100vh;
  min-width: 300px;
  min-height: 700px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: black;
  z-index: 1000;
`;

export const MobileUl = styled.ul`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const MobileLinksLi = styled(Link)`
  text-decoration: none;
  list-style: none;
  cursor: pointer;
`;

export const Close = styled(CloseIcon)`
  position: absolute;
  top: 1rem;

  cursor: pointer;
  color: white;
`;
