import React from 'react';
import {HeaderInner, StyledHeader} from "./style";
import Logo from "../../ui/Logo/Logo";
import Nav from "../../components/Nav/Nav";

const Header = () => {
  return (
    <StyledHeader>
      <HeaderInner>
        <Logo />
        <Nav />
      </HeaderInner>
    </StyledHeader>
  );
};

export default Header;
