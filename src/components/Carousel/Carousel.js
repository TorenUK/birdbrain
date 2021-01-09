import React, { useEffect, useState } from "react";

// components
import {
  CarouselWrapper,
  CarouselIcon,
  CarouselContent,
  CarouselSlider,
  CarouselSlide,
  CarouselTitle,
} from "./Carousel.elements";

const Carousel = ({ children, slides, alt }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex === slides.length - 1) {
        setActiveIndex(0);
      } else {
        setActiveIndex(activeIndex + 1);
      }
    }, 3600);
    return () => clearInterval(interval);
  }, [setActiveIndex, activeIndex, slides.length]);

  return (
    <CarouselWrapper>
      <CarouselIcon alt={alt}>{children}</CarouselIcon>
      <CarouselContent>
        <CarouselSlider activeIndex={activeIndex}>
          {slides.map((slide, idx) => (
            <CarouselSlide key={idx} index={idx}>
              <div>
                <CarouselTitle>{slide.title}</CarouselTitle>
              </div>
              <div>{slide.subtitle}</div>
            </CarouselSlide>
          ))}
        </CarouselSlider>
      </CarouselContent>
    </CarouselWrapper>
  );
};

export default Carousel;
