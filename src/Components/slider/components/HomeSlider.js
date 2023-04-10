import React from 'react';
import HomeSlide from './HomeSlide';
import { ReactComponent as RightArrow } from './../assets/images/rightArrow.svg';
import { ReactComponent as LeftArrow } from './../assets/images/leftArrow.svg';

const HomeSlider = () => {
  return (
    <div id="content-header">
      <div id="home-slides-container">
        <HomeSlide id="bg-particles" />
        <HomeSlide id="bg-earn-sats" />
        <HomeSlide id="bg-planet" />
        <HomeSlide id="bg-matrix" />
      </div>
      
      <div className="left-right-slider-arrows">
        <div className="right-slider-arrow">
          <RightArrow />
        </div>
        <div className="left-slider-arrow">
          <LeftArrow />
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
