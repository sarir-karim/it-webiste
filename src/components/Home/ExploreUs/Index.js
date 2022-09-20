import React, { useState } from "react";
import Slider from "react-slick";

//importing images

import secBg from "./images/bg.png";
import logo1 from "./images/logo1.png";
import logo2 from "./images/logo2.png";
import logo3 from "./images/logo3.png";
import arrow from "./images/arrow.png";

// importing icons from react icons

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// importing Elements from styled component

import {
  OurServices,
  ServiceHead,
  ServicesMain,
  ServiceImgSec,
  ServiceImg,
  SliderSection,
  CarouselMain,
  SlideLogo,
  SlideHead,
  SlidePara,
  SlideSubHead,
  SlideLink,
  SlideLastHead,
  BrandIcon,
} from "./ExploreElement";

// Creating Component
export default function Index() {
  // useState hook

  const [sliderRef, setSliderRef] = useState(null);

  // slick slide style

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.13,
    leftMode: true,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    arrows: false,

    // slick slider responsive
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // retrurn part
  return (
    <OurServices>
      
      <ServiceHead>Explore Our Services with one Click</ServiceHead>
      <ServicesMain>
        <ServiceImgSec>
          <ServiceImg src={secBg} />
        </ServiceImgSec>
        <SliderSection>
          <Slider {...settings} ref={setSliderRef} className="slider__main">
            <div className="image__1">
              <CarouselMain>
                <SlideLogo src={logo1} alt="" />
                <SlideHead>Product Engineering</SlideHead>
                <SlidePara>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mattis egestas elit diam etiam sit in consectetur nisl.
                  Ultrices penatibus in orci ac ant.
                </SlidePara>
                <SlideSubHead>Product Archetechture</SlideSubHead>
                <SlideLink>
                  <BrandIcon src={arrow} />
                  Product Archetechture
                </SlideLink>
                <SlideLastHead>Product Archetechture</SlideLastHead>
              </CarouselMain>
            </div>
            <div className="image__1">
              <CarouselMain>
                <SlideLogo src={logo2} alt="" />
                <SlideHead>UI UX Strategy</SlideHead>
                <SlidePara>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mattis egestas elit diam etiam sit in consectetur nisl.
                  Ultrices penatibus in orci ac ant.
                </SlidePara>
                <SlideSubHead>Brand Development</SlideSubHead>
                <SlideLink>
                  <BrandIcon src={arrow} /> Brand Integration
                </SlideLink>
                <SlideLastHead>Technology Prototyping</SlideLastHead>
              </CarouselMain>
            </div>
            <div className="image__1">
              <CarouselMain>
                <SlideLogo src={logo3} alt="" />
                <SlideHead>Big Data & Analytics</SlideHead>
                <SlidePara>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mattis egestas elit diam etiam sit in consectetur nisl.
                  Ultrices penatibus in orci ac ant.
                </SlidePara>
                <SlideSubHead>Effective Marketing</SlideSubHead>
                <SlideLink>
                  <BrandIcon src={arrow} />
                  Customer Satisfaction
                </SlideLink>
                <SlideLastHead>Streem Processing</SlideLastHead>
              </CarouselMain>
            </div>
          </Slider>
          <div className="controls">
            <button onClick={sliderRef?.slickPrev}>
              <FaChevronLeft />
            </button>
            <button onClick={sliderRef?.slickNext}>
              <FaChevronRight />
            </button>
          </div>
        </SliderSection>
      </ServicesMain>
    </OurServices>
  );
}
