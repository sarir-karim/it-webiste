import React, { useState } from "react";

import {
  SidebarContainer,
  SideHead,
  SideProfile,
  SidePicture,
  ProfileDetails,
  SideName,
  SideSkills,
  FirstSkill,
  SideIcons,
  GrFacebookOption,
  AiOutlineInstagram,
  AiOutlineTwitter,
  SideCategory,
  CategoryHead,
  CategoryDetails,
  DetailsFirst,
  DetailName,
  DetailNum,
  SideUpdate,
  UpdateHead,
  UpdateSpan,
  UpdateDetails,
  UpdateCard,
  UpdateCardMain,
  CardNum,
  CardPara,
  SideTags,
  TagsHead,
  TagsSpan,
  TagsDetails,
  Tags,
  Bars,
  TagPara,
  SidebarExtend,
} from "./SidebarElements";

import profile from "./images/profile.png";

const Index = () => {
  const [click, setClick] = useState(true);

  return (
    <>
      <SidebarContainer click={click}>

        {/* profile part */}
        <Bars
          onClick={() => {
            setClick((curr) => !curr);
          }}
          />
        {click && (
          <SidebarExtend>
            <SideHead>Author</SideHead>
            <SideProfile>
              <SidePicture src={profile} />
              <ProfileDetails>
                <SideName>Xilan Badar</SideName>
                <SideSkills>
                  <FirstSkill>Designer</FirstSkill>
                  <FirstSkill>Blogger</FirstSkill>
                  <FirstSkill>Activist</FirstSkill>
                </SideSkills>
                <SideIcons>
                  <GrFacebookOption />
                  <AiOutlineInstagram />
                  <AiOutlineTwitter />
                </SideIcons>
              </ProfileDetails>
            </SideProfile>
            {/* category part */}
            <SideCategory>
              <CategoryHead>Categories</CategoryHead>
              <CategoryDetails>
                <DetailsFirst>
                  <DetailName>lifestyle</DetailName>
                  <DetailNum>09</DetailNum>
                </DetailsFirst>
                <DetailsFirst>
                  <DetailName>travel</DetailName>
                  <DetailNum>05</DetailNum>
                </DetailsFirst>
                <DetailsFirst>
                  <DetailName>Food</DetailName>
                  <DetailNum>09</DetailNum>
                </DetailsFirst>
                <DetailsFirst>
                  <DetailName>HealthCare</DetailName>
                  <DetailNum>10</DetailNum>
                </DetailsFirst>
                <DetailsFirst>
                  <DetailName>Technology</DetailName>
                  <DetailNum>03</DetailNum>
                </DetailsFirst>
              </CategoryDetails>
            </SideCategory>

            {/* update part */}
            <SideUpdate>
              <UpdateHead>
                <UpdateSpan>Today’s </UpdateSpan>
                Update
              </UpdateHead>
              <UpdateDetails>
                <UpdateCardMain>
                  <UpdateCard>
                    <CardNum>14</CardNum>
                    <CardPara>New Posts</CardPara>
                  </UpdateCard>
                  <UpdateCard>
                    <CardNum>480</CardNum>
                    <CardPara>Total Visits</CardPara>
                  </UpdateCard>
                </UpdateCardMain>
                <UpdateCardMain>
                  <UpdateCard>
                    <CardNum>29</CardNum>
                    <CardPara>New Subscribers</CardPara>
                  </UpdateCard>
                  <UpdateCard>
                    <CardNum>138</CardNum>
                    <CardPara>Blog Read</CardPara>
                  </UpdateCard>
                </UpdateCardMain>
              </UpdateDetails>
            </SideUpdate>

            {/* tags part */}
            <SideTags>
              <TagsHead>
                <TagsSpan>search </TagsSpan>
                With Tags
              </TagsHead>

              <TagsDetails>
                <Tags>
                  <TagPara>Travel</TagPara>
                  <TagPara>lifestyle</TagPara>
                  <TagPara>fashion</TagPara>
                </Tags>
                <Tags>
                  <TagPara>technology</TagPara>
                  <TagPara>business</TagPara>
                  <TagPara>design</TagPara>
                </Tags>
                <Tags>
                  <TagPara>Health</TagPara>
                  <TagPara>Food</TagPara>
                  <TagPara>Art</TagPara>
                </Tags>
              </TagsDetails>
            </SideTags>
          </SidebarExtend>
        )}
      </SidebarContainer>
    </>
  );
};

export default Index;
