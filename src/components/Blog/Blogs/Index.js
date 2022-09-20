import React from "react";
import img2 from "./images/img2.png";
import arrow from "./images/arrow.png";

import pro1 from "./images/pro1.png";
import { blog } from "./BlogData";
import {
  BlogsMain,
  BlogsHead,
  BlogsPara,
  BlogCardsMain,
  Card,
  BlogImg,
  BlogTitle,
  BlogText,
  BlogButton,
  AuthorDetail,
  AuthImg,
  AuthName,
  AuthDate,
  Arrow,
} from "./BlogsElements";
const Index = () => {
  return (
    <BlogsMain>
      <BlogsHead>All Blog</BlogsHead>
      <BlogsPara>
        Our latest updates and blogs about managing your team
      </BlogsPara>

      <BlogCardsMain>
        {blog.map(({ title, para, name, date ,index}) => (
          <Card key={index}>
            <BlogImg src={img2} />
            <BlogTitle>{title}</BlogTitle>
            <BlogText> {para}</BlogText>
            <BlogButton to="/blogs/:postId">
              Learn more <Arrow src={arrow} />{" "}
            </BlogButton>
            <AuthorDetail>
              <AuthImg src={pro1} />
              <AuthName>{name}</AuthName>
              <AuthDate>{date}</AuthDate>
            </AuthorDetail>
          </Card>
        ))}
      </BlogCardsMain>
    </BlogsMain>
  );
};

export default Index;
