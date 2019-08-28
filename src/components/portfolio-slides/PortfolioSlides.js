import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import moddo from '../../assets/moddo.png';
import hp from '../../assets/HP.png';
import alchemyBot from '../../assets/alchemyBot.png';
import './PortfolioSlides.css';

const content = [
  {
    image: moddo
  },
  {
    image: hp
  },
  {
    image: alchemyBot
  }
];

export default function PortfolioSlides() {
  return (
    <>
      <Slider className="slider-wrapper">
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{ background: `url('${item.image}') no-repeat center center` }}
          >
            <div className="inner">
              <button>Details</button>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}
