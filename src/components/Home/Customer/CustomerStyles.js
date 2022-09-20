import styled from "styled-components";
import { GrPrevious, GrNext } from "react-icons/gr";

export const FourthSection = styled.section`
  display: flex;
  width: 100%;
  height: 628px;

  @media (max-width: 768px) {
    display: block;
    height: auto;
  }
`;

export const LeftSide = styled.div`
  background: #2e2e36;
  width: 50%;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  /* flex: 1; */

  @media (max-width: 950px) {
    box-sizing: border-box;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;
export const LeftSideContent = styled.div`
  /* width: fit-content; */
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  /* flex: 1; */

  @media (max-width: 950px) {
    box-sizing: border-box;
    padding: 0 50px;
  }

  @media(max-width: 375px){
    margin-bottom: 3rem
  }
`;

export const LeftSideTitle = styled.h2`
  font-weight: 800;
  font-size: 48px;
  line-height: 64px;
  color: #e0e0e3;
  width: 445px;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    line-height: 40px;
    font-size: 35px;
  }

  @media (max-width: 950px) {
    font-weight: 700;
    font-size: 30px;
    line-height: 30px;
    /* max-width: 400px; */
  }
  @media (max-width: 960px) {
    width: 400px;
  }
  @media (max-width: 860px) {
    width: 350px;
  }
  @media (max-width: 768px) {
    font-size: 35px;
    line-height: 50px;
  }
`;

export const LeftSideDescription = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: #c7c9cf;
  width: 445px;

  @media (max-width: 1024px) {
    font-size: 17px;
    line-height: 25px;
    margin: 0;
  }
  @media (max-width: 960px) {
    width: 400px;
  }
  @media (max-width: 860px) {
    width: 350px;
  }
`;

export const RightSide = styled.div`
  background: #ef7b50;
  height: 628px;
  width: 100%;
  display: flex;
  align-items: center;
  flex: 1;
  /* border: 5px solid red; */
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    height: 500px;
  }
  @media (max-width: 375px) {
    width: 100%;
    height:500px;
  }
`;

export const TestimonialsContainer = styled.div`
  /* width: 36%; */
  width: 70%;
  height: 540px;
  background: #ffffff;
  box-shadow: 0px 30px 40px rgba(212, 217, 232, 0.2);
  padding: 20px 40px;
  /* border: 2px solid green; */
  position: absolute;

  @media (max-width: 768px) {
    width: 70%;
    height: 380px;
  }
  @media (max-width:375px) {
    width: 70%;
    height: auto;
  }
`;

export const QuoteIconContainer = styled.div`
  color: #c0eef0;
  font-size: 80px;
  display: flex;
  margin-left: auto;
  /* border: 1px solid red; */
  width: fit-content;

  @media (max-width: 768px) {
  font-size: 60px;
  }
`;

export const TestimonialContent = styled.div`
  /* margin: 0 auto; */
  @media (max-width: 768px) {
  font-size: 20px;
  height: 280px;
  }
  /* border: 1px solid red; */
`;

export const AboutClient = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  /* border: 1px solid green; */

  @media (max-width: 768px) {
  margin-bottom: -25px;
  
  }
`;

export const ClientPhotoContainer = styled.div`
  width: 56px;
  height: 56px;

  @media (max-width: 768px) {
    width: 46px;
  height: 46px;
}
`;

export const ClientPhoto = styled.img`
  width: 100%;
  height: 100%;
`;

export const ClientDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ClientName = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  color: #18191f;
  margin-bottom: -10px;

`;

export const ClientDesignation = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #474a57;
`;

export const ClientFeedback = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: #18191f;
  margin-top: 30px;

  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 860px) {
    font-size: 16px;
    line-height: 30px;
  }
  @media (max-width: 787px) {
    font-size: 16px;
    line-height: 27px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 35px;
  }
  @media (max-width: 768px) {
    width: 90%;
    height: 280px;
    font-size: 16px;
    line-height: 30px;
    
  }
 
`;

export const PreviousBtn = styled(GrPrevious)`
  color: black;
  padding: 10px;
  display: flex;
  position: absolute;
  font-size: 18px;
  bottom: -5rem;
  left: 25rem;
`;

export const NextBtn = styled(GrNext)`
  color: black;
  padding: 10px;
  display: flex;
  position: absolute;
  font-size: 18px;
  left: 29rem;
  bottom: -5rem;
`;
