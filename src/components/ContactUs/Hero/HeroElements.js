import styled from "styled-components";

export const ContactContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 9.5% 10%;
  background: #2e2e36;
`;
export const ContactFirst = styled.div`
  width: 50%;
  @media (max-width: 1024px){
    width: 55%;
  }
  @media (max-width: 820px){
    width: 60%;
  }

  @media (max-width: 768px){
    width: 75%;
  }
`;
export const ContactHead = styled.h1`
  font-weight: 500;
  font-size: 48.6186px;
  color: #f8f8fa;
  margin: 0;
`;
export const ContactPara = styled.p`
  font-size: 16px;
  line-height: 24px;
  width: 70%;
  color: #f8f8fa;

  @media (max-width: 1024px) {
    width: 85%;
  }
  @media (max-width: 820px) {
    width: 95%;
  }
  @media (max-width: 820px) {
    width: 95%;
  }
`;

export const ContactImg = styled.img`
  margin-left: 5px;
`;
export const ContactButton = styled.button`
  width: 132px;
  height: 42px;
  background: #ef7b50;
  border-radius: 2px;
  font-size: 12px;
  color: #f8f8fa;
  border: none;
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

export const ContactSecond = styled.div``;
