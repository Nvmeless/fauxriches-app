import React, { useState, useEffect, useContext } from "react";
import { Container, Icon } from "../../atoms";
import { ThemeContext } from "styled-components/native";
const Heart = ({ defaultActive = false, onLikeCallback = () => {}, color }) => {
  const [activated, setActivated] = useState(defaultActive);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    onLikeCallback(activated);



    


  }, [activated]);

  return (
    <Container.Base
      onClick={() => {
        setActivated(!activated);
      }}
    >
      <Icon.AntDesign
        name={activated ? "heart" : "hearto"}
        color={color ?? theme.primary}
      ></Icon.AntDesign>
    </Container.Base>
  );
};

export default Heart;
