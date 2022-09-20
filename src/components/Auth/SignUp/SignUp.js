import React from "react";
import LoginBg from "../AuthAssets/Bert.png";
import GoogleIcon from "../AuthAssets/Google.png";
import TwitterIcon from "../AuthAssets/Twitter.png";
import {
  SignUpWrapper,
  LeftSide,
  LeftSideContent,
  SignUpBtn,
  RightSide,
  RightSideContent,
  SignUpText,
  GoogleBtn,
  TwitterBtn,
  LineWrapper,
  Line,
  NameLabel,
  NameInput,
  EmailLabel,
  EmailInput,
  PasswordLabel,
  PasswordInput,
  CnfrmPasswordLabel,
  CnfrmPasswordInput,
  SignInBtn,
} from "./SignUpStyles";

const SignUp = () => {
  return (
    <>
      <SignUpWrapper>
        <LeftSide>
          <LeftSideContent>
            <SignUpText>Sign Up</SignUpText>
            <GoogleBtn>
              <img src={GoogleIcon} alt="Google Icon" /> Continue with Google
            </GoogleBtn>
            <TwitterBtn>
              <img src={TwitterIcon} alt="Twitter Icon" /> Continue with Twitter
            </TwitterBtn>
            <LineWrapper>
              <Line />
              OR
              <Line />
            </LineWrapper>
            <NameLabel>Name</NameLabel>
            <NameInput type="text" />
            <EmailLabel>Email</EmailLabel>
            <EmailInput type="email" />
            <PasswordLabel>Password</PasswordLabel>
            <PasswordInput type="password" />
            <CnfrmPasswordLabel>Confirm Password</CnfrmPasswordLabel>
            <CnfrmPasswordInput type="password" />

            <SignUpBtn>Sign Up</SignUpBtn>
          </LeftSideContent>
        </LeftSide>

        <RightSide BgIMG={LoginBg}>
          <RightSideContent>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit. Morbi
            <br />
            lobortis maximus nunc, ac rhoncus odio
            <br />
            congue quis. Sed ac semper orci, eu
            <br />
            porttitor lacus.
            <SignInBtn to="/signin">Sign In</SignInBtn>
          </RightSideContent>
        </RightSide>
      </SignUpWrapper>
    </>
  );
};

export default SignUp;
