import styled from "styled-components";

export const BlogContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 450px;
  margin: 50px 0;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const BlogSection = styled.div`
  width: 49%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  background-color: white;
`;

export const BlogImage = styled.div`
  width: 100%;
  height: 100%;

  background-image: url(${(props) => props.imageURL});
  background-position: center;
  background-size: 80%;
  background-repeat: no-repeat;
`;

export const BlogTitle = styled.h2``;

export const BlogDescription = styled.p`
  width: 90%;

  font-size: 1rem;
  line-height: 22px;
`;
