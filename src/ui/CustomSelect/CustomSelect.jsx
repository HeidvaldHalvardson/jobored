import React from 'react';
import {CustomSelectInner, CustomSelectOption, CustomSelectStyled} from "./style";

const CustomSelect = ({options, defaultValue}) => {
  return (
    <>
      <CustomSelectStyled>
        {defaultValue}

        <CustomSelectInner>
          {/*<label>*/}
          {/*  {defaultValue}*/}
          {/*  <input type="radio" value='' disabled />*/}
          {/*</label>*/}
          {
            options.map((option) =>
              <CustomSelectOption>
                <label>
                  {option.title_rus}
                  <input type="radio" name="otrasadasd" value={option.title} key={option.key}/>
                </label>
              </CustomSelectOption>
            )}
        </CustomSelectInner>
      </CustomSelectStyled>
    </>

  );
};

export default CustomSelect;
