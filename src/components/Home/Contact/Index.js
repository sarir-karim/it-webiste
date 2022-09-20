import React from 'react';
import BgIMG from './Assets/bgIMG.png';
import 
{
    FifthSection,
    BgEffect,
    Title,
    TagLine,
    ContactBtn
} from "./ContactStyles"

const Index = () => {
  return (
    <>
        <FifthSection bgIMAGE={BgIMG}>
            <BgEffect>
                <Title>We offer solutions for all companies</Title>
                <TagLine>Focus on your business</TagLine>
                <ContactBtn>Contact Us</ContactBtn>
            </BgEffect>
        </FifthSection>
    </>
  )
}

export default Index