import React from "react";
import Hero from "../components/About/Hero/Index";
import AboutUs from "../components/About/AboutUs/Index";
import OurServices from '../components/About/OurServices/Services'
import PartnerUs from '../components/About/PartnerUs/Partner'

function About() {
  return (
    <>
      <div>
        <Hero />
        <AboutUs/>
        <OurServices/>
        <PartnerUs/>
      </div>
    </>
  );
}

export default About;
