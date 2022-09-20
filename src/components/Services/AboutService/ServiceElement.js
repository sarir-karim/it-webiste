import styled from "styled-components";
import { keyframes } from "styled-components";

export const ServiceSection = styled.section`
  margin: 0;
  background: #e5e5e5;
  padding: 5% 4% 0% 0;
`;
export const ServiceHead = styled.h2`
  margin: 0 auto;
  width: 45%;
  text-align: center;
  font-weight: 600;
  font-size: 36px;
  line-height: 50px;
  margin-bottom: 5%;
  color: #242121;

  @media (max-width: 1189px) {
    width: 50%;
  }
  @media (max-width: 1059px) {
    width: 55%;
    font-size: 30px;
  }
  @media (max-width: 817px) {
    width: 60%;
    font-size: 30px;
  }
  @media (max-width: 817px) {
    width: 65%;
    font-size: 25px;
  }

  @media (max-width: 375px) {
    width: 95%;
    font-size: 22px;
  }
`;
export const SerMain = styled.div`
  display: flex;
  justify-content: space-between;
  /* padding: 3% 0; */

  @media (max-width: 768px) {
    display: block;
  }
`;

export const SerBg = styled.div`
  background-image: ${(props) => `url(${props.imgUrl})`};
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

const imageanimation = keyframes`
    0%,100%{
        transform: scale(1);
    }
    50%{
        transform: scale(0.97);
    }
`;
export const SerImg = styled.img`
  width: 90%;
  height: 75%;
  margin-left: 19%;
  margin-top: 15px;
  animation-name: ${imageanimation};
  animation-duration: 6s;
  animation-iteration-count: infinite;

  @media (max-width: 1197px) {
    height: 78%;
    margin-top: 0;
  }
  @media (max-width: 1089px) {
    height: 80%;
    margin-top: 0;
  }

  @media (max-width: 961px) {
    height: 80%;
  }
  @media (max-width: 768px) {
    height: 83%;
  }
  @media (max-width: 375px) {
    height: 72%;
    width: 100%;
    margin-left: 19%;
    animation: none;
  }
`;

export const BgMain = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 375px) {
    width: 100%;
  }
`;
export const HeadPara = styled.div`
  width: 40%;
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 75%;
    padding-left: 13%;
    padding-bottom: 8%;
  }

  @media (max-width: 1089px) {
    margin-top: 0;
  }
  @media (max-width: 375px) {
    width: 90%;
    padding-left: 9%;
  }
`;
export const SerHead = styled.h2`
  font-weight: 600;
  margin: 0;
  font-size: 35px;
  padding-bottom: 3%;

  @media (max-width: 1117px) {
    padding-bottom: 2%;
  }

  @media (max-width: 961px) {
    font-size: 28px;
    padding-bottom: 5%;
  }
  @media (max-width: 768px) {
    font-size: 25px;
    padding-bottom: 4%;
  }
`;
export const SerSpan = styled.span`
  border-bottom: 4px solid #ef7b50;
`;

export const SerPara1 = styled.span`
  padding: 3% 0;
  @media (max-width: 961px) {
    font-size: 14.5px;
    padding: 4% 0;
    line-height: 24px;
  }
  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 24px;
  }
`;
export const ParaSpan1 = styled.span`
  font-size: 52px;
  color: #ef7b50;

  @media (max-width: 1117px) {
    font-size: 45px;
  }
  @media (max-width: 961px) {
    font-size: 38px;
  }
`;
export const SerPara2 = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #2f2a2a;

  @media (max-width: 1117px) {
    line-height: 20px;
    font-size: 15px;
    line-height: 25px;
  }

  @media (max-width: 961px) {
    font-size: 14.5px;
    line-height: 24px;
  }
  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 25px;
  }
`;
export const SerButtons = styled.div`
  display: flex;
  gap: 5px;
`;
export const SerBtn1 = styled.button`
  width: 141px;
  height: 53px;
  border: 1px solid #ef7b50;
  border-radius: 8px;
  color: #ef7b50;
  position: relative;
  z-index: 1;
  background: transparent;
  cursor: pointer;

  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #ef7b50;
    border-radius:8px ;
    color: #fff;
    border: 1px solid #f9f9f9;
    transform-origin: center bottom;
    transform: scaleY(0);
    transition: transform 0.25s ease-in-out;
  }

  &:hover {
    cursor: pointer;
    color: #fff;
  }

  &:hover::before {
    transform-origin: center top;
    transform: scaleY(1);
  }
`;
export const SerBtn2 = styled.button`
  width: 141px;
  height: 53px;
  border: none;
  background: #ef7b50;
  color: #fff;
  position: relative;
  z-index: 1;
  cursor: pointer;

  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #e5e5e5;
    color: #ef7b50;
    border: 1px solid #ef7b50;
    transform-origin: center bottom;
    transform: scaleX(0);
    transition: transform 0.25s ease-in-out;
  }

  &:hover {
    cursor: pointer;
    color: #ef7b50;
  }

  &:hover::before {
    transform-origin: center top;
    transform: scaleY(1);
  }
`;
