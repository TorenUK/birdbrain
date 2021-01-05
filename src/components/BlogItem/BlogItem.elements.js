import styled from "styled-components";

export const BlogContainer = styled.div`
  width: 100%;
  max-width: 1200px;

  min-height: 450px;
  margin: 50px 0;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const BlogSection = styled.div`
  width: 49%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  background-color: white;

  @media screen and (max-width: 1000px) {
    width: 80%;

    text-align: center;
  }
`;

export const BlogImage = styled.div`
  width: 100%;

  min-height: 400px;

  background-image: url(${(props) => props.imageURL});
  background-position: center;
  background-size: 80%;
  background-repeat: no-repeat;

  @media screen and (max-width: 1000px) {
    background-size: contain;
  }
`;

export const BlogTitle = styled.h2`
  @media screen and (max-width: 1000px) {
    margin: 20px 0;
  }
`;

export const BlogDescription = styled.p`
  width: 90%;

  font-size: 1rem;
  line-height: 22px;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;
