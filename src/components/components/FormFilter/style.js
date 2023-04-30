import styled from "styled-components";

export const FormFilterStyled = styled.form`
  width: 100%;
  background-color: #ffffff;
  border: 1px solid #EAEBED;
  border-radius: 12px;
  padding: 20px;
`

export const FormInner = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
`

export const FormTitle = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: #232134;
`

export const FormClear = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #ACADB9;

  position: relative;
  padding-right: 20px;

  &:after {
    content: '';
    background-color: #ACADB9;
    width: 10px;
    height: 1px;
    position: absolute;
    top: 50%;
    right: 0;
    transform: rotate(135deg);
  }

  &:before {
    content: '';
    background-color: #ACADB9;
    width: 10px;
    height: 1px;
    position: absolute;
    top: 50%;
    right: 0;
    transform: rotate(-135deg);
  }
`
