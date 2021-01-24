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
  position: relative;

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

export const ThumbnailTitleContainer = styled.div`
  width: 100%;
  height: 45px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background: black;
  text-align: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  @media screen and (max-width: 1000px) {
    height: 35px;
  }
`;

export const ThumbnailTitle = styled.h2`
  padding: 4px;

  font-size: 1.2rem;
  font-weight: 700;
  color: white;

  border-radius: 5px;
  text-align: center;

  @media screen and (max-width: 1000px) {
    font-size: 0.9rem;
    padding: 2px;
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

export const ThumbnailStock = styled.div`
  width: 60px;
  height: 40px;
  position: absolute;
  bottom: -3%;
  right: -8%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #b7235a;
  border: 2px solid black;
  border-radius: 5px;
  color: white;
  font-size: 0.8rem;
  font-weight: 600;
  text-align: center;
  opacity: 0.8;

  @media screen and (max-width: 1000px) {
    width: 45px;
    height: 40px;
    top: -10%;
    right: -13%;

    font-size: 0.6rem;
  }
`;
