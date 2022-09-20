import styled from "styled-components";
import { Link } from "react-router-dom";

export const SignInWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: linear-gradient(
    0deg,
    rgba(17, 17, 17, 0.25),
    rgba(17, 17, 17, 0.25)
  );
  width: 100%;
  height: 100vh;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const LeftSide = styled.div`
  width: 50%;
  height: auto;
  background-repeat: no-repeat;
  background: ${(props) => `url(${props.BgIMG})`};
  display: flex;
  justify-content: center;
  align-items: center;


  @media (max-width: 768px) {
    width: 100%;
    height: 90vh;
    padding: 20px 0;
  }
`;

export const LeftSideContent = styled.div`
  color: #fff;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 36px;
  letter-spacing: 1px;
  width: 80%;
  height: auto;

  @media (max-width: 1024px) {
    font-size: 1.4rem;
  }
`;
export const SignUpBtn = styled(Link)`
  width: 35%;
  height: 64px;
  border-radius: 32px;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 30px;
  border: 2px solid #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: #ef7b50;
    border: none;
    transition: 0.3s ease;
  }

  @media (max-width: 1024px) {
    font-size: 1.2rem;
    height: 54px;
  }
  @media (max-width: 768px) {
    height: 64px;
    width:  30%;
  }
`;

export const RightSide = styled.div`
  width: 50%;
  height: auto;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 20px 0;
  }
`;

export const RightSideContent = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const SignInText = styled.div`
  font-weight: 500;
  font-size: 2rem;
  line-height: 70px;

  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;
export const GoogleBtn = styled.div`
  width: 100%;
  height: 64px;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 30px;
  background: #ffffff;
  border: 1px solid #333333;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  &:hover {
    gap: 20px;
    transition: 0.4s ease;
  }

  @media (max-width: 1024px) {
    font-size: 1.2rem;
    height: 54px;
  }
`;
export const TwitterBtn = styled.div`
  width: 100%;
  height: 64px;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 30px;
  background: #ffffff;
  border: 1px solid #333333;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  &:hover {
    gap: 20px;
    transition: 0.4s ease;
  }

  @media (max-width: 1024px) {
    font-size: 1.2rem;
    height: 54px;
  }
`;
export const LineWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: #666666;
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 27px;
  margin: 20px 0 5px 0;
`;

export const Line = styled.div`
  width: 222.5px;
  height: 2px;
  border: none;
  background: rgba(102, 102, 102, 0.25);
`;

export const EmailLabel = styled.div`
  font-weight: 400;
  font-size: 1rem;
  line-height: 24px;
`;

export const EmailInput = styled.input`
  width: 100%;
  height: 56px;
  border: 1px solid rgba(102, 102, 102, 0.35);
  border-radius: 12px;
  padding: 0 20px;
  font-size: 1rem;
  letter-spacing: 2px;

  &:focus {
    outline: 1px solid #47acdf;
    border: none;
  }

  @media (max-width: 1024px) {
    height: 54px;
  }
`;

export const PasswordLabel = styled.div`
  font-weight: 400;
  font-size: 1rem;
  line-height: 24px;
`;

export const PasswordInput = styled.input`
  width: 100%;
  height: 56px;
  border: 1px solid rgba(102, 102, 102, 0.35);
  border-radius: 12px;
  padding: 0 20px;
  padding: 0 20px;
  font-size: 1rem;
  letter-spacing: 2px;

  &:focus {
    outline: 1px solid #47acdf;
    border: none;
  }

  @media (max-width: 1024px) {
    height: 54px;
  }
`;

export const ForgotPswrdText = styled.div`
  font-weight: 400;
  font-size: 1rem;
  line-height: 24px;
  text-align: right;
  text-decoration-line: underline;
  color: #111111;
  cursor: pointer;
`;

export const SignInBtn = styled.div`
  width: 35%;
  height: 64px;
  border-radius: 32px;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 30px;
  background: #ef7b50;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border: 2px solid rgba(102, 102, 102, 0.35);
    color: #666666;
    background: transparent;
    transition: 0.3s ease;
  }

  @media (max-width: 1024px) {
    height: 54px;
    font-size: 1.2rem;
  }
  @media (max-width: 768px) {
    height: 64px;
    width: 30%;
  }
`;
