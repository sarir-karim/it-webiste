import React from "react";
import Hero from "../components/Home/Hero/Index";
import WhoWeAre from "../components/Home/WhoWeAre/Index";
import ExploreUs from "../components/Home/ExploreUs/Index";
import Blog from "../components/Home/Blogs/Index";
import Customer from '../components/Home/Customer/Index';
import Contact from '../components/Home/Contact/Index';


const Home = () => {
  return (
    <div>
      <Hero />
      <WhoWeAre />
      <ExploreUs />
      <Blog />
      <Customer/>
      <Contact/>
      
    </div>
  );
};

export default Home;
