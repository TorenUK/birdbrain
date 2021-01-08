import styled from "styled-components";

export const BlogContainer = styled.div`
  width: 100%;
  height: 500px;
  min-height: 500px;
  margin: 50px 0;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 1000px) {
    height: unset;
    flex-direction: column;
  }
`;

export const BlogSection = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  background-color: white;

  @media screen and (max-width: 1000px) {
    width: 80%;
    margin: 20px 0;

    text-align: center;
  }
`;

export const BlogImage = styled.div`
  width: 70%;

  min-height: 400px;

  background-image: url(${(props) => props.imageURL});
  background-position: center;
  background-size: 80%;
  background-repeat: no-repeat;

  @media screen and (max-width: 1000px) {
    background-size: contain;
  }
`;
