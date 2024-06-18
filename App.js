import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Container, Typography } from "./components/atoms";
import { IconButton, Menu } from "./components/molecules";
import { ThemeProvider, styled } from "styled-components/native";
import { Card } from "./components/organisms";
import { store } from "./store";
import { Provider } from "react-redux";
import { Articles } from "./components/pages";
// import { keyframes } from "styled-components";
// const disapear = keyframes`
// from {
//   opacity:100%
// }

// to {
//   opacity:0;
// }
// `;
const LoaderContainer = styled.View`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.secondary};
`;
// animation: ${disapear} 2s linear;

const dayTheme = {
  primary: "rgba(150, 50, 120, 1)",
  secondary: "rgba(50, 120, 150, 1)",
};
const nightTheme = {
  primary: dayTheme.secondary,
  secondary: dayTheme.primary,
};
export default function App() {
  const [night, setNight] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const handleLoad = () => {
    setLoaded(true);
  };
  useEffect(() => {
    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={night ? nightTheme : dayTheme}>
        {loaded ? (
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
              <Articles></Articles>
              <Articles></Articles>
            </Container.Centered>
          </Container.Base>
        ) : (
          <LoaderContainer>Loading</LoaderContainer>
        )}
        <StatusBar style="auto" />
      </ThemeProvider>
    </Provider>
  );
}
