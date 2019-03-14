import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-navigation";
import colors from "../../style/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { RoundCornerTextInput } from "../../components/TextInputs";
import { RoundCornerConfirmButtom } from "../../components/ConfirmButtons";
import { connect } from "react-redux";
import { logInTextfieldsChangeAction } from "../../actions";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Login Form Fields..
      name: "",
      phoneNumber: "",
      // Login Form validation fields..
      checkname: [],
      checkphoneNumber: []

      /**
       * TODO: future use
       */
      // disabled: true
    };

    this.onContinue = this.onContinue.bind(this);
  }

  componentWillMount() {
    /**
     * !Just for testing purpose.
     */
  }

  onContinue = () => this.props.navigation.navigate("SignUpScreen");
  validateName(name) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(name).toLowerCase());
  }
  onSignUp = () => this.props.navigation.navigate("SignUpScreen");
  render() {
    const {
      safeAreaViewContainer,
      container,
      logoContainer,
      headingText
    } = styles;
    const { name, phoneNumber, loginTextfieldsChangeAction } = this.props;
    const LoginButtonDisable = name.length >= 1 && phoneNumber.length >= 1;
    return (
      <SafeAreaView style={safeAreaViewContainer}>
        <View style={container}>
          <View style={logoContainer}>
            <Text
              style={{
                fontSize: wp("8%"),
                color: colors.textInputText,
                fontWeight: "500"
              }}
            >
              Logo Here
            </Text>
          </View>
          <RoundCornerTextInput
            placeholder="Name"
            propStyle={{ marginTop: wp("7%") }}
            value={name}
            onChangeText={value =>
              loginTextfieldsChangeAction({ key: "name", value })
            }
          />
          <RoundCornerTextInput
            placeholder="+91"
            propStyle={{ marginTop: wp("7%") }}
            value={phoneNumber}
            onChangeText={value =>
              loginTextfieldsChangeAction({ key: "phoneNumber", value })
            }
            props={{ keyboardType: "numeric" }}
          />
          <RoundCornerConfirmButtom
            disabled={!LoginButtonDisable}
            text="Continue"
            containerStyle={{ marginTop: wp("18%") }}
            onPressHandler={this.onContinue}
          />
        </View>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = state => {
  const { name, phoneNumber } = state.LoginReducer;

  return {
    name,
    phoneNumber
  };
};

const mapDispatchToProps = dispatch => ({
  loginTextfieldsChangeAction: text =>
    dispatch(logInTextfieldsChangeAction(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: wp("8%"),
    paddingRight: wp("8%")
  },
  logoContainer: { marginBottom: wp("20%") },
  headingText: {
    color: colors.loginHeadingText,
    fontSize: wp("4.5%"),
    marginBottom: wp("5%")
  }
});
