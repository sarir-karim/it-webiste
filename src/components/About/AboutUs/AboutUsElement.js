import styled from "styled-components";

export const AboutUsSection = styled.section`
  padding: 3% 10%;
  background: #e5e5e5;

  @media (max-width: 950px) {
    padding: 3% 6%;
  }

  @media (max-width: 768px) {

    padding: 3% 0% 3% 7%;
  }
`;
export const UsPara = styled.p`
  font-size: 30px;
  line-height: 40px;
  color: #242121;
  position: relative;
  padding: 5px 25px;
  width: 86%;
  @media (max-width: 1024px) {
    font-size: 25px;
  }
  @media (max-width: 820px) {
    font-size: 20px;
  }
  @media (max-width: 820px) {
    font-size: 18px;
  }

  
`;
export const Quote1 = styled.img`
  position: absolute;
  top: 0;
  left: 0;
`;
export const Quote2 = styled.img`
  position: absolute;
  bottom: 1.5rem;
`;
export const UsMain = styled.div`
  display: flex;
  padding: 4% 0%;
  gap: 20px;
  height: 100vh;
  align-items: start;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    height: auto;
  }
`;

export const UsImage = styled.div`
  width: 60%;
  @media (max-width: 768px) {
    width: 85%;
  }
`;
export const UsBg = styled.img``;
export const UsImg = styled.img`
  width: 95%;
  height: 550px;
  @media (max-width: 1024px) {
    width: 96%;
  }
  @media (max-width: 820px) {
    width: 96%;
    height: 500px;
  }


`;
export const UsParaMain = styled.div`
  width: 50%;
  padding-top: 40px;

  @media (max-width: 1024px) {
    width: 55%;
  }

  @media (max-width: 768px) {
    padding-top: 20px;
    width: 80%;
  }
`;
export const UsPara1 = styled.p`
  margin-top: 40px;
  font-size: 18px;
  line-height: 27px;
  color: #2f2a2a;
  @media (max-width: 1024px) {
    font-size: 15px;
  }
  @media (max-width: 820px) {
    font-size: 14px;
    line-height: 25px;
  }
  @media( max-width: 768px){
    font-size: 16px;

  }
`;
export const UsPara2 = styled.p`
  margin-top: 3rem;
  font-size: 18px;
  line-height: 27px;
  color: #2f2a2a;
  @media (max-width: 1024px) {
    font-size: 15px;
    margin-top: 1.5rem;
  }
  @media (max-width: 820px) {
    font-size: 14px;
    margin-top: 1rem;
    line-height: 25px;
  }
  @media( max-width: 768px){
    font-size: 16px;
  }
`;
