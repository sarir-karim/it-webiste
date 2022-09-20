import React,{useState} from "react";
import ServicePopup from "../../ServicesPopup/Main";

import {
  DevSection,
  DevMain,
  DevBgMain,
  DevBg,
  DevImg,
  DevMainHead,
  DevSpan,
  DevPara1,
  DevSpan1,
  DevPara2,
  DevButtons,
  DevBtn1,
  DevBtn2,
  DevHeadPara,
} from "./DevElements";

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
    <DevSection>
      <DevMain>
        <DevBgMain>
          <DevBg imgUrl={bg}>
            <DevImg src={img} />
          </DevBg>
        </DevBgMain>
        <DevHeadPara>
          <DevMainHead>
            <DevSpan>Oracle </DevSpan>
            Developer
          </DevMainHead>
          <DevPara1>
            <DevSpan1>L</DevSpan1>
            orem ipsum dolor sit amet, consectetur adipiscing elit. Nisi
            condimentum ultricies ornare sed. Tellus nibh urna velit elementum
            id suspendisse tellus, amet. Maecenas adipiscing sed semper tellus
            neque cras commodo, amet. Arcu, laoreet nunc, quis viverra iaculis
            scelerisque platea libero.
          </DevPara1>
          <DevPara2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi
            condimentum ultricies ornare sed. Tellus nibh urna velit elementum
            id suspendisse tellus, amet. Maecenas adipiscing sed semper tellus
            neque cras commodo, amet. Arcu, laoreet nunc, quis viverra iaculis
            scelerisque platea libero.
          </DevPara2>
          <DevButtons>
            <DevBtn1>Hire</DevBtn1>
            <DevBtn2 onClick={handlePopup}>Order Now</DevBtn2>
          </DevButtons>
        </DevHeadPara>
      </DevMain>
    </DevSection>
    
    </>
  );
};

export default Index;
