import styled from "styled-components";

export const FormContainer = styled.section`
  background: #eee;
  padding: 4% 0% 10% 10%;
  display: flex;
  gap: 8%;

  @media(max-width: 978px){
    padding: 4% 0% 10% 5%;
  }

  @media(max-width: 768px){
  display: block;
  padding: 4% 0% 10% 10%;
}
`;

export const FormHead = styled.span`
 font-weight: 400;
font-size: 20px;
margin-bottom: 10px;
/* line-height: 30px; */
`
export const FormMain = styled.div`
width: 30rem;
display: flex;
flex-direction: column;
gap: 30px;



@media(max-width: 1176px){
  width: 40%;
}

@media(max-width: 768px){
  width: 50%;
}
@media(max-width: 684px){
  width: 60%;
}
@media(max-width: 545px){
  width: 80%;
}


`;
export const FormEle = styled.div`
  position: relative;
  &:nth-child(3) {
    /* margin-bottom: 40px; */
  }
`;
export const FormLabel = styled.p`
  font-size: 14.8195px;
  line-height: 18px;
  position: absolute;
  top: -25px;
  font-weight: 800;
  color: #09003e;
  z-index: 1;
  background-color: #eee;
  left: 25px;
  padding: 0 8px;
`;
export const FormInput = styled.input`
  width: 100%  ;
  height: 48.16px;
  background-color: #eee;
  outline: none;
  border: 0.740973px solid #09003e;
  border-radius: 10px;
  padding-left: 30px;
  /* margin-top: 40px; */
  transition: 0.5s ease-in-out;

  &:focus {
    border: 0.740973px solid #3682F6;
    box-shadow: 1px 1px 1px 1px grey;
    transition: 0.5s ease-in-out;
  }
`;
export const FormTextArea = styled.textarea`
width: 95%;
  height: 131.89px;
  border: 0.740973px solid #09003e;
  background: #eee;
  border-radius: 10px;
  outline: none;
  padding: 20px 30px;
  transition: 0.5s ease-in-out;

  &:focus {
    border: 0.740973px solid #3682F6;
    box-shadow: 1px 1px 1px 1px grey;
    transition: 0.5s ease-in-out;
  }
`;

export const FormLabelMs = styled.p`
  font-size: 14.8195px;
  line-height: 18px;
  position: absolute;
  top: -25px;
  font-weight: 800;
  color: #09003e;
  z-index: 1;
  background-color: #eee;
  left: 25px;
  padding: 0 8px;
`;

export const SubmitBtn = styled.button`
  width: 132px;
  height: 42px;
  background: #ef7b50;
  border-radius: 2px;
  font-size: 12px;
  color: #f8f8fa;
  border: none;
  position: relative;
  z-index: 1;
  cursor: pointer;
  margin-top: 10ppx;

  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #eee;
    border: 1px solid #f9f9f9;
    transform-origin: center bottom;
    transform: scaleY(0);
    transition: transform 0.25s ease-in-out;
  }

  &:hover {
    cursor: pointer;
    color: #000;
    border: 2px solid black;
  }

  &:hover::before {
    transform-origin: center top;
    transform: scaleY(1);
  }
`;

// Address main

export const AddressMain = styled.div`
  margin-top: 5%;

  @media(max-width: 930px){
    /* width: 40% */
  }
`;
export const LocationMain = styled.div`
  margin-bottom: 50px;
  display: flex;
  gap: 20px;
  align-items: center;
`;
export const LocIcon = styled.img``;
export const LocationText = styled.span``;
export const EmailMain = styled.div``;
export const EmailIcon = styled.img``;
export const EmailText = styled.span``;
export const PhoneMain = styled.div``;
export const PhoneIcon = styled.img``;
export const PhoneText = styled.span``;
