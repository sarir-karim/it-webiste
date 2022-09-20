import React from "react";
import Service from '../components/Services/Hero/Index'
import AboutService from '../components/Services/AboutService/Index'
import ServiceUi from '../components/Services/ServiceUi/Index'
import ServiceDev from '../components/Services/ServiceDev/Index'
import ServiceDigi from '../components/Services/ServiceDigital/Index'
import ServiceWord from '../components/Services/ServiceWord/Index'

function Services() {
  return (
    <>
      <Service/>
      <AboutService/>
      <ServiceUi/>
      <ServiceDev/>
      <ServiceDigi/>
      <ServiceWord/>
    </>
  );
}

export default Services;