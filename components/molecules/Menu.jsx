import React from "react";
import { Button, Container, Typography } from "../atoms";
const Menu = ({ data }) => {
  return (
    <Container.Menu>
      {data.map((menuData, i) => {
        return (
          <Button.Menu key={i} onClickCallback={() => {}}>
            <Typography.Paragraphe>{menuData.title}</Typography.Paragraphe>
          </Button.Menu>
        );
      })}
    </Container.Menu>
  );
};

export default Menu;
