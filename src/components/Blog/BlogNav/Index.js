import React from "react";

import {
  NavContainer,
  NavSecOne,
  NavList,
  NavLink,
  FaAngleRight,
  NavPara,
  NavListTwo,
  NavInputs,
  Input,
  BiSearch
} from "./NavElements";

const Index = ({ toggleone }) => {
  return (
    <NavContainer>
      <NavSecOne>
        <NavList>
          <NavLink to="/">Home</NavLink>
          <FaAngleRight/>
          <NavLink to="/blogs">Blog</NavLink>
          <FaAngleRight/>
          <NavPara>Easy Writing guide</NavPara>
        </NavList>
      </NavSecOne>
        <NavListTwo>
          <NavInputs>
            <BiSearch/>
            <Input placeholder="search" />
          </NavInputs>
        </NavListTwo>
    </NavContainer>
  );
};

export default Index;
