import React from 'react';
import {StyledNavItem, StyledNavList} from "./style";

const Nav = () => {
  return (
    <nav>
      <StyledNavList>
        <StyledNavItem current="current">Поиск вакансий</StyledNavItem>
        <StyledNavItem>Избранное</StyledNavItem>
      </StyledNavList>
    </nav>
  );
};

export default Nav;
