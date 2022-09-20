import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import BlogSingle from "./pages/BlogSingle";

// header and footer components
import Header from "./components/Header/Index";
import Footer from "./components/Footer/Index";
import Searchpop from "./components/SearchPop/Searchpop";
import Auth from "./components/Auth/Auth";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [loggedOut, setLoggedOut] = useState(true);
  const [isOpenone, setIsOpenone] = useState(false);
  const toggleone = () => {
    setIsOpenone(!isOpenone);
  };

  return (
    <>
      {loggedOut ? (
        <Router>
          <ScrollToTop />
          <Header toggleone={toggleone} />
          <Searchpop isOpenone={isOpenone} toggleone={toggleone} />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs/:postId" element={<BlogSingle />} />
          </Routes>
          <Footer />
        </Router>
      ) : (
        <Auth />
      )}
    </>
  );
}

export default App;
