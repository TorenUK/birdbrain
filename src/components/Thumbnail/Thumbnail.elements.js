import styled from "styled-components";

export const ThumbnailView = styled.div`
  opacity: 0;

  width: 40%;
  height: 15%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: white;
  font-weight: 700;
  background: transparent;
  transition: all 0.5s ease;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const ThumbnailContainer = styled.div`
  width: 300px;
  height: 300px;
  margin: 20px 50px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    ${ThumbnailView} {
      opacity: 1;
    }

    transform: scale(1.01);
  }

  @media screen and (max-width: 1000px) {
    width: 200px;
    height: 200px;
    margin: 20px 20px;
  }
`;

export const ThumbnailTitle = styled.h2`
  margin-top: 1rem;
  padding: 4px;

  font-size: 1.5rem;
  color: white;
  background: black;
  border-radius: 5px;

  @media screen and (max-width: 1000px) {
    font-size: 1rem;
  }
`;

export const ThumbnailBottom = styled.div`
  width: 100%;
  height: 15%;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ThumbnailPreviousPrice = styled.p`
  margin-bottom: 1rem;
  padding: 4px;

  font-size: 1.5rem;
  font-weight: 700;

  color: white;
  background: black;
  opacity: 0.8;
  border-radius: 5px;
  text-decoration: line-through;

  @media screen and (max-width: 1000px) {
    font-size: 1rem;
  }
`;
export const ThumbnailPrice = styled.p`
  margin-bottom: 1rem;
  padding: 4px;

  font-size: 1.5rem;
  font-weight: 700;

  color: black;
  background: white;
  border-radius: 5px;

  @media screen and (max-width: 1000px) {
    font-size: 1rem;
  }
`;
