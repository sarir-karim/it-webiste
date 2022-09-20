import { NavLink as Link } from "react-router-dom";
import { BiSearch as SearchIcon } from "react-icons/bi";
import { FaAngleRight as rightIcon } from "react-icons/fa";

import styled from "styled-components";
export const NavContainer = styled.section`
  padding: 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 3px 25px rgba(163, 158, 158, 0.25);
`;
export const NavSecOne = styled.div``;
export const NavList = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 20px;
`;
export const NavLink = styled(Link)`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;
  color: #000;
  /* transition: 0.5s ease-in-out; */
  padding: 30px 0;
  &:active {
    /* transition: 0.5s ease-in-out; */
    border-bottom: 3px solid #ef7b50;
    color: #ef7b50;
  }
`;
export const FaAngleRight = styled(rightIcon)`
  font-weight: 200;
`;
export const NavPara = styled.p``;
export const NavListTwo = styled.div``;
export const NavInputs = styled.div`
  display: flex;
  align-items: center;
  background: #f2f2f2;
  opacity: 0.4;
  border: 1px solid #2d2626;
  border-radius: 8px;
  padding: 10px;
`;
export const Input = styled.input`
  border: none;
  background: #f2f2f2;

  @media(max-width: 768px){
    display: none;
  }

  &::placeholder {
    color: #000;
  }
  &:focus {
    outline: none;
  }
`;

export const BiSearch = styled(SearchIcon)`
  cursor: pointer;
`;
