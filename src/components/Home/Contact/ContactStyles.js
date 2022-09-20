import styled from "styled-components";

export const FifthSection = styled.section`
  max-width: 1440px;
  background: ${(props) => `url(${props.bgIMAGE})`};
  background-position: "center";
  background-size: "cover";
  background-repeat: "no-repeat";
  /* height: 90vh; */
  height: 556px;
`;

export const BgEffect = styled.div`
  background: rgba(4, 4, 4, 0.25);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media(max-width: 375px){
    text-align: center;
  }
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
  margin-bottom: 30px;

  @media(max-width: 375px){
    margin-bottom: 0px;
  }
`;

export const TagLine = styled.p`
  font-weight: 600;
  font-size: 42px;
  line-height: 51px;
  color: #ffffff;
  margin-bottom: 60px;

  @media(max-width: 375px){
    font-size:35px;
    width: 70%;
  }
`;

export const ContactBtn = styled.button`
  width: 179px;
  height: 59px;
  background: #ef7b50;
  border-radius: 6px;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #ffffff;
  border: none;
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
