// importing styled component

import styled from "styled-components";

// Stying Elements

export const OurServices = styled.section`
  position: relative;
  background: #e5e5e5;
  padding-top: 40px;
  padding-bottom: 40px;

  @media (max-width: 375px) {
    padding-top: 6px;
    padding-bottom: 40px;
  }
`;

export const ServicesMain = styled.div`
  display: flex;
  margin: 0;

  @media(max-width: 375px){
    display: block;
  }
`;
export const ServiceHead = styled.h1`
  font-style: normal;
  width: 429px;
  font-weight: 600;
  font-size: 36px;
  line-height: 37px;
  color: #282523;
  padding: 0px 0px 20px 7%;

  @media (max-width: 375px) {
    width: auto;
    font-size: 23px;
    margin: 0;
    padding: 1% 3%;
  }
`;
export const ServiceImgSec = styled.div``;

export const ServiceImg = styled.img`
  @media (max-width: 689px) {
    width: 100%;
    
  }

  @media(max-width: 375px){
    padding: 5% 4%;
    width: 90%;
    object-fit: contain;
  }
`;

export const SliderCont = styled.div`
  display: flex;
`;

export const CarouselMain = styled.div`
  background: red;
  height: 50px;
  width: 294px;
  height: 372px;
  background: #f9f9f9;
  box-shadow: 4px 4px 22px rgba(80, 71, 71, 0.25);
  border-radius: 18px;
  padding: 11px;

  &:hover {
    transition: 0.5s ease-in-out;
    transform: scale(1.001, 1.001);
  }

  @media (max-width: 1322px) {
    width: 274px;
    height: 372px;
  }

  @media (max-width: 1254px) {
    width: 274px;
    height: 372px;
  }

  @media (max-width: 1158px) {
    width: 85%;
    height: 372px;
  }
`;

export const SliderSection = styled.div`
  width: 60%;
  position: absolute;
  right: 0.3rem;
  bottom: -2rem;

  @media (max-width: 1254px) {
    width: 65%;
  }
  @media (max-width: 1158px) {
    width: 66%;
  }
  @media (max-width: 1116px) {
    width: 68%;
  }
  @media (max-width: 1116px) {
    width: 70%;
  }
  @media (max-width: 791px) {
    width: 80%;
  }
  @media (max-width: 773px) {
    width: 85%;
  }
  @media (max-width: 689px) {
    width: 90%;
  }
  @media (max-width: 654px) {
    width: 100%;
    left: 0;
  }
  @media (max-width: 571px) {
    width: 100%;
    left: 0;
    bottom: -3rem;
  }
  @media (max-width: 375px) {
    width: 100%;
    left: 0;
    top: 0;
    /* bottom: -10rem; */
    position: relative;
  }
  @media (max-width: 300px) {
    width: 100%;
    left: 0;
    top: 0;
    /* bottom: -10rem; */
    position: relative;
  }
  `;

export const SlideLogo = styled.img`
  transition: 2s;
  &hover {
    transform: scale(1.1);
  }
`;

export const SlideHead = styled.h2`
  width: 151px;
  font-style: 500;
  font-weight: 600;
  font-size: 24px;
  line-height: 115%;

  @media (max-width: 949px) {
    font-size: 20px;
  }
`;
export const SlidePara = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #2f2a2a;

  @media (max-width: 1322px) {
    font-size: 15px;
    line-height: 20px;
  }
  @media (max-width: 949px) {
    font-size: 13px;
    line-height: 20px;
  }
`;

export const SlideSubHead = styled.h4`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;

  @media (max-width: 949px) {
    font-size: 13px;
    line-height: 20px;
  }
`;

export const SlideLink = styled.a`
  font-style: normal;
  font-size: 14px;
  color: #ef7b50;
  display: flex;
  align-items: center;
  gap: 2px;
  cursor: pointer;

  @media (max-width: 949px) {
    font-size: 13px;
    line-height: 20px;
  }
`;

export const BrandIcon = styled.img``;

export const SlideLastHead = styled.h5`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #2f2a2a;

  @media (max-width: 949px) {
    font-size: 13px;
    line-height: 20px;
  }
`;
