import React, { useState } from "react";
import ServicePopup from "../../ServicesPopup/Main";

import {
  DigiSection,
  DigiHead,
  DigiMain,
  DigiBgMain,
  DigiBg,
  DigiImg,
  DigiSpan,
  DigiHeadPara,
  DigiPara1,
  DigiSpan1,
  DigiPara2,
  DigiButtons,
  DigiBtn1,
  DigiBtn2,
} from "./DigitalElements";

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
    <DigiSection>
      <DigiMain>
        <DigiHeadPara>
          <DigiHead>
            <DigiSpan>UI/UX </DigiSpan>
            Design
          </DigiHead>
          <DigiPara1>
            <DigiSpan1>L</DigiSpan1>
            orem ipsum dolor sit amet, consectetur adipiscing elit. Nisi
            condimentum ultricies ornare sed. Tellus nibh urna velit elementum
            id suspendisse tellus, amet. Maecenas adipiscing sed semper tellus
            neque cras commodo, amet. Arcu, laoreet nunc, quis viverra iaculis
            scelerisque platea libero.
          </DigiPara1>
          <DigiPara2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi
            condimentum ultricies ornare sed. Tellus nibh urna velit elementum
            id suspendisse tellus, amet. Maecenas adipiscing sed semper tellus
            neque cras commodo, amet. Arcu, laoreet nunc, quis viverra iaculis
            scelerisque platea libero.
          </DigiPara2>
          <DigiButtons>
            <DigiBtn1>Hire</DigiBtn1>
            <DigiBtn2 onClick={handlePopup}>Order Now</DigiBtn2>
          </DigiButtons>
        </DigiHeadPara>
        <DigiBgMain>
          <DigiBg imgUrl={bg}>
            <DigiImg src={img} />
          </DigiBg>
        </DigiBgMain>
      </DigiMain>
    </DigiSection>
    
    </>
  );
};

export default Index;
