import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Container, Typography } from "./components/atoms";
import { IconButton, Menu } from "./components/molecules";
import { ThemeProvider } from "styled-components/native";
import { TranslateProvider } from "./providers/TranslateProvider";
const dayTheme = {
  primary: "rgba(150, 50, 120, 1)",
  secondary: "rgba(50, 120, 150, 1)",
};
const nightTheme = {
  primary: dayTheme.secondary,
  secondary: dayTheme.primary,
};
const francais = {
  hello: "Bonjour",
  goodbye: "Au revoir",
};
const anglais = {
  hello: "Hello",
  goodbye: "GoodBye",
};
export default function App() {
  const [night, setNight] = useState(false);
  return (
    <TranslateProvider translation={night ? francais : anglais}>
      <ThemeProvider theme={night ? nightTheme : dayTheme}>
        <Container.Base
          style={{
            width: "100vw",
          }}
        >
          <Menu
            data={[
              { title: "home", slug: "home" },
              { title: "profile", slug: "profile" },
              { title: "contact", slug: "contact" },
            ]}
          ></Menu>
          <IconButton.Night
            onLikeCallback={(activated) => {
              setNight(activated);
            }}
          ></IconButton.Night>
          <IconButton.Heart
            // color={night ? null : "red"}
            onLikeCallback={(activated) => {}}
          ></IconButton.Heart>
          <Container.Centered>
            <Typography.Title align="start">Ma super App</Typography.Title>
            <Typography.Paragraphe align="center">
              Quelle application de zinzin
            </Typography.Paragraphe>
            <StatusBar style="auto" />
          </Container.Centered>
        </Container.Base>
      </ThemeProvider>
    </TranslateProvider>
  );
}
