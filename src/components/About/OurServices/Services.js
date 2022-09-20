import React from "react";
import {
  ServicesSection,
  ServicesContent,
  ServicesTitleContainer,
  ServicesTitle,
  ServicesArrowContainer,
  Ellipse,
  RightArrow,
  ServicesImagecontainer,
  BgColor,
  ServicesDescription,
} from "./ServicesStyles";
import ServicesBg from "./ServicesAssets/ServicesBg.png";
import Circle from "./ServicesAssets/Ellipse.png";
import Arrow from "./ServicesAssets/Arrow.png";

const Services = () => {
  return (
    <>
      <ServicesSection>
        <ServicesContent>
          <ServicesTitleContainer>
            <ServicesTitle>View Our Services</ServicesTitle>
            <ServicesArrowContainer>
              <Ellipse src={Circle} />
              <RightArrow src={Arrow} />
            </ServicesArrowContainer>
          </ServicesTitleContainer>

          <ServicesImagecontainer BgIMG={ServicesBg} alt="image">
            <BgColor>
              <ServicesDescription>
                We are lean. we are agile.
                <br />
                we are here.
              </ServicesDescription>
            </BgColor>
          </ServicesImagecontainer>
        </ServicesContent>
      </ServicesSection>
    </>
  );
};

export default Services;
