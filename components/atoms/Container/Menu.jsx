import React from "react";
import { styled } from "styled-components/native";

const StyledContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 5vh;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.secondary ?? "transparent"};
`;
const Menu = (props) => {
  return <StyledContainer {...props}></StyledContainer>;
};

export default Menu;
