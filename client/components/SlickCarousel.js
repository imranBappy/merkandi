import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlickCarousel = ({ settings, children }) => {
  return (
    <Slider {...settings}>
      {children}
    </Slider>
  );
};

export default SlickCarousel;

