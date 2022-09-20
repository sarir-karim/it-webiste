import React, { useState } from "react";
import { RiDoubleQuotesR } from "react-icons/ri";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { ClientData } from "./CustomerData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import {
  FourthSection,
  LeftSide,
  LeftSideContent,
  LeftSideTitle,
  LeftSideDescription,
  RightSide,
  TestimonialsContainer,
  QuoteIconContainer,
  TestimonialContent,
  AboutClient,
  ClientPhotoContainer,
  ClientPhoto,
  ClientDetails,
  ClientName,
  ClientDesignation,
  ClientFeedback,
} from "./CustomerStyles";

const Index = () => {
  const [sliderRef, setSliderRef] = useState(null);
  const settings = {
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
  };
  return (
    <>
      <FourthSection>
        <LeftSide>
          <LeftSideContent>
            <LeftSideTitle>Happy customers</LeftSideTitle>
            <LeftSideDescription>
              Feedback from these happy customers helps us in reaching the
              heights
            </LeftSideDescription>
          </LeftSideContent>
        </LeftSide>
        <RightSide>
          <TestimonialsContainer>
            <QuoteIconContainer>
              <RiDoubleQuotesR />
            </QuoteIconContainer>

            <Slider {...settings} ref={setSliderRef}>
              {ClientData.map((item, index) => (
                <TestimonialContent key={index}>
                  <AboutClient>
                    <ClientPhotoContainer>
                      <ClientPhoto src={item.clientPhoto} alt="Client-Photo" />
                    </ClientPhotoContainer>
                    <ClientDetails>
                      <ClientName>{item.clientName}</ClientName>
                      <ClientDesignation>
                        {item.clientDesignation}
                      </ClientDesignation>
                    </ClientDetails>
                  </AboutClient>
                  <ClientFeedback>{item.clientFeedback}</ClientFeedback>
                </TestimonialContent>
              ))}
            </Slider>
            <div className="controls">
              <button onClick={sliderRef?.slickPrev}>
                <FaChevronLeft />
              </button>
              <button onClick={sliderRef?.slickNext}>
                <FaChevronRight />
              </button>
            </div>
          </TestimonialsContainer>
        </RightSide>
      </FourthSection>
    </>
  );
};

export default Index;
