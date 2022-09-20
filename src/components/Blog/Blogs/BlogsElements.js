import styled from "styled-components";
import {Link} from 'react-router-dom'

export const BlogsMain = styled.section`
  padding: 4% 5% 4% 10%;
 

  @media (max-width: 1163px) {
    width: 95%;
    padding: 4% 5% 4% 7%;
  }
`;
export const BlogsHead = styled.h4`
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 60px;

  @media (max-width: 1110px) {
    font-size: 30px;
  }
  @media (max-width: 768px) {
    text-align:center;
  }
`;
export const BlogsPara = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 29px;
  color: #6d7d8b;
  @media (max-width: 768px) {
    text-align:center;
  }
`;

export const BlogCardsMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-top: 5%;
  grid-row-gap: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const Card = styled.div`
  background: #ffffff;
  border: 1px solid #efefef;
  border-radius: 30px;
  width: 90%;
  height: auto;

  @media (max-width: 1163px) {
    width: 95%;
  }

  @media (max-width: 768px) {
    width: 70%;
    margin:  0 auto;
  }
  @media (max-width:680px) {
    width: 80%;
    margin:  0 auto;
  }
  @media (max-width:467px) {
    width: 100%;
    margin:  0 auto;
  }
`;
export const BlogImg = styled.img`
  width: 100%;
  background-size: cover;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
`;
export const BlogTitle = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  width: 80%;
  margin: 0;
  padding-left: 30px;
  padding-top: 10px;
`;
export const BlogText = styled.p`
  font-weight: 400;
  font-size: 14px;
  padding-left: 30px;
  width: 75%;
`;
export const BlogButton = styled(Link)`
  font-weight: 500;
  font-size: 14px;
  color: #ef7b50;
  display: flex;
  align-items: center;
  gap: 5px;
  background: transparent;
  cursor: pointer;
  line-height: 21px;
  border: none;
  text-decoration: none;
  padding-left: 30px;
  margin-bottom: 30px;
`;
export const AuthorDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-bottom: 20px;
  padding-left: 30px;
`;

export const Arrow = styled.img`
  width: 10px;
`;
export const AuthImg = styled.img`
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: 0.9s;
    box-shadow: 1px 10px 10px 10px solid black;
  }
`;
export const AuthName = styled.span`
  font-weight: 600;
  font-size: 12px;
  border-right: 1px solid grey;
  padding-right: 10px;
  cursor: pointer;
`;
export const AuthDate = styled.span`
  font-size: 12px;
  font-weight: 600;
`;
