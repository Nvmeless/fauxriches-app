import React from "react";
import { styled } from "styled-components/native";
const StyledaContainer = styled.View`
  background-color: ${({ theme }) => {
    return theme.secondary;
  }};
`;

const Base = (props) => {
  return <StyledaContainer {...props}></StyledaContainer>;
};

export default Base;
