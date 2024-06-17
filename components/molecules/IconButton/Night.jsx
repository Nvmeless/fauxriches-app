import React, { useState, useEffect, useContext } from "react";
import { Container, Icon } from "../../atoms";
import { ThemeContext } from "styled-components/native";
const Night = ({ defaultActive = false, onLikeCallback = () => {}, color }) => {
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
      <Icon.FontAwesome
        name={activated ? "moon-o" : "sun-o"}
        color={color ?? theme.primary}
      ></Icon.FontAwesome>
    </Container.Base>
  );
};

export default Night;
