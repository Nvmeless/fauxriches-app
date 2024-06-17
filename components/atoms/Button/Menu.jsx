import React from "react";
import styled from "styled-components/native";

const StyledButton = styled.View`
  color: red;
`;
const Menu = ({ onClickCallback = () => {}, ...props }) => {
  return <StyledButton onClick={onClickCallback} {...props}></StyledButton>;
};

export default Menu;
