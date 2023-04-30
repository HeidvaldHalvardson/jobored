import React from 'react';
import {SearchFieldStyled} from "./style";
import FormFilter from "../FormFilter/FormFilter";
import MainTitleHidden from "../../ui/MainTitleHiidden/MainTitleHidden";

const SearchField = () => {
  return (
    <SearchFieldStyled>
      <MainTitleHidden>Поиск вакансий</MainTitleHidden>
      <FormFilter />
    </SearchFieldStyled>
  );
};

export default SearchField;
