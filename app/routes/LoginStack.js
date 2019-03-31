import { createStackNavigator } from "react-navigation";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen/SignUpScreen";
import VerficationScreen from '../screens/VerficationScreen/verficationScreen'
import Forgot_password from '../screens/ForgotPasswordScreen/forgetpass'
const LoginStack = createStackNavigator(
  {
    LoginScreen: { screen: LoginScreen },
    SignUpScreen: { screen: SignUpScreen },
    VerficationScreen: {screen: VerficationScreen},
    Forgot_password: {screen: Forgot_password}
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
