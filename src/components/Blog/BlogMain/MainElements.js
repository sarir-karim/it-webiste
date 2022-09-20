import styled from "styled-components";

export const MainSection = styled.section`
  width: 80%;
  padding: 2% 5% 3% 0;
  background: #eeeeee;

  @media (max-width: 786px) {
    margin: auto;
  }
`;
export const MainHead = styled.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 140%;
  text-transform: capitalize;
`;
export const MainProfileDetail = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;
export const ProfilePic = styled.img`
  margin-right: 10px;
`;
export const ProfileName = styled.span`
  padding-right: 10px;
  border-right: 1px solid grey;
  margin-right: 10px;
  font-size: 12px;
  line-height: 100%;
  /* identical to box height, or 12px */

  text-transform: capitalize;

  color: #777777;
`;
export const ProfileCal = styled.img`
  margin-right: 10px;
`;
export const ProfileDate = styled.span`
  font-size: 12px;
  line-height: 100%;
  text-transform: capitalize;
  color: #777777;
`;

export const MainBackground = styled.img`
  width: 100%;
`;

export const MainPara = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;
`;
export const MainHead2 = styled.h4`
  font-weight: 500;
  font-size: 24px;
  line-height: 140%;
`;
export const MainPara2 = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;
`;
export const MainPara3 = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;
  padding: 3% 0;
`;
export const QuoteParaBg = styled.div`
  position: relative;
  background: #f2f8f7;
  padding: 5px 10px;
`;
export const QuoteImg = styled.img`
  position: absolute;
  top: 0.5%;
  left: 0;
  z-index: -1;
`;

export const QuotePara = styled.p`
  z-index: 999;
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;
`;
export const MainPara5 = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;
  padding: 3% 0;
`;
export const MainHead6 = styled.h4`
  font-weight: 500;
  font-size: 24px;
  line-height: 140%;
`;
export const MainPara6 = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;
`;
export const MainLi = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;
`;
export const LiPara = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;
`;
export const Head7 = styled.h4`
  font-weight: 500;
  font-size: 24px;
  line-height: 140%;
`;

export const MainSocial = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 4% 0;
`;
export const Icon1 = styled.img`
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
`;

export const Hr = styled.hr`
  width: 50%;
`;

/* Related Blogs styles */

export const RelatedBlogs = styled.div`
@media (max-width: 768px){
  margin-bottom: 5%;
}
`;

export const CardsMain = styled.div`
display: flex;
gap: 20px;
justify-content:right  ;

@media (max-width: 768px){
  display:block ;
}
`;
export const BlogShare = styled.img`

`;
export const RelatedHead = styled.h4`
  font-weight: 500;
  font-size: 24px;
  line-height: 140%;
`;
export const HeadSpan = styled.span`
  background: #ef7b50;
  color: #fff;
  padding: 2px;
`;
export const RelatedCards = styled.div`

`;
export const RelatedCard = styled.div`
  width: 100%;
`;

export const CardImg = styled.img`
width: 100%;
`;
export const CardHead = styled.h5`
  font-weight: 500;
  font-size: 24px;
  line-height: 140%;
  width: 90%;
  margin: 20px 0;
`;
export const CardDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const DetImg = styled.img`
  cursor: pointer;
`;
export const DetName = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  padding-right: 2%;
  border-right: 0.5px solid #999999;
`;
export const DetCal = styled.img`
  cursor: pointer;
`;
export const DetDate = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  padding-right: 2%;
  border-right: 0.5px solid #999999;
`;
export const DetTime = styled.img`
  cursor: pointer;
`;
export const DetRead = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
`;
export const CardPara = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  width: 85%;
`;
