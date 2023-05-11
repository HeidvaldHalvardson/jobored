import React from 'react';
import {StyledMain} from "./style";
import SearchField from "../../components/SearchField/SearchField";
import {Route, Routes} from "react-router-dom";

const Main = () => {
  return (
    <StyledMain>
      <Routes>
        <Route path="/" element={<SearchField/>}/>
      </Routes>
    </StyledMain>
  );
};

export default Main;
