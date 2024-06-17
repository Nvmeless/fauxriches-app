import React from "react";
import styled from "styled-components/native";

const StyledParagraph = styled.Text`
  text-align: ${(props) => props.align ?? "start"};
  color: ${({ color, theme }) => theme.primary ?? color};
`;

const Paragraphe = (props) => {
  return <StyledParagraph {...props}></StyledParagraph>;
};

export default Paragraphe;
