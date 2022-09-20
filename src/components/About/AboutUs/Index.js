import React from "react";

// importing images
import quote1 from "./images/quote1.png";
import quote2 from "./images/quote2.png";
// import photo from "./images/photo.png";
// import bg from "./images/bg.png";
import img from './images/img.png'

// importing elements from styled components

import {
  AboutUsSection,
  UsPara,
  Quote1,
  Quote2,
  UsMain,
  UsImage,
  UsBg,
  UsImg,
  UsParaMain,
  UsPara1,
  UsPara2,
} from "./AboutUsElement";

const Index = () => {
  return (
    <AboutUsSection>
      <UsPara>
        <Quote1 src={quote1} />
        We are IT Company, we help startups and enterprises triumph in today’s
        digital age. We partner with our clients to innovate, structure,
        develop, and deliver dynamic digital products.
        <Quote2 src={quote2} />
      </UsPara>

      <UsMain>
        <UsImage>
          <UsBg />
            <UsImg src={img}/>
        </UsImage>
        <UsParaMain>
          <UsPara1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi condimentum ultricies ornare sed. Tellus nibh urna velit elementum id suspendisse tellus, amet. Maecenas <br /> adipiscing sed semper tellus neque cras commodo, amet. Arcu, laoreet nunc, quis viverra iaculis scelerisque platea libero.</UsPara1>
          <UsPara2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi condimentum ultricies ornare sed. Tellus nibh urna velit elementum id suspendisse tellus, amet. Maecenas <br /> adipiscing sed semper tellus neque cras commodo, amet. Arcu, laoreet nunc, quis viverra iaculis scelerisque platea libero.</UsPara2>
        </UsParaMain>
      </UsMain>
    </AboutUsSection>
  );
};

export default Index;
