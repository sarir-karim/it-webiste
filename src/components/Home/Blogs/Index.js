import React,{useState} from "react";

// importing state
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

//importing slick slide from slidck library
import Slider from "react-slick";

// importing images
import blog1 from "./images/blog1.png";
import arrow from './images/arrow.png'

// imporing Elemnts from styled component

import {
  BlogSection,
  BlogMain,
  BlogSubHead,
  BlogMainHead,
  BlogFirstPara,
  BlogSecondPara,
  BlogSlide,
  BlogCard,
  SlideImg,
  SlideHead,
  SlidePara,
  SlideSecondPara,
  SlideLink,
  CardDetail,
  CarouselArrow
} from "./BlogElement";

// Blog Component

const Index = () => {
  // declaring state
  const [sliderRef, setSliderRef] = useState(null);

  // Slider Styling

  const settings = {
    arrows: false,
    slidesToShow: 1.9,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "60px", 
        },
      },
      {
        breakpoint: 995,
        settings: {
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          paddingLeft:'30px', 
        },
        
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          paddingLeft:'10px', 
        },
        
      },
      

    ],
  };

  // return part
  return (
    <BlogSection>
      <BlogMain>
        <BlogSubHead>Our Blogs</BlogSubHead>
        <BlogMainHead>The Latest from our blogs</BlogMainHead>
        <BlogFirstPara>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
          egestas elit diam etiam sit in consectetur nisl. Ultrices penatibus in
          orci ac ant.
        </BlogFirstPara>
        <BlogSecondPara>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
          egestas elit diam etiam sit in consectetur nisl. Ultrices penatibus in
          orci ac ant.
        </BlogSecondPara>
      </BlogMain>
      <BlogSlide>
        <Slider {...settings} ref={setSliderRef}>
          <div>
            <BlogCard>
              <SlideImg src={blog1} />
              <CardDetail>
                <SlideHead>Features are moving to open source</SlideHead>
                <SlidePara>By Xilan Badar</SlidePara>
                <SlideSecondPara>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mattis egestas elit diam etiam sit in consectetur nisl.
                  Ultrices penatibus in orci ac ant.
                </SlideSecondPara>
                <SlideLink><CarouselArrow src={arrow}/>Learn more</SlideLink>
              </CardDetail>
            </BlogCard>
          </div>
          <div>
            <BlogCard>
              <SlideImg src={blog1} />
              <CardDetail>
                <SlideHead>Features are moving to open source</SlideHead>
                <SlidePara>By Xilan Badar</SlidePara>
                <SlideSecondPara>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mattis egestas elit diam etiam sit in consectetur nisl.
                  Ultrices penatibus in orci ac ant.
                </SlideSecondPara>
                <SlideLink> <CarouselArrow src={arrow}/>Learn more</SlideLink>
              </CardDetail>
            </BlogCard>
          </div>
          <div>
            <BlogCard>
              <SlideImg src={blog1} />
              <CardDetail>
                <SlideHead>Features are moving to open source</SlideHead>
                <SlidePara>By Xilan Badar</SlidePara>
                <SlideSecondPara>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mattis egestas elit diam etiam sit in consectetur nisl.
                  Ultrices penatibus in orci ac ant.
                </SlideSecondPara>
                <SlideLink> <CarouselArrow src={arrow}/>Learn more</SlideLink>
              </CardDetail>
            </BlogCard>
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
      </BlogSlide>
    </BlogSection>
  );
};

export default Index;
