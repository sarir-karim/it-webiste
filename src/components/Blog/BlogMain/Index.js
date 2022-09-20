import React from "react";

import {
  MainSection,
  MainHead,
  MainProfileDetail,
  ProfilePic,
  ProfileName,
  ProfileCal,
  ProfileDate,
  MainBackground,
  MainPara,
  MainHead2,
  MainPara2,
  MainPara3,
  QuoteParaBg,
  QuotePara,
  QuoteImg,
  MainPara5,
  MainHead6,
  MainPara6,
  MainUl,
  MainLi,
  LiPara,
  Head7,
  MainSocial,
  Icon1,
  Hr,
  RelatedBlogs,
  BlogShare,
  RelatedHead,
  RelatedCards,
  RelatedCard,
  CardImg,
  CardHead,
  CardDetails,
  DetImg,
  DetName,
  DetCal,
  DetDate,
  DetTime,
  DetRead,
  CardPara,
  HeadSpan,
  CardsMain,
} from "./MainElements";
import quote from "./images/quote.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
import icon5 from "./images/icon5.png";

import profile from "./images/profile.png";
import cale from "./images/cale.png";
import Mainbg from "./images/Mainbg.png";
import Products from "./products/Product";

import blog1 from "./images/blog1.png";
import blog2 from "./images/blog2.png";
import clock from "./images/clock.png";
import share from "./images/share.png";

const Index = () => {
  return (
    <MainSection>
      <MainHead>Lorem ipsum dolor sit amet</MainHead>

      <MainProfileDetail>
        <ProfilePic src={profile} />
        <ProfileName>Jesica koli</ProfileName>
        <ProfileCal src={cale} />
        <ProfileDate>02 December 2022</ProfileDate>
      </MainProfileDetail>

      <MainBackground src={Mainbg} />
      <QuoteImg />
      <MainPara>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
        fermentum ultricies felis nec. Aliquam quisque id dictumst vitae cras
        faucibus fringilla amet in. Sed amet, lectus volutpat sed tincidunt. Ut
        non, felis, aenean odio interdum sit pellentesque.
      </MainPara>

      <MainHead2>Lorem ipsum dolor sit amet</MainHead2>
      <MainPara2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
        fermentum ultricies felis nec. Aliquam quisque id dictumst vitae cras
        faucibus fringilla amet in. Sed amet, lectus volutpat sed tincidunt. Ut
        non, felis, aenean odio interdum sit pellentesque.
      </MainPara2>
      <MainPara3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
        fermentum ultricies felis nec. Aliquam quisque id dictumst vitae cras
        faucibus fringilla amet in. Sed amet,
      </MainPara3>

      <QuoteParaBg>
        <QuoteImg src={quote} />
        <QuotePara>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
          fermentum ultricies felis nec. Aliquam quisque id dictumst vitae cras
          faucibus fringilla amet in. Sed amet, lectus volutpat sed tincidunt.
          Ut non, felis, aenean odio interdum sit pellentesque.
        </QuotePara>
      </QuoteParaBg>
      <MainPara5>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
        fermentum ultricies felis nec. Aliquam quisque id dictumst vitae cras
        faucibus fringilla amet in. Sed amet.
      </MainPara5>

      <MainHead6>Lorem ipsum dolor sit amet</MainHead6>
      <MainPara6>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
        fermentum ultricies felis nec. Aliquam quisque id dictumst vitae cras
        faucibus fringilla amet in. Sed amet.
      </MainPara6>
      <MainLi>
        1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
      </MainLi>
      <MainLi>
        2. Did you come here for something in particular or just general
        Riker-bashing
      </MainLi>
      <MainLi>
        3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
      </MainLi>
      <LiPara>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </LiPara>
      <Head7>Lorem ipsum dolor sit amet</Head7>
      <Products />

      <MainSocial>
        <Hr />
        <Icon1 src={icon1} />
        <Icon1 src={icon2} />
        <Icon1 src={icon3} />
        <Icon1 src={icon4} />
        <Icon1 src={icon5} />
        <Hr />
      </MainSocial>

      <RelatedBlogs>
        <BlogShare src={share} />
        <RelatedHead>
          <HeadSpan>See related</HeadSpan> posts
        </RelatedHead>

        <CardsMain>
          <RelatedCards>
            <RelatedCard>
              <CardImg src={blog1} />
              <CardHead>Lorem ipsum dolor sit amet Lorem ipsum.</CardHead>
              <CardDetails>
                <DetImg src={profile} />
                <DetName>Maira</DetName>
                <DetCal src={cale} />
                <DetDate>02 december 2022</DetDate>
                <DetTime src={clock} />
                <DetRead>3 min. to read</DetRead>
              </CardDetails>
              <CardPara>
                Lorem ipsum dolor sit amet, constetur adipiscing elit Viverra.
              </CardPara>
            </RelatedCard>
          </RelatedCards>
          <RelatedCards>
            <RelatedCard>
              <CardImg src={blog2} />
              <CardHead>Lorem ipsum dolor sit amet Lorem ipsum.</CardHead>
              <CardDetails>
                <DetImg src={profile} />
                <DetName>Maira</DetName>
                <DetCal src={cale} />
                <DetDate>02 december 2022</DetDate>
                <DetTime src={clock} />
                <DetRead>3 min. to read</DetRead>
              </CardDetails>
              <CardPara>
                Lorem ipsum dolor sit amet, constetur adipiscing elit Viverra.
              </CardPara>
            </RelatedCard>
          </RelatedCards>
        </CardsMain>
      </RelatedBlogs>
    </MainSection>
  );
};

export default Index;
