import React from "react";
import whoBg from "./images/whoBg.png";
import who from "./images/whoWe.png";
import play from './images/play.png'

import {
  WhoSection,
  WhoText,
  WhoSubText,
  WhoMainText,
  WhoPara,
  WhoPara2,
  WhoButtons,
  Button,
  BtnText,
  WhoImage,
  WhoBg,
  Img,
} from "./WhoElement";

const Index = () => {
  return (
    <WhoSection>
      <WhoText>
        <WhoSubText>Who we are</WhoSubText>
        <WhoMainText>Custom IT solutions for your business</WhoMainText>
        <WhoPara>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
          egestas elit diam etiam sit in consectetur nisl. Ultrices penatibus in
          orci ac ant.
        </WhoPara>
        <WhoPara2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
          egestas elit diam etiam sit in consectetur nisl. Ultrices penatibus in
          orci ac ant.
        </WhoPara2>
        <WhoButtons>
          <Button src={play}/>
          <BtnText>See how we work</BtnText>
        </WhoButtons>
      </WhoText>
      <WhoImage >
        <WhoBg imgUrl={who}>
        <Img src={whoBg} alt="who" />
        </WhoBg>
      </WhoImage>
    </WhoSection>
  );
};

export default Index;
