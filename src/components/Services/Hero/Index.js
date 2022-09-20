import React from "react";
//importing images
import Arrow from "./images/arrow.png";

import {
  ServiceContainer,
  ServiceFirst,
  ServicePara,
  ServiceButton,
  ServiceHead,
  ServiceSecond,
  ArrowImg,
} from "./ServiceElement";

const Index = () => {
  return (
    <ServiceContainer>
      <ServiceFirst>
        <ServiceHead>Services</ServiceHead>
        <ServicePara>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis egestas elit diam etiam sit in consectetur nisl. Ultrices penatibus in orci ac ant.
        </ServicePara>
        <ServiceButton>
          Discover more <ArrowImg src={Arrow} />
        </ServiceButton>
      </ServiceFirst>
      <ServiceSecond></ServiceSecond>
    </ServiceContainer>
  );
};

export default Index;
