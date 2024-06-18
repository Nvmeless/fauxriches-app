import React from "react";
import { Container, Typography } from "../atoms";
import { IconButton } from "../molecules";
import { View, Text } from "react-native";
const Card = ({
  data,
  deleteCallback = (id) => {},
  likeCallback = (id) => {},
}) => {
  return (
    <Container.Card>
      <Typography.Title>
        {data.title ?? translation.noContent ?? "No Title"}
      </Typography.Title>
      <Typography.Paragraphe>
        {data.description ?? translation.noContent ?? "No description"}
      </Typography.Paragraphe>
      <IconButton.Heart
        clickCallback={likeCallback}
        alreadyLiked={data.liked ?? false}
      ></IconButton.Heart>

      <View onClick={deleteCallback}>
        <Text>X</Text>
      </View>
    </Container.Card>
  );
};

export default Card;
