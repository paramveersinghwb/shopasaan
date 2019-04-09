import { createStackNavigator } from "react-navigation";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen/SignUpScreen";
import VerficationScreen from "../screens/VerficationScreen/verficationScreen";
import Forgot_password from "../screens/ForgotPasswordScreen/forgetpass";
import Otp from "../screens/GetOtp/GetOtp";
import ForgotPasswordVerficationScreen from "../screens/ForgotPassVerficationScreen/ForgotPasswordVerficationScreen";
import ChangePasswordScreen from "../screens/ChangePasswordScreen/ChangePasswordScreen";

const LoginStack = createStackNavigator(
  {
    LoginScreen: { screen: LoginScreen },
    SignUpScreen: { screen: SignUpScreen },
    VerficationScreen: { screen: VerficationScreen },
    ForgotPasswordVerficationScreen: {
      screen: ForgotPasswordVerficationScreen
    },
    Forgot_password: { screen: Forgot_password },
    ChangePasswordScreen: { screen: ChangePasswordScreen },
    Otp: { screen: Otp }
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
