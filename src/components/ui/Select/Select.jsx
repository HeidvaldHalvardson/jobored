import React from 'react';
import {SelectStyled} from "./style";

const Select = ({options, defaultValue}) => {
  return (
    <SelectStyled>
      <option value='' disabled selected>{defaultValue}</option>
      {
        options.map(option =>
          <option value={option.title} key={option.key}>
            {option.url_rus}
          </option>
      )}
    </SelectStyled>
  );
};

export default Select;
