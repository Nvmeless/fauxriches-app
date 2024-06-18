import React from "react";
import styled from "styled-components/native";

const StyledCard = styled.View`
  border-radius: 50px;
  background: #e0e0e0;
  box-shadow: 20px 20px 60px #bebebe;
  padding: 20px 90px;
  width: 300px;
  margin: 20px;
`;

const Card = (props) => {
  return <StyledCard {...props}></StyledCard>;
};

export default Card;
