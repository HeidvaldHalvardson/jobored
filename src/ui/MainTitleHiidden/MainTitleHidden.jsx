import React from 'react';
import {MainTitleHiddenStyled} from "./style";

const MainTitleHidden = ({children}) => {
  return (
    <MainTitleHiddenStyled>
      {children}
    </MainTitleHiddenStyled>
  );
};

export default MainTitleHidden;
