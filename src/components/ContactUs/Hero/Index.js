import React from "react";
//importing images
import Arrow from "./img/arrow.png";

import {
  ContactContainer,
  ContactFirst,
  ContactHead,
  ContactPara,
  ContactButton,
  ContactSecond,
  ContactImg,
} from "./HeroElements";

const Index = () => {
  return (
    <ContactContainer>
      <ContactFirst>
        <ContactHead>Contact Us</ContactHead>
        <ContactPara>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
          egestas elit diam etiam sit in consectetur nisl. Ultrices penatibus in
          orci ac ant.
        </ContactPara>
        <ContactButton>
          Discover more <ContactImg src={Arrow} />
        </ContactButton>
      </ContactFirst>
      <ContactSecond></ContactSecond>
    </ContactContainer>
  );
};

export default Index;
