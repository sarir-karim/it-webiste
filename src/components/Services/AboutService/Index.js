import React, { useState } from "react";
import ServicePopup from "../../ServicesPopup/Main";

import {
  ServiceSection,
  ServiceHead,
  SerMain,
  BgMain,
  SerBg,
  SerImg,
  SerHead,
  SerSpan,
  SerPara1,
  ParaSpan1,
  SerPara2,
  SerButtons,
  SerBtn1,
  SerBtn2,
  HeadPara,
} from "./ServiceElement";

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
      <ServiceSection>
        <ServiceHead>
          Software Development Services for your Innovative Ideas
        </ServiceHead>

        <SerMain>
          <BgMain>
            <SerBg imgUrl={bg}>
              <SerImg src={img} />
            </SerBg>
          </BgMain>
          <HeadPara>
            <SerHead>
              <SerSpan>Oracle </SerSpan>
              Developer
            </SerHead>
            <SerPara1>
              <ParaSpan1>L</ParaSpan1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi
              condimentum ultricies ornare sed. Tellus nibh urna velit elementum
              id suspendisse tellus, amet. Maecenas adipiscing sed semper tellus
              neque cras commodo, amet. Arcu, laoreet nunc, quis viverra iaculis
              scelerisque platea libero.
            </SerPara1>
            <SerPara2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi
              condimentum ultricies ornare sed. Tellus nibh urna velit elementum
              id suspendisse tellus, amet. Maecenas adipiscing sed semper tellus
              neque cras commodo, amet. Arcu, laoreet nunc, quis viverra iaculis
              scelerisque platea libero.
            </SerPara2>
            <SerButtons>
              <SerBtn1 >Hire</SerBtn1>
              <SerBtn2 onClick={handlePopup}>Order Now</SerBtn2>
            </SerButtons>
          </HeadPara>
        </SerMain>
      </ServiceSection>
    </>
  );
};

export default Index;
