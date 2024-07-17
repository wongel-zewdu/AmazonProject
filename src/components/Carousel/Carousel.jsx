import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {img} from './data'
import classes from "./carousel.module.css";
const CarouselEffect = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showIndicators={false}
      showThumbs={false}
      showStatus={false}
    >
      {img.map((imageItemLink, index) => (
        <div key={index} className={classes.fedEffect}>
          <img key={imageItemLink} src={imageItemLink} />
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselEffect;

