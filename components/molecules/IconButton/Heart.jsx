import React, { useState, useEffect, useContext } from "react";
import { Container, Icon } from "../../atoms";
const Heart = ({
  alreadyLiked = false,
  clickCallback = (liked) => {},
  ...props
}) => {
  const [liked, setLiked] = useState(alreadyLiked);
  useEffect(() => {
    clickCallback(liked);
  }, [liked]);

  return (
    <Container.Default
      onClick={(e) => {
        setLiked(!liked);
      }}
    >
      <Icon.AntDesign
        name={alreadyLiked ? "heart" : "hearto"}
        color={alreadyLiked ? "red" : "white"}
      ></Icon.AntDesign>
    </Container.Default>
  );
};

export default Heart;
