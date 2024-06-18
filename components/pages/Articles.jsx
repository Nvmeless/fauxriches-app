import React, { useState } from "react";
import { TextInput, Text, View } from "react-native";
import { Card } from "../organisms";
import { Container } from "../atoms";
import { useDispatch, useSelector } from "react-redux";
import { addArticle, deleteArticle, likeArticle } from "../../store";

const Articles = () => {
  const data = useSelector((state) => {
    return state.articles;
  });
  const [title, setTitle] = useState("New Title");
  const [description, setDescription] = useState("New Description");
  const dispatch = useDispatch();
  return (
    <Container.Scrollable>
      <TextInput
        onChangeText={(text) => {
          setTitle(text);
        }}
        value={title}
      ></TextInput>
      <TextInput
        onChangeText={(text) => {
          setDescription(text);
        }}
        value={description}
      ></TextInput>
      <View
        onClick={() => {
          dispatch(addArticle({ title: title, description: description }));
        }}
      >
        <Text> Send</Text>
      </View>
      {data.map((d, i) => {
        return (
          <Card
            key={d.id}
            deleteCallback={() => {
              dispatch(deleteArticle(d.id));
            }}
            likeCallback={() => {
              dispatch(likeArticle(d.id));
            }}
            alre
            data={d}
          ></Card>
        );
      })}
    </Container.Scrollable>
  );
};

export default Articles;
