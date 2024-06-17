import React from "react";
import { styled } from "styled-components/native";
const StyledContainer = styled.View`
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.secondary ?? "transparent"};
`;

const Centered = (props) => {
  return <StyledContainer {...props}></StyledContainer>;
};

export default Centered;
