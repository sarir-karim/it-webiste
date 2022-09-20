import React from "react";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import firstSquare from "./Assets/firstSquare.png";
import secondSquare from "./Assets/secondSquare.png";
import IT from './Assets/IT.png';
import {
    FooterSection,
    FooterColOne,
    LogoWrapper,
    LogoBoxOne,
    LogoBoxTwo,
    LogoText,
    LeftSideDescription,
    ConnectText,
    SocialIconsContainer,
    SocialIcon,
    FooterColTwo,
    ListHeader,
    ListItem,
    FooterColThree
} from './FootStyles';



const Index = () => {
  return (
    <>
      <FooterSection>
        <FooterColOne>
          <LogoWrapper>
            <LogoBoxOne src={firstSquare} alt="logo1" />
            <LogoBoxTwo src={secondSquare} alt="logo2" />
            <LogoText src={IT} alt="logo3" />
          </LogoWrapper>
          <LeftSideDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            egestas elit diam etiam sit in consectetur nisl. Ultrices penatibus
            in orci ac ant.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </LeftSideDescription>
          <ConnectText>Connect with us</ConnectText>
          <SocialIconsContainer>
            <SocialIcon>
              <FaInstagramSquare />
            </SocialIcon>
            <SocialIcon>
              <FaFacebookSquare />
            </SocialIcon>
            <SocialIcon>
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon>
              <FaTwitterSquare />
            </SocialIcon>
          </SocialIconsContainer>
        </FooterColOne>
        <FooterColTwo>
          <ListHeader>Our Links</ListHeader>
          <ListItem>Home</ListItem>
          <ListItem>Company</ListItem>
          <ListItem>IT Sercices</ListItem>
          <ListItem>Product</ListItem>
          <ListItem>Contact</ListItem>
        </FooterColTwo>
        <FooterColThree>
          <ListHeader>Our Company</ListHeader>
          <ListItem>About Company</ListItem>
          <ListItem>Our Testimonials</ListItem>
          <ListItem>Latest News</ListItem>
          <ListItem>Our Mission</ListItem>
          <ListItem>Get a free quote</ListItem>
        </FooterColThree>
      </FooterSection>
    </>
  );
};

export default Index;
