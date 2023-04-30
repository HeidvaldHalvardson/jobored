import React from 'react';
import {StyledLogo} from "./style";

const Logo = () => {
  return (
    <StyledLogo href="/">
      <img src={process.env.PUBLIC_URL + 'images/logo.png'} alt="Логотип Jobored."/>
    </StyledLogo>
  );
};

export default Logo;
