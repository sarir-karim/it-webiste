import styled from "styled-components";

export const ServicesSection = styled.section`
  width: 100%;
  /* height: auto; */
  background: #e5e5e5;
  /* margin-bottom: 80px; */

  /* border: 2px solid green; */
`;

export const ServicesContent = styled.div`
  width: fit-content;
  width: 100%;
  /* width: 1200px; */
  /* border: 1px solid red; */

`;
export const ServicesTitleContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 20px;
  margin-bottom: 40px;
  /* border: 1px solid red; */

  @media (max-width: 300px){
    margin-bottom: 1px;
  }
`;

export const ServicesTitle = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 48px;
  color: #000000;

  @media (max-width: 300px){
    font-size: 1.2rem;
  }
`;

export const ServicesArrowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */

  @media (max-width: 300px){
    margin-left: -10px;
  }
`;
export const Ellipse = styled.img`
  position: relative;

  @media (max-width: 300px){
    width: 30px;
    height: 30px;
  }
`;

export const RightArrow = styled.img`
  position: absolute;

  @media (max-width: 300px){
    width: 20px;
    /* height: 25px; */
  }
`;

export const ServicesImagecontainer = styled.div`
  background: ${(props) => `url(${props.BgIMG})`};
  object-fit: contain;
  background-size: cover;
  width: 90%;
  height: 50vh;
  margin: 0 auto;
  /* padding: 0 5px; */
  background-repeat: no-repeat;
  /* border: 2px solid blue; */
`;

export const BgColor = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(54, 54, 54, 0.14);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ServicesDescription = styled.p`
  width: 742px;
  /* width: 80%; */
  height: 168px;
  font-weight: 600;
  font-size: 3.5rem;
  /* font-size: 56px; */
  line-height: 84px;
  text-align: center;
  color: #ffffff;
  /* border: 1px solid yellow; */


  @media (max-width: 800px){
  font-size: 3rem;
  line-height: 74px;
  }
  @media (max-width: 700px){
  font-size: 2.8rem;
  line-height: 64px;
  }
  @media (max-width: 600px){
  font-size: 2.6rem;
  line-height: 54px;
  }
  @media (max-width: 650px){
  font-size: 2.6rem;
  line-height: 54px;
  }
  @media (max-width: 590px){
    padding-top: 30px;
  font-size: 2.3rem;
  line-height: 44px;
  }
  @media (max-width: 530px){
  font-size: 2.2rem;
  line-height: 44px;
  }
  @media (max-width: 500px){
  font-size: 2.0rem;
  line-height: 44px;
  }
  @media (max-width: 450px){
    padding-top: 40px;
  font-size: 1.8rem;
  line-height: 38px;
  }
  @media (max-width: 400px){
  font-size: 1.6rem;
  line-height: 34px;
  }
  @media (max-width: 350px){
    padding-top: 60px;
  font-size: 1.4rem;
  line-height: 34px;
  }
  @media (max-width: 300px){
  font-size: 1.3rem;
  line-height: 34px;
  }

  /* width: 680px;
  height: 168px;
  font-weight: 600;
  font-size: 56px;
  line-height: 84px;
  color: #ffffff;
  text-align: center; */
`;
