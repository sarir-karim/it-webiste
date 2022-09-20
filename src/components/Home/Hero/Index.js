import React from "react";
import Herobg from "./images/herobg.png";
import sms from "./images/sms.png";
import arrow from "./images/arrow.png";
import {
  HeroSection,
  HeroOne,
  HeroHead,
  SubHead,
  MainHead,
  SubHeadTwo,
  HeadButtons,
  ButtonOne,
  BtnIcon,
  ButtonTwo,
  BtnIconTwo,
  HeadPara,
  HeroTwo,
  HeroTwoImg,
  HeroTwoIcon,
} from "./HeroElements";
const Index = () => {
  return (
    <HeroSection>
      <HeroOne>
        <HeroHead>
          <SubHead>We Provide outsourced</SubHead>
          <MainHead>IT Services</MainHead>
          <SubHeadTwo>For start-ups & mid sized Companies</SubHeadTwo>

          <HeadButtons>
            <ButtonOne>
              Learn more
              <BtnIcon src={arrow} alt="" />
            </ButtonOne>
            <ButtonTwo>
              Get in touch
              <BtnIconTwo src={arrow} alt="" />
            </ButtonTwo>
          </HeadButtons>
        </HeroHead>
        <HeadPara>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
          egestas elit diam etiam sit in consectetur nisl. Ultrices penatibus in
          orci ac ant.
        </HeadPara>
      </HeroOne>
      <HeroTwo>
        <HeroTwoImg src={Herobg} alt="" />
        <HeroTwoIcon src={sms} alt="" />
      </HeroTwo>
    </HeroSection>
  );
};

export default Index;
