import React,{useState} from "react";
import ServicePopup from "../../ServicesPopup/Main";

import {
  UiSection,
  UiHead,
  UiMain,
  UiBgMain,
  UiBg,
  UiImg,
  UiSpan,
  UiHeadPara,
  UiPara1,
  UiSpan1,
  UiPara2,
  UiButtons,
  UiBtn1,
  UiBtn2,
} from "./UiElements";

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
    <UiSection>
      <UiMain>
        <UiHeadPara>
          <UiHead>
            <UiSpan>UI/UX </UiSpan>
            Design
          </UiHead>
          <UiPara1>
            <UiSpan1>L</UiSpan1>
            orem ipsum dolor sit amet, consectetur adipiscing elit. Nisi
            condimentum ultricies ornare sed. Tellus nibh urna velit elementum
            id suspendisse tellus, amet. Maecenas adipiscing sed semper tellus
            neque cras commodo, amet. Arcu, laoreet nunc, quis viverra iaculis
            scelerisque platea libero.
          </UiPara1>
          <UiPara2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi
            condimentum ultricies ornare sed. Tellus nibh urna velit elementum
            id suspendisse tellus, amet. Maecenas adipiscing sed semper tellus
            neque cras commodo, amet. Arcu, laoreet nunc, quis viverra iaculis
            scelerisque platea libero.
          </UiPara2>
          <UiButtons>
            <UiBtn1>Hire</UiBtn1>
            <UiBtn2 onClick={handlePopup}>Order Now</UiBtn2>
          </UiButtons>
        </UiHeadPara>
        <UiBgMain>
          <UiBg imgUrl={bg}>
            <UiImg src={img} />
          </UiBg>
        </UiBgMain>
      </UiMain>
    </UiSection>
    
    </>
  );
};

export default Index;
