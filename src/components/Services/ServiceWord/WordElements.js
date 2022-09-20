import styled from "styled-components";
import { keyframes } from "styled-components";

export const WordSection = styled.section`
  margin: 0;
  background: #e5e5e5;
  padding: 0% 4% 4% 0;
`;
export const WordMain = styled.div`
  display: flex;
  justify-content: space-between;
  /* padding: 3% 0; */

  @media (max-width: 768px) {
    display: block;
  }
`;

export const WordBg = styled.div`
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
export const WordImg = styled.img`
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
  @media (max-width: 768px) {
    width: 90%;
    height: 72%;
    animation: none;
  }
`;

export const WordBgMain = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 375px) {
    width: 100%;
  }
`;
export const WordHeadPara = styled.div`
  width: 40%;
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 75%;
    padding-left: 13%;
    padding-bottom: 8%;
  }
  @media (max-width: 375px) {
    width: 90%;
    padding-left: 9%;
    padding-bottom: 8%;
  }

  @media (max-width: 1089px) {
    margin-top: 0;
  }
`;
export const WordMainHead = styled.h2`
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
export const WordSpan = styled.span`
  border-bottom: 4px solid #ef7b50;
`;

export const WordPara1 = styled.span`
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
export const WordSpan1 = styled.span`
  font-size: 52px;
  color: #ef7b50;

  @media (max-width: 1117px) {
    font-size: 45px;
  }
  @media (max-width: 961px) {
    font-size: 38px;
  }
`;
export const WordPara2 = styled.p`
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
export const WordButtons = styled.div`
  display: flex;
  gap: 5px;
`;
export const WordBtn1 = styled.button`
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
export const WordBtn2 = styled.button`
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
