import React from 'react';
import {FormClear, FormFilterStyled, FormInner, FormTitle} from "./style";
import {getFilterSelect} from "../../../api/api";
import Select from "../../ui/Select/Select";

const FormFilter = () => {

 // const options = getFilterSelect()
 //
 //  console.log(options)

  return (
    <FormFilterStyled>
      <FormInner>
        <FormTitle>Фильтры</FormTitle>
        <FormClear type="button">Сбросить все</FormClear>
      </FormInner>
      {/*<Select*/}
      {/*  defaultValue="Выберете отрасль"*/}
      {/*  options={options}*/}
      {/*/>*/}
    </FormFilterStyled>
  );
};

export default FormFilter;
