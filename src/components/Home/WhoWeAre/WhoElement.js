import styled from "styled-components";
import { keyframes } from "styled-components";

export const WhoSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  padding: 10rem 30px 30px 10px;
  background: #e5e5e5;
  align-items: center;

  @media (max-width: 768px) {
    display: block;
    padding: 5rem 6px 0px 60px;
  }

  @media (max-width: 375px) {
    padding: 3% 5px 0px 5%;
  }
  @media (max-width: 300px) {
    padding: 3% 5px 0px 5%;
  }
`;
export const WhoText = styled.div`
  width: 29%;
  @media (max-width: 1145px) {
    width: 40%;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const WhoSubText = styled.h3`
  font-weight: 600;
  font-size: 24px;
  color: #ef7b50;
`;
export const WhoMainText = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 39px;

  @media (max-width: 820px) {
    font-size: 26px;
  }
`;
export const WhoPara = styled.p`
  font-weight: 400;
  font-size: 16px;
  @media (max-width: 820px) {
    font-size: 14px;
  }
`;
export const WhoPara2 = styled.p`
  font-weight: 400;
  font-size: 16px;
  @media (max-width: 820px) {
    font-size: 14px;
  }
`;

const imageanimation = keyframes`
    0%,100%{
        transform: scale(1);
    }
    50%{
        transform: scale(0.9);
    }
`;
export const WhoButtons = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;
export const Button = styled.img`
  cursor: pointer;
`;

export const BtnText = styled.p`
  margin-left: 10px;
`;

export const WhoImage = styled.div`
  width: 52.5%;

  @media (max-width: 768px) {
    width: 80%;
    margin-top: 30px;
  }
`;

export const WhoBg = styled.div`
  background-size: contain;
  background: ${(props) => `url(${props.imgUrl})`};
  background-repeat: no-repeat;
  background-size: cover; 
  background-position: left ;
  height: 531.74px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const Img = styled.img`
  width: 498px;
  height: 433px;
  margin-left: 4rem;
  margin-top: 3rem;
  animation-name: ${imageanimation};
  animation-duration: 6s;
  animation-iteration-count: infinite;

  @media (max-width: 1229px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 375px) {
    margin-left: 1rem;
    margin-top: 1rem;
    animation: none;
    height: 400px;
  }
  @media (max-width: 300px) {
    margin-left: 1rem;
    margin-top: 1rem;
    animation: none;
    height: 400px;
  }
`;
