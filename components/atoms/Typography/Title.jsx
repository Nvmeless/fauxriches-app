import React, { useContext } from "react";
import styled from "styled-components/native";
import { TranslateContext } from "../../../providers/TranslateProvider";
const StyledTitle = styled.Text`
  display: block;
  margin-top: 0.67em;
  margin-bottom: 0.67em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
  text-align: ${(props) => props.align ?? "start"};
  color: ${({ color, theme }) => theme.primary ?? color};
`;

const Title = (props) => {
  const translation = useContext(TranslateContext);
  return (
    <StyledTitle style={{ fontSize: "2em" }} {...props}>
      {translation.hello}
    </StyledTitle>
  );
};

export default Title;
