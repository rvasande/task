import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import ImageOne from '../assets/images/imageOne.jpg'
import ImageThree from '../assets/images/imageThree.jpeg'
import ImageFour from '../assets/images/imageFour.jpg'

export default function ControlledCarousel() {
  
  return (
    <div style={{ display: "block", width: "100%" }} >
      <Carousel >
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={ImageOne}
            alt="Image One"
          />
          <Carousel.Caption>
            <h3>PVPIT Bavdhan, Pune</h3>
            <p>We multiply the success towards nation building</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={ImageThree}
            alt="Image two"
          />
         
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={ImageFour}
            alt="Image three"
          />
     
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
