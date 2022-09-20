import React, { useState } from "react";
import {
  Header,
  HeaderEle,
  FirstEle,
  FirstUl,
  SecUl,
  NavLink,
  LiImg,
  InputBox,
  IconEle,
  Bars,
  ExtendedNavbar,
  NavLinkExtend,
  FaUserAlt,
} from "./HeaderElement";
import Logo from "./images/logo.png";
import icon from "./images/search.png";

const Index = ({ toggleone }) => {
  const [click, setClick] = useState(false);

  return (
    <Header click={click}>
      <HeaderEle>
        <Bars
          onClick={() => {
            setClick((curr) => !curr);
          }}
        />
        <FirstEle>
          <FirstUl>
            <LiImg src={Logo} alt="" />
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="services">It Services</NavLink>
            <NavLink to="blogs">Blogs</NavLink>
            <NavLink to="contact">Contact</NavLink>
          </FirstUl>
          <SecUl>
            <InputBox onClick={toggleone}>
              <IconEle src={icon} />
            </InputBox>
            <FaUserAlt />
          </SecUl>
        </FirstEle>

        {click && (
          <ExtendedNavbar>
            <LiImg src={Logo} alt="" />
            <NavLinkExtend
              onClick={() => {
                setClick((curr) => !curr);
              }}
              to="/"
            >
              Home
            </NavLinkExtend>
            <NavLinkExtend
              onClick={() => {
                setClick((curr) => !curr);
              }}
              to="about"
            >
              About
            </NavLinkExtend>
            <NavLinkExtend
              onClick={() => {
                setClick((curr) => !curr);
              }}
              to="services"
            >
              It Services
            </NavLinkExtend>
            <NavLinkExtend
              onClick={() => {
                setClick((curr) => !curr);
              }}
              to="blogs"
            >
              Blogs
            </NavLinkExtend>
            <NavLinkExtend
              onClick={() => {
                setClick((curr) => !curr);
              }}
              to="contact"
            >
              Contact
            </NavLinkExtend>
            <InputBox onClick={toggleone}>
              <IconEle
                onClick={() => {
                  setClick((curr) => !curr);
                }}
                src={icon}
              />
            </InputBox>
            <FaUserAlt />
          </ExtendedNavbar>
        )}
      </HeaderEle>
    </Header>
  );
};

export default Index;
