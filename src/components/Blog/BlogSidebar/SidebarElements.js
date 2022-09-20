import styled from "styled-components";
import { FaBars } from "react-icons/fa";

import { GrFacebookOption as fb } from "react-icons/gr";
import { AiOutlineInstagram as ins } from "react-icons/ai";
import { AiOutlineTwitter as twi } from "react-icons/ai";

export const SidebarContainer = styled.section`
  padding-top: 2%;
`;

export const SidebarExtend = styled.div`
  width: 400px;
  padding: 2% 5%;
  background: #eeeeee;
  position: relative;

  @media (max-width: 1024px) {
    width: 250px;
  }
  @media (max-width: 803px) {
    width: 200px;
    padding: 2% 4%;
  }
  @media (max-width: 768px) {
    width: 300px;
    padding: 2% 4%;
    position: absolute;
    z-index: 999;
    transform: translateX(30deg);
    background: rgba(46, 46, 54, 0.9);
    transition: 2s;
  }
`;

export const BarsContainer = styled.div`
  background: red;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Bars = styled(FaBars)`
  display: none;

  @media (max-width: 768px) {
    display: block;
    color: #2e2e36;
    transition: 0.5s;
    font-size: 20px;
    /* right: 10rem; */
    /* transform: (translate(-100%, 75%)); */
    font-size: 1.8rem;
    cursor: pointer;

    &:hover {
      color: #ef7b50;
    }
  }
`;

export const SideHead = styled.h4`
  font-weight: 600;
  font-size: 21px;

  @media (max-width: 768px) {
    color: #fff;
  }
`;
export const SideProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const SidePicture = styled.img``;
export const ProfileDetails = styled.div``;
export const SideName = styled.h5`
  font-weight: 600;
  font-size: 17px;
  margin: 0;
  @media (max-width: 768px) {
    color: #fff;
  }
`;
export const SideSkills = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 2px;

  @media (max-width: 768px) {
    color: #fff;
  }
`;

export const FirstSkill = styled.span`
  font-weight: 300;
  font-size: 12px;
  margin: 5px 0;
`;

export const SideIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 10px;
`;
export const GrFacebookOption = styled(fb)`
  border: 0.8px solid #c4c4c4;
  border-radius: 3px;
  padding: 2px 2px;
  color: #999999;
  font-size: 16px;

  &:hover {
    background: #ef7b50;
    color: #fff;
    cursor: pointer;
  }
`;
export const AiOutlineInstagram = styled(ins)`
  border: 0.8px solid #c4c4c4;
  border-radius: 3px;
  padding: 2px 2px;
  color: #999999;
  font-size: 16px;

  &:hover {
    background: #ef7b50;
    color: #fff;
    cursor: pointer;
  }
`;
export const AiOutlineTwitter = styled(twi)`
  border: 0.8px solid #c4c4c4;
  border-radius: 3px;
  padding: 2px 2px;
  color: #999999;
  font-size: 16px;

  &:hover {
    background: #ef7b50;
    color: #fff;
    cursor: pointer;
  }
`;

export const SideCategory = styled.div`
  padding: 5% 0;
`;
export const CategoryHead = styled.h4`
  font-weight: 600;
  font-size: 21px;
  width: 100px;
  color: #fff;
  background: #ef7b50;
  padding: 2px;
  @media (max-width: 768px) {
    color: #fff;
  }
`;

export const CategoryDetails = styled.div``;

export const DetailsFirst = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dashed #ef7b50;

  &:nth-child(5) {
    border-bottom: none;
  }
`;
export const DetailName = styled.p`
  font-weight: 500;
  font-size: 15px;
  @media (max-width: 768px) {
    color: #fff;
  }
`;
export const DetailNum = styled.p`
  font-weight: 500;
  font-size: 15px;
  @media (max-width: 768px) {
    color: #fff;
  }
`;

export const SideUpdate = styled.div`
  margin-top: 4%;
`;
export const UpdateHead = styled.h4`
  font-weight: 600;
  font-size: 21px;
  @media (max-width: 768px) {
    color: #fff;
  }
`;
export const UpdateSpan = styled.span`
  background-color: #ef7b50;
  color: #fff;
  padding: 2px;
  margin-right: 5px;
`;

export const UpdateDetails = styled.div``;
export const UpdateCardMain = styled.div`
  display: flex;
  gap: 20px;
`;

export const UpdateCard = styled.div`
  background: #f2f8f7;
  border-radius: 10px;
  width: 166px;
  height: 111px;
  margin-top: 20px;
  text-align: center;
`;
export const CardNum = styled.h5`
  margin-top: 30px;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 1.4rem;
  color: #ef7b50;
`;
export const CardPara = styled.p`
  margin: 0;

  font-weight: 400;
  font-size: 0.9rem;
`;

export const SideTags = styled.div``;
export const TagsHead = styled.h4`
  font-weight: 600;
  font-size: 21px;
  @media (max-width: 768px) {
    color: #fff;
  }
`;
export const TagsSpan = styled.span`
  background-color: #ef7b50;
  color: #fff;
  padding: 2px;
  margin-right: 5px;
`;

export const TagsDetails = styled.div`
  padding-top: 5px;
`;
export const Tags = styled.div`
  display: flex;
  align-items: center;

  gap: 20px;
`;
export const TagPara = styled.p`
  font-weight: 400;
  font-size: 15px;
  margin: 5px 0;
  padding: 5px;
  border-radius: 8px;
  border: 1px solid #dadada;

  @media (max-width: 768px) {
    color: #fff;
  }
  cursor: pointer;

  &:hover {
    color: #fff;
    background: #ef7b50;
  }
  &:focus {
    color: #fff;
    background: #ef7b50;
  }
`;
