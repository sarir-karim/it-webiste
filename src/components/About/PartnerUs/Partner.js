import React from "react";
import Clock from "./PartnerAssets/Clock.png";
import DedicatedTeam from "./PartnerAssets/Team.png";
import DollarTag from "./PartnerAssets/DollarTag.png";
import {
  PartnerSection,
  PartnerColumnsContainer,
  LeftColumn,
  LeftColumnTitle,
  LeftColumnDescription,
  ContactUsBtn,
  BtnRightArrow,
  RightColumns,
  Box,
  BoxImgWrapper,
  BoxLogo,
  // ColumnThree,
  // DollarTagLogo,
  // TeamLogo,
  BoxDescription,
} from "./PartnerStyles";

const Partner = () => {
  return (
    <>
      <PartnerSection>
        <PartnerColumnsContainer>
          <LeftColumn>
            <LeftColumnTitle>Why Partner With Us</LeftColumnTitle>
            <LeftColumnDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi
              condimentum ultricies ornare sed. Tellus nibh urna velit.
            </LeftColumnDescription>
            <ContactUsBtn>
              Contact Us
              <BtnRightArrow />
            </ContactUsBtn>
          </LeftColumn>

          <RightColumns>
            <Box>
              <BoxImgWrapper>
                <BoxLogo src={DedicatedTeam} />
              </BoxImgWrapper>
              <BoxDescription>
                We are an end-to-end design and development company
              </BoxDescription>
            </Box>
            <Box>
              <BoxImgWrapper>
                <BoxLogo src={Clock} />
              </BoxImgWrapper>
              <BoxDescription>
                We work with clients in multiple time zones
              </BoxDescription>
            </Box>
          </RightColumns>

          <RightColumns>
            <Box>
              <BoxImgWrapper>
                <BoxLogo src={DollarTag} />
              </BoxImgWrapper>
              <BoxDescription>
                We offer competitive pricing and high-quality work
              </BoxDescription>
            </Box>
            <Box>
              <BoxImgWrapper>
                <BoxLogo src={DedicatedTeam} />
              </BoxImgWrapper>
              <BoxDescription>
                We assign you a dedicated team that assists you during the whole
                project cycle
              </BoxDescription>
            </Box>
          </RightColumns>
        </PartnerColumnsContainer>
      </PartnerSection>
    </>
  );
};

export default Partner;
