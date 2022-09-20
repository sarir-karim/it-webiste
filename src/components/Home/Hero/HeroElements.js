import styled from "styled-components";

// left side

export const HeroSection = styled.section`
  padding: 5% 0% 2% 7%;
  background: #2e2e36;
  display: flex;
  height: 95vh;

  @media (max-width: 900px) {
    padding-top: 40px;
  }
  @media (max-width: 800px) {
    padding-top: 40px;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    height: auto;
  }
  @media (max-width: 375px) {
    padding: 0% 0% 2% 1%;
  }
`;
export const HeroOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 930px) {
    justify-content: start;
    align-items: start;
    padding-top: 20px;
  }
`;
export const HeroHead = styled.div`
  @media (max-width: 768px) {
    width: 90%;
    justify-content: center;
    padding-top: 30px;
    padding-left: 20px;
  }
`;
export const SubHead = styled.h3`
  font-weight: 500;
  font-size: 18.9072px;
  color: #f8f8fa;
  letter-spacing: 2px;

  @media (max-width: 930px) {
    font-size: 15px;
  }
`;

export const MainHead = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 48.6186px;
  line-height: 12px;
  color: #ffff;
  @media (max-width: 930px) {
    font-size: 35px;
  }
`;
export const SubHeadTwo = styled.h3`
  font-weight: 500;
  font-size: 18.9072px;
  color: #f8f8fa;
  letter-spacing: 2px;
  @media (max-width: 930px) {
    font-size: 15px;
  }
`;
export const HeadButtons = styled.div`
  display: flex;
  gap: 10px;
  margin: 0 auto;
`;
export const ButtonOne = styled.button`
  padding: 15px 25px;
  background: #ef7b50;
  border-radius: 2px;
  border: none;
  outline: none;
  font-weight: 500;
  color: white;
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
    background-color: #2e2e36;
    border: 1px solid #f9f9f9;
    transform-origin: center bottom;
    transform: scaleY(0);
    transition: transform 0.25s ease-in-out;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover::before {
    transform-origin: center top;
    transform: scaleY(1);
  }
`;
export const BtnIcon = styled.img`
  margin-left: 10px;
  width: 10px;
  height: 8px;
`;
export const ButtonTwo = styled.button`
  padding: 15px 25px;
  border: 1px solid #f8f8fa;
  outline: none;
  font-size: 12px;
  color: white;
  background: transparent;
  cursor: pointer;
  z-index: 1;
  position: relative;

  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #ef7b50;
    transform-origin: center bottom;
    transform: scaleX(0);
    transition: transform 0.25s ease-in-out;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover::before {
    transform-origin: center top;
    transform: scaleY(1);
  }
`;
export const BtnIconTwo = styled.img`
  margin-left: 10px;
  width: 10px;
  height: 8px;
`;
export const HeadPara = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #f8f8fa;
  width: 70%;

  @media (max-width: 930px) {
    margin-top: 7rem;
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
    padding-left: 20px;
  }
`;

// rigth side
export const HeroTwo = styled.div`
  position: relative;
`;
export const HeroTwoImg = styled.img`
  @media (max-width: 1240px) {
    width: 550px;
  }
  @media (max-width: 1024px) {
    width: 498px;
  }
  @media (max-width: 979px) {
    width: 470px;
  }
  @media (max-width: 889px) {
    width: 400px;
  }
  @media (max-width: 768px) {
    width: 90%;
    margin-left: 20px;
  }
`;
export const HeroTwoIcon = styled.img`
  position: absolute;
  right: 8rem;
  bottom: -3rem;
  border: 2px solid #2e2e36;
  cursor: pointer;
  border-radius: 100%;

  @media (max-width: 1024px) {
    right: 8rem;
    bottom: 3rem;
  }

  @media (max-width: 1240px) {
    right: 8rem;
    bottom: 1rem;
  }

  @media (max-width: 979px) {
    right: 8rem;
    bottom: 5rem;
  }

  @media (max-width: 889px) {
    right: 5rem;
    bottom: 8rem;
    width: 15%;
  }
`;
