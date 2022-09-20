import React, { useState } from "react";
import ServicePopup from "../../ServicesPopup/Main";

import {
  WordSection,
  WordMain,
  WordBgMain,
  WordBg,
  WordImg,
  WordMainHead,
  WordSpan,
  WordPara1,
  WordSpan1,
  WordPara2,
  WordButtons,
  WordBtn1,
  WordBtn2,
  WordHeadPara,
} from "./WordElements";

import img from "./images/img.png";
import bg from "./images/bg.png";

const Index = () => {

  const [openModel, setOpenModel] = useState(false);
  const handlePopup = () => {
    setOpenModel(!openModel);
  };
  return (
    <>
    {openModel && <ServicePopup />}
    <WordSection>
      <WordMain>
        <WordBgMain>
          <WordBg imgUrl={bg}>
            <WordImg src={img} />
          </WordBg>
        </WordBgMain>
        <WordHeadPara>
          <WordMainHead>
            <WordSpan>Oracle </WordSpan>
            Developer
          </WordMainHead>
          <WordPara1>
            <WordSpan1>L</WordSpan1>
            orem ipsum dolor sit amet, consectetur adipiscing elit. Nisi
            condimentum ultricies ornare sed. Tellus nibh urna velit elementum
            id suspendisse tellus, amet. Maecenas adipiscing sed semper tellus
            neque cras commodo, amet. Arcu, laoreet nunc, quis viverra iaculis
            scelerisque platea libero.
          </WordPara1>
          <WordPara2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi
            condimentum ultricies ornare sed. Tellus nibh urna velit elementum
            id suspendisse tellus, amet. Maecenas adipiscing sed semper tellus
            neque cras commodo, amet. Arcu, laoreet nunc, quis viverra iaculis
            scelerisque platea libero.
          </WordPara2>
          <WordButtons>
            <WordBtn1>Hire</WordBtn1>
            <WordBtn2 onClick={handlePopup}s>Order Now</WordBtn2>
          </WordButtons>
        </WordHeadPara>
      </WordMain>
    </WordSection>
    
    </>
  );
};

export default Index;
