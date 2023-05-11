import styled from "styled-components";


export const CustomSelectStyled = styled.div`
  padding: 10px 12px;
  
  color: #ACADB9;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  border: 1px solid #D5D6DC;
  border-radius: 8px;

  cursor: pointer;
  
  position: relative;
  
  &::after {
    content: "";
    position: absolute;
    top: 17px;
    right: 12px;
    width: 16px;
    height: 8px;
    background-image: url(${process.env.PUBLIC_URL + "/images/icons/select-arrow.png"});
  }
`

export const CustomSelectInner = styled.ul`
  position: absolute;
  top: 42px;
  left: 0;
  right: 0;
  
  max-height: 500px;
  list-style-type: none;

  color: #232134;

  border: 1px solid #D5D6DC;
  border-radius: 8px;

  background-color: #ffffff;

  overflow-y: auto;
`

export const CustomSelectOption = styled.li`
  min-height: 42px;

  padding: 10px 12px;

  border-bottom: 1px solid #D5D6DC;

  &:hover {
    background-color: #e5e5e5;
  }
  
  &:active {
    background-color: #ffffff;
  }
`