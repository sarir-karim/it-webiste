import React from "react";
import BlogSidebar from "../components/Blog/BlogSidebar/Index";
import BlogMain from "../components/Blog/BlogMain/Index";
import Hero from "../components/Blog/Hero/Index";
import BlogNav from "../components/Blog/BlogNav/Index";

const BlogSingle = () => {
  return (
    <div>
        <Hero />
      <BlogNav />
      <div className="blogContainers">
        <BlogSidebar />
        <BlogMain />
      </div>
    </div>
  );
};

export default BlogSingle;
