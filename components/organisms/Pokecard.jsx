import React, { useEffect, useState } from "react";
import { Container } from "../atoms";
import { Image, Text } from "react-native";
import axios from "axios";
const Pokecard = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [pokemon, setPokemon] = useState([]);
  const [picture, setPicture] = useState(null);
  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: props.url,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        setPokemon(response.data.results);
        setPicture(response.data.sprites.front_default);
      })
      .catch((error) => {});
  }, []);
  useEffect(() => {
    setLoaded(true);
  }, [pokemon]);
  return (
    <Container.Card {...props}>
      {loaded ? (
        <>
          <Image
            style={{ height: 100, widht: 50 }}
            source={{ uri: picture }}
          ></Image>
          <Text> {props.name}</Text>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </Container.Card>
  );
};

export default Pokecard;
