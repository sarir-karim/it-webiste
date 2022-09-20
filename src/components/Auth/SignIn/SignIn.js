import React from "react";
import LoginBg from "../AuthAssets/Bert.png";
import GoogleIcon from "../AuthAssets/Google.png";
import TwitterIcon from "../AuthAssets/Twitter.png";
import {
  SignInWrapper,
  LeftSide,
  LeftSideContent,
  SignUpBtn,
  RightSide,
  RightSideContent,
  SignInText,
  GoogleBtn,
  TwitterBtn,
  LineWrapper,
  Line,
  EmailLabel,
  EmailInput,
  PasswordLabel,
  PasswordInput,
  ForgotPswrdText,
  SignInBtn,
  
} from "./SignInStyles";

const SignIn = () => {
  return (
    <>
      <SignInWrapper>
        <LeftSide BgIMG={LoginBg}>
          <LeftSideContent>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Morbi
            lobortis maximus nunc, ac rhoncus odio
            congue quis. Sed ac semper orci, eu
            porttitor lacus.
            <SignUpBtn to="/signup">Signup</SignUpBtn>
          </LeftSideContent>
        </LeftSide>

        <RightSide>
          <RightSideContent>
            <SignInText>Sign In</SignInText>
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
            <EmailLabel>User Name or Email Address</EmailLabel>
            <EmailInput type="email" />
            <PasswordLabel>Your Password</PasswordLabel>
            <PasswordInput type="password" />

            <ForgotPswrdText>Forgot your password?</ForgotPswrdText>

            <SignInBtn>Sign In</SignInBtn>
          </RightSideContent>
        </RightSide>
      </SignInWrapper>
    </>
  );
};

export default SignIn;
