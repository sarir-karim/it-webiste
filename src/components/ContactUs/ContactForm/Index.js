import React from "react";
import icon1 from './images/icon.png'
import icon2 from './images/icon1.png'
import icon3 from './images/icon2.png'
import {
  FormContainer,
  FormMain,
  FormEle,
  FormLabel,
  FormInput,
  FormTextArea,
  SubmitBtn,
  FormLabelMs,
  AddressMain,
  LocationMain,
  LocIcon,
  LocationText,
  EmailMain,
  EmailIcon,
  EmailText,
  PhoneMain,
  PhoneIcon,
  PhoneText,
  FormHead
} from "./FormElements";

const Index = () => {
  return (
    <FormContainer>

      <FormMain>
        <FormHead>Leave Us a message</FormHead>
        <FormEle>
          <FormLabel>Name</FormLabel>
          <FormInput placeholder="Enter your Name" />
        </FormEle>
        <FormEle>
          <FormLabel>Email</FormLabel>
          <FormInput placeholder="Enter your Email" />
        </FormEle>
        <FormEle>
          <FormLabel>Phone Number</FormLabel>
          <FormInput placeholder="Enter your Phone Number" />
        </FormEle>
        <FormEle>
          <FormLabelMs>Message</FormLabelMs>
          <FormTextArea placeholder="Enter your Message" />
        </FormEle>

        <SubmitBtn>Submit</SubmitBtn>
      </FormMain>
      <AddressMain>
        <LocationMain>
          <LocIcon src={icon1}/>
          <LocationText>Plot 1A, Road 3, Ikota Villa, Lekki Lagos</LocationText>
        </LocationMain>
        <LocationMain>
          <EmailIcon src={icon2}/>
          <EmailText>info@24discovery.com.ng</EmailText>
        </LocationMain>
        <LocationMain>
          <PhoneIcon src={icon3}/>
          <PhoneText>0903 398 0660</PhoneText>
        </LocationMain>

        <iframe className="ifram"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
          
          frameBorder="0"
          style={{ border: 0, borderRadius: "12px", }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        />
      </AddressMain>
    </FormContainer>
  );
};

export default Index;
