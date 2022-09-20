import styled from "styled-components";
import { HiOutlineArrowRight } from "react-icons/hi";

export const PartnerSection = styled.section`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e5e5e5;
  padding: 7% 0;
`;

export const PartnerColumnsContainer = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  gap: 5%;
  flex-wrap: wrap;
  padding: 0 2%;
  
  @media (max-width: 1117px) {
    justify-content: center;
  }
`;

export const LeftColumn = styled.div`
  width: 340px;
  padding: 10px 0 0 20px;
  box-sizing: border-box;

  @media (max-width: 1117px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 7%;
  }
`;

export const LeftColumnTitle = styled.h3`
  width: 234px;
  height: 108px;
  font-weight: 600;
  font-size: 36px;
  line-height: 54px;
  color: #242121;
  margin-bottom: 25px;

  @media (max-width: 1117px) {
    width: fit-content;
    margin-bottom: -20px;
  }
`;

export const LeftColumnDescription = styled.p`
  width: 300px;
  height: 72px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #2f2a2a;
  margin-bottom: 25px;

  @media (max-width: 1117px) {
    width: fit-content;
    margin-bottom: -10px;
  }
`;

export const ContactUsBtn = styled.button`
  width: 154px;
height: 49px;
  background: #ef7b50;
  border-radius: 2.33333px;
  border: none;
  color: #f8f8fa;
  font-weight: 500;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  

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
    border: 1px solid #ef7b50;
    transform-origin: center bottom;
    transform: scaleY(0);
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

export const BtnRightArrow = styled(HiOutlineArrowRight)`
  font-size: 18px;
`;

export const RightColumns = styled.div`
  width: 28.1%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media (max-width: 1117px) {
    width: 38%;
  }
  @media (max-width: 1000px) {
    width: 40%;
  }
  @media (max-width: 900px) {
    width: 42%;
  }
  @media (max-width: 800px) {
    width: 44%;
  }
  @media (max-width: 768px) {
    width: 46%;
  }
  @media (max-width: 700px) {
    width: 80%;
  }
  @media (max-width: 450px) {
    width: 90%;
  }
`;


export const Box = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  color: #000;
  background: #f7f7f7;
  border-radius: 8px;
  border: 1px solid #cccccc;
  cursor: pointer;

  &:hover {
    color: #fff;
    background: linear-gradient(
      296.25deg,
      #ef7b50 1.1%,
      rgba(239, 123, 80, 0.5) 100%
    );
  }

  @media (max-width: 1117px) {
    height: 270px;
  }
  @media (max-width: 450px) {
    height: 250px;
  }
  @media (max-width: 400px) {
    height: 230px;
  }
  @media (max-width: 350px) {
    height: 220px;
  }
  @media (max-width: 300px) {
    height: 200px;
  }
`;

export const BoxImgWrapper = styled.div`
  width: 75%;
  display: flex;
  justify-content: start;
  margin-bottom: 30px;
`;

export const BoxLogo = styled.img`
  width: 62px;
  height: 62px;

  @media (max-width: 1117px) {
    width: 70px;
    height: 70px;
  }
`;

export const BoxDescription = styled.p`
  width: 75%;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;