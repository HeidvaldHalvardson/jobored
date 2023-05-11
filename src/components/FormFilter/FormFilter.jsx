import React, {useEffect} from 'react';
import {FormClear, FormFilterStyled, FormInner, FormTitle} from "./style";
import {useDispatch, useSelector} from "react-redux";
import CustomSelect from "../../ui/CustomSelect/CustomSelect";
import {getFilterAC} from "../../actions/filter";
import FilterLabelTitle from "../../ui/FilterLabelTitle/FilterLabelTitle";

const FormFilter = () => {
  const dispatch = useDispatch()
  const catalog = useSelector(state => state.filter.catalog)

  useEffect(() => {
    dispatch(getFilterAC())
  }, [dispatch])


  return (
    <FormFilterStyled>
      <FormInner>
        <FormTitle>Фильтры</FormTitle>
        <FormClear type="button">Сбросить все</FormClear>
      </FormInner>
      <label>
        <FilterLabelTitle>Отрасль</FilterLabelTitle>
        <CustomSelect
          defaultValue="Выберете отрасль"
          options={catalog}
        />
      </label>
    </FormFilterStyled>
  );
};

export default FormFilter;
