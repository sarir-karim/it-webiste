import styled from "styled-components";

export const FooterSection = styled.div`
  max-width: 1440px;
  background: #2e2e36;
  font-family: sans-serif, "Poppins";
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 400px;

  @media (max-width: 768px) {
    display: block;
    padding: 4% 0 4% 8%;
  height: 800px;

  }
`;

export const FooterColOne = styled.div`
  color: #cecccc;
  width: 418px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const LogoWrapper = styled.div`
  margin-bottom: 20px;
  width: fit-content;
`;

export const LogoBoxOne = styled.img`
  position: absolute;
`;

export const LogoBoxTwo = styled.img`
  position: relative;
  top: 9px;
`;

export const LogoText = styled.img`
  position: relative;
  top: 0px;
  right: 25px;
`;

export const LeftSideDescription = styled.p`
  margin-bottom: 20px;
  width: 90%;
`;

export const ConnectText = styled.p`
  margin-bottom: 20px;
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const SocialIcon = styled.div`
  color: #ef7b50;
  background: transparent;
  font-size: 25px;
  cursor: pointer;

  &:hover {
    color: #f3541a;
    transition: 0.3s 200ms ease-in;
    transform: rotate(360deg);
  }
`;

export const FooterColTwo = styled.div`
  display: flex;
  flex-direction: column;   
`;

export const ListHeader = styled.h4`
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
  color: #ef7b50;
  width: fit-content;
  margin-bottom: 20px;
`;


export const ListItem = styled.li`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 10px;
  color: #d9d9d9;
  list-style-type: none;
  cursor: pointer;
  width: fit-content;
  border-bottom: 1px solid transparent;
  transition: 0.5 all ease-in-out;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #ef7b50;
    transform-origin: center;
    transform: translate(-50%, 0) scaleX(0);
    transition: transform 0.3s ease-in-out;
  }
  
  &:hover::before {
    transform: translate(-50%, 0) scaleX(1);
  }
`;



export const FooterColThree = styled.div`
  display: flex;
  flex-direction: column;
`;
