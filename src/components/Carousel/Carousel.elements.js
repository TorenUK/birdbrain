import styled from "styled-components";

export const CarouselWrapper = styled.div`
  width: 300px;
  margin: 0.5rem auto;

  display: flex;
  overflow: hidden;
`;

const radius = "0.5rem";

export const CarouselIcon = styled.div`
  width: 60px;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: black;
  background: white;
  border-radius: ${radius} 0 0 ${radius};
`;

export const CarouselContent = styled.div`
  position: relative;

  flex: 1 0 auto;

  border-radius: 0 ${radius} ${radius} 0;
  background: black;
  color: white;
`;

export const CarouselSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  transform: translateY(
    -${(props) => (props.activeIndex === 0 ? 0 : props.activeIndex * 100)}%
  );

  transition: transform ease-out 0.45s;
`;

export const CarouselSlide = styled.div`
  height: 60px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CarouselTitle = styled.h1`
  font-size: 1rem;
  font-weight: 500;
`;
