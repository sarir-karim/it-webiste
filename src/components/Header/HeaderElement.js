import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import { FaUserAlt as User } from "react-icons/fa";

export const Header = styled.section`
  /* padding-top: 7%; */
  background: #2e2e36;
  padding: 2% 7%;
  position: sticky;
  top: 0;

  z-index: 999;
  height: ${(props) => (props.click ? "100vh" : "5vh")};

  @media (max-width: 375px) {
    height: ${(props) => (props.click ? "100vh" : "5vh")};
  }
`;

export const HeaderEle = styled.div`
  /* padding: 4% 7% 0% 4%; */
  background: #2e2e36;
  opacity: 0.6;
  /* padding: 0 7%;
  position: sticky;
  top: 0;
  z-index:999; */
`;
export const FirstEle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const FirstUl = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;
  gap: 50px;

  @media (max-width: 1024px) {
    gap: 30px;
  }
  @media (max-width: 874px) {
    gap: 20px;
  }
`;
export const NavLink = styled(Link)`
  list-style: none;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  position: relative;
  margin-bottom: 5px;
  white-space: nowrap;

  &:focus {
    color: #ef7b50;
  }
  /* &:nth-child(2) {
    color: #ef7b50;
  } */

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #ef7b50;
    transform-origin: center;
    transform: translate(-50%, 0) scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover::before {
    transform: translate(-50%, 0) scaleX(1);
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: (translate(-100%, 75%));
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const LiImg = styled.img`
  cursor: ponter;
  @media (max-width: 874px) {
    width: 30px;
  }
`;
export const SecUl = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 30px;
`;

export const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.6;
  border: 1px solid #ffffff;
  border-radius: 8px;
  padding: 5px 10px;
  color: #fff;
  border-radius: 10px;

  &:hover {
    background-color: #ef7b50;
  }
`;

export const IconEle = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

export const ExtendedNavbar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center !important;
  gap: 40px;
  padding-top: 30px;
  transition: 5s ease-in-out;
  font-size: 20px;
  background-color: #2e2e36;
  opacity: 0.9;
`;

export const FaUserAlt = styled(User)`
  color: #fff;
  cursor: pointer;
  font-size: 20px;
`;

export const NavLinkExtend = styled(Link)`
  list-style: none;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  position: relative;
  margin-bottom: 5px;
  white-space: nowrap;

  &:focus {
    color: #ef7b50;
  }

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #ef7b50;
    transform-origin: center;
    transform: translate(-50%, 0) scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover::before {
    transform: translate(-50%, 0) scaleX(1);
  }
`;
