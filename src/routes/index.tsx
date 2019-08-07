import React from "react";
import { createStackNavigator } from "react-navigation";
import { createAppContainer } from "react-navigation";
import { ThemeProvider } from "react-native-elements";
import Login from "./Login";
enum RouteNames {
  Login
}

const AppNavigator = createStackNavigator(
  {
    [RouteNames.Login]: {
      screen: Login
    }
  },
  {
    headerMode: "none",
  }
);

const AppContainer = createAppContainer(AppNavigator);

interface Props {}
export default function Routes(props: Props) {
  return (
    <ThemeProvider>
      <AppContainer />
    </ThemeProvider>
  );
}
