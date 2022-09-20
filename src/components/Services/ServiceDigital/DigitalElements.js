import styled from "styled-components";

export const DigiSection = styled.section`
  margin: 0;
  background: #e5e5e5;
  padding: 0% 0% 0% 7%;
`;
export const DigiMain = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3% 0;

  @media (max-width: 768px) {
    display: block;
  }
`;
export const DigiHeadPara = styled.div`
  width: 40%;


  @media (max-width: 768px) {
    width: 75%;
    margin-left: 5%;
    margin-top: 5%
  }
  @media (max-width: 375px) {
    width: 90%;
    margin-left: 2%;
    margin-top: 5%
  }

  

  @media (max-width: 1089px) {
    margin-top: 0;
  }
`;
export const DigiHead = styled.h2`
  font-weight: 600;
  margin: 0;
  font-size: 35px;
  padding-bottom: 3%;

  @media (max-width: 1117px) {
    padding-bottom: 2%;
  }

  @media (max-width: 961px) {
    font-size: 28px;
    /* padding-bottom: 5%; */
  }
  @media (max-width: 768px) {
    font-size: 25px;
    padding-bottom: 4%;
  }
`;
export const DigiSpan = styled.span`
  border-bottom: 4px solid #ef7b50;
`;
export const DigiPara1 = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
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
export const DigiSpan1 = styled.span`
  font-size: 52px;
  color: #ef7b50;

  @media (max-width: 1117px) {
    font-size: 45px;
  }
  @media (max-width: 961px) {
    font-size: 38px;
  }
`;
export const DigiPara2 = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
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
export const DigiButtons = styled.div`
  display: flex;
  gap: 5px;
`;
export const DigiBtn1 = styled.button`
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
    color: #fff;
    border-radius: 8px;
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
export const DigiBtn2 = styled.button`
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

// image

export const DigiBgMain = styled.div`
  width: 50%;
  margin-left: 0;
  @media (max-width: 768px) {
    width: 100%;
    padding-top: 15%;
  }
`;
export const DigiBg = styled.div`
  background-image: ${(props) => `url(${props.imgUrl})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position:right ;
  width: 100%;
  height: 100vh;
`;
export const DigiImg = styled.img`
  width: 90%;
  height: 80%;
  margin-left: -10%;
  /* margin-top: 10px; */
  margin-right: 0;
  margin-bottom: 15px;

  @media (max-width: 1197px) {
    height: 78%;
    margin-top: 0;
    margin-right: 0;
  }
  @media (max-width: 1089px) {
    height: 80%;
    margin-top: 0;
    margin-right: 0;
  }

  @media (max-width: 961px) {
    height: 80%;
    margin-right: 0;
  }
  @media (max-width: 768px) {
    width:75% ;
    height: 83%;
    padding-left: 15%;
    martin-top: -5%;

  }
  @media (max-width: 768px) {
    width:95% ;
    height: 72%;
    padding-left: 1%;
    martin-top: -5%;

  }
`;
