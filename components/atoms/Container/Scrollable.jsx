import React from "react";
import { styled } from "styled-components/native";
const StyledContainer = styled.ScrollView`
  height: 30vh;
`;

const Scrollable = (props) => {
  return <StyledContainer {...props}></StyledContainer>;
};

export default Scrollable;
