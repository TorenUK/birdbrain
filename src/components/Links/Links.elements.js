import styled from "styled-components";

import { Link } from "react-router-dom";

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
`;

export const LinksUl = styled.ul`
  width: 80%;
  max-width: 1200px;

  height: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const LinksLi = styled(Link)`
  text-decoration: none;
  list-style: none;
  cursor: pointer;
`;
