import React from "react";
//importing images
import Arrow from "./images/arrow.png";

import {
  AboutContainer,
  AboutFirst,
  AboutHead,
  AboutPara,
  AboutButton,
  AboutSecond,
  ArrowImg,
} from "./AboutElements";

const Index = () => {
  return (
    <AboutContainer>
      <AboutFirst>
        <AboutHead>About Us</AboutHead>
        <AboutPara>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
          egestas elit diam etiam sit in consectetur nisl. Ultrices penatibus in
          orci ac ant.
        </AboutPara>
        <AboutButton>
          Discover more <ArrowImg src={Arrow} />
        </AboutButton>
      </AboutFirst>
      <AboutSecond></AboutSecond>
    </AboutContainer>
  );
};

export default Index;
