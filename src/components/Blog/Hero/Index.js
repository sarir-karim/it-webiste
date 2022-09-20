import React from "react";
//importing images
import Arrow from "./images/arrow.png";

import {
  BlogContainer,
  BlogFirst,
  BlogHead,
  BlogPara,
  BlogButton,
  BlogSecond,
  BlogImg,
} from "./BlogElement";

const Index = () => {
  return (
    <BlogContainer>
      <BlogFirst>
        <BlogHead>Blogs</BlogHead>
        <BlogPara>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis egestas elit diam etiam sit in consectetur nisl. Ultrices penatibus in orci ac ant.
        </BlogPara>
        <BlogButton>
          Discover more <BlogImg src={Arrow} />
        </BlogButton>
      </BlogFirst>
      <BlogSecond></BlogSecond>
    </BlogContainer>
  );
};

export default Index;
