import styled from "styled-components";

// Blog Elemnts styling

export const BlogSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 9% 0px 9% 40px;
  background: #e5e5e5;
  position: relative;

  @media (max-width: 768px) {
    display: block;
    margin: 0 auto;
  }

  @media (max-width: 995px) {
    padding: 9% 0px 9% 30px;
  }

  @media(max-width: 375px){
    padding: 2% 0px 5% 10px;
  }
`;

export const BlogMain = styled.div`
  width: 30%;
  padding-left: 4%;

  @media (max-width: 995px) {
    width: 35%;
    padding-left: 2%;
  }
  


  @media (max-width: 768px) {
    width: 70%;
    padding-left: 4%;
    padding-bottom: 20px;
  }
`;

export const BlogSubHead = styled.h4`
  font-weight: 600;
  font-size: 24px;
  line-height: 10px;
  color: #ef7b50;
  @media (max-width: 1039px) {
    font-size: 20px;
  }
`;

export const BlogMainHead = styled.h1`
  font-size: 36px;
  width: 360px;
  line-height: 49px;
  color: #282523;
  @media (max-width: 1039px) {
    font-size: 30px;
  }

  @media (max-width: 768px) {
    font-size: 34px;
  }
  @media (max-width: 375px) {
    font-size: 25px;
  }
`;

export const BlogFirstPara = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #2f2a2a;
  @media (max-width: 1039px) {
    font-size: 15px;
  }
  @media (max-width: 768px) {
    font-size: 16px
  }
`;

export const BlogSecondPara = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #2f2a2a;

  @media (max-width: 1039px) {
    font-size: 15px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const BlogSlide = styled.div`
  width: 60%;
  
  @media(max-width: 768px){
    width: 80%;
    padding-left: 35px
  }
`;

export const BlogCard = styled.div`
  width: 370px;
  height: 514px;
  background: #ffffff;
  box-shadow: 0px 0px 50px 2px rgba(177, 177, 177, 0.25);
  border-radius: 8px;

  @media (max-width: 1284px) {
    width: 350px;
  }
  @media (max-width: 1213px) {
    width: 340px;
  }
  @media (max-width: 1179px) {
    width: 90%;
    height: auto;
  }

  @media (max-width: 1039px) {
    width: 95%;
  }
  @media (max-width: 995px) {
    width: 80%;
  }
  /* @media (max-width: 800px) {
    width: 70%;
  } */

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CardDetail = styled.div`
  padding: 10px 20px;
`;

export const SlideImg = styled.img`
  width: 370px;

  @media (max-width: 1284px) {
    width: 350px;
  }
  @media (max-width: 1213px) {
    width: 340px;
  }
  @media (max-width: 1179px) {
    width: 100%;
  }
`;

export const SlideHead = styled.h3`
  font-weight: 600;
  font-size: 24px;
  width: 80%;

  @media (max-width: 1179px) {
    font-size: 20px;
  }
`;

export const SlidePara = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;

  @media (max-width: 1179px) {
    font-size: 13px;
  }
`;

export const SlideSecondPara = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  @media (max-width: 1179px) {
    font-size: 15px;
  }
`;

export const SlideLink = styled.a`
  font-weight: 500;
  font-size: 14px;
  color: #ef7b50;
  display: flex;
  align-items:center;
  gap: 5px;

  @media (max-width: 1179px) {
    font-size: 13px;
  }
`;

export const CarouselArrow = styled.img``;
