import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const SearchContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  background: #0000009c;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  font-size: 1.5rem;
  transition: 0.6s ease-in-out;
  opacity: ${({ isOpenone }) => (isOpenone ? "100%" : "0")};
  right: ${({ isOpenone }) => (isOpenone ? "0" : "-100%")};
`;

export const Left = styled.div`
  width: 50%;

  @media (max-width: 768px){
    width: 20%;
  }
`;
export const Rigth = styled.div`
  width: 50%;
  height: 100vh;
  background: #2E2E36;
  padding-bottom:50px ;
  @media screen and (max-width:768px) {
      width: 80%;
  }
`;
export const SerachTop = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-around;
  padding: 25px 0;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
  z-index: 99;

  &:hover{
    color: #EF7B50
  }
`;
export const Icon = styled.div`
  top: 1rem;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  z-index: 99;
`;

export const SearchWrapper = styled.div`
  color: #fff;
  padding: 35px;
`;

export const Heading = styled.h1`
  color: #fff;
`;

export const Form = styled.form``;
export const KeyWord = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
`;

export const AllDropdowns = styled.div`
  display: grid;
  gap: 1px;
  grid-template-columns: repeat(2, 1fr);

  @media screen and(max-width: 580px) {
    grid-template-columns: repeat(1, 1fr);

    grid-template-rows: repeat(6, 1fr);
  }
`;

export const CityDrop = styled.div``;
export const Button = styled.button`
  background-color: #ef7b50;
  color: #fff;
  border-radius: 0;
  padding: 1rem 3rem;
  letter-spacing: 0.05rem;
  margin: 15px 0;
  transition: 0.5s ease-in-out;
  position: relative;
  z-index: 1;
  border: none;
  cursor: pointer;
  

  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    border: 1px solid #f9f9f9;
    transform-origin: center bottom;
    transform: scaleY(0);
    transition: transform 0.25s ease-in-out;
  }

  &:hover {
    cursor: pointer;
    color: #ef7b50;
    border: 1px solid #ef7b50;
  }

  &:hover::before {
    transform-origin: center top;
    transform: scaleY(1);
  }
`;
export const Option = styled.option`
  padding: 15px;
  border-radius: 5px;
  font-size: 1rem;

 
`;
export const Label = styled.label`
  font-size: 1rem;
  color: #fff;
  padding-bottom:10px ;
`;
export const Select = styled.select`
  width: 95%;
  padding: 15px;
  font-size: 1rem;
  border-radius: 5px;
  margin-top: 10px;
`;
export const Input = styled.input`
  padding: 15px;
  border-radius: 5px;
  font-size: 1rem;
  border: none;

  &:focus{
    border: none;
    border-color: #ef7b50;
  }
`;
