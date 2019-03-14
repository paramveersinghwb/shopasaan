import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { Provider } from "react-redux";
import HomeStack from "./routes/HomeStack";
import LoginStack from "./routes/LoginStack";
import AuthScreen from "./screens/AuthScreen/AuthScreen";
import SignUpScreen from "./screens/SignUpScreen/SignUpScreen";
import configureStore from "./store";

const store = configureStore();

const RootStack = createSwitchNavigator(
  {
    AuthScreen: {
      screen: AuthScreen,
      navigationOptions: { header: null }
    },
    HomeStack: {
      screen: HomeStack,
      navigationOptions: { header: null }
    },
    LoginStack: {
      screen: LoginStack,
      navigationOptions: { header: null }
    },
    SignUpStack: {
      screen: SignUpScreen
    }
  },
  {
    headerMode: "none",
    initialRouteName: "AuthScreen"
  }
);

const AppContainer = createAppContainer(RootStack);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
