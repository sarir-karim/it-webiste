import React from "react";
import Hero from "../components/Blog/Hero/Index";
import BlogNav from "../components/Blog/BlogNav/Index";
import Blog from '../components/Blog/Blogs/Index'

function Blogs() {
  return (
    <>
      <Hero />
      <BlogNav />
      <div className="blogContainers">
        {/* <BlogSidebar />
        <BlogMain /> */}
        <Blog/>
      </div>
    </>
  );
}

export default Blogs;
