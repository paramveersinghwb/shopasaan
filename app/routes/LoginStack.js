import { createStackNavigator } from "react-navigation";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen/SignUpScreen";

const LoginStack = createStackNavigator(
  {
    LoginScreen: { screen: LoginScreen },
    SignUpScreen: { screen: SignUpScreen }
  },
  {
    defaultNavigationOptions: {
      header: null
    },
    initialRouteName: "LoginScreen",
    swipeEnabled: false,
    animationEnabled: false,
    lazy: true,
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0
      }
    })
  }
);

export default LoginStack;
