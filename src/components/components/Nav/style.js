import styled from "styled-components";
import {StyledUl} from "../../ui/Ul/style";

export const StyledNavList = styled(StyledUl)`
  display: flex;
  gap: 60px;
  margin-left: 280px;
`

export const StyledNavItem = styled.li`
  padding-top: 32px;
  padding-bottom: 32px;
  color: ${(props) => props.current ? "#5E96FC" : "#232134"}
`

