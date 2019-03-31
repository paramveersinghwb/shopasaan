import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
const { SafeAreaView } = require("react-navigation");
import colors from "../../style/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

const { connect } = require("react-redux");

import { bindActionCreators } from "redux";
import * as actions from "../../actions";
import { RoundCornerTextInput } from "../../components/TextInputs";
import { RoundCornerConfirmButtom } from "../../components/ConfirmButtons";

interface Props {
  email: string;
  navigation: any;
  extraProps: Object;
  actions: any;
}

class ForgotPasswordScreen extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: ""
    };
  }
  onBack = () => this.props.navigation.goBack();


  onChangePassword = () => {
    console.log("hello");
  };
  render() {
    const { safeAreaViewContainer, container, logoContainer } = styles;
    const { forgotPasswordTextfieldsChangeAction } = this.props.actions;
    return (
      <SafeAreaView style={safeAreaViewContainer}>
        <View style={container}>
          <View style={logoContainer}>
            <Text
              style={{
                fontSize: wp("5.5 %"),
                color: colors.textInputText,
                fontWeight: "700",
                letterSpacing: wp("1.8%")
              }}
            >
              FORGOT PASSWORD
            </Text>
          </View>
          <RoundCornerTextInput
            placeholder="EMAIL"
            propStyle={{ marginTop: wp("7%") }}
            value={email}
            onChangeText={(value: string) =>
              forgotPasswordTextfieldsChangeAction({ key: "email", value })
            }
            extraProps={{ autoCapitalize: "none" }}
          />
          <RoundCornerConfirmButtom
            disabled={!ForgotPasswordDisable}
            text="Change Password"
            containerStyle={{ marginTop: wp("16%") }}
            onPressHandler={this.onChangePassword.bind(this)}
            textStyle={{}}
            isFetching={false}
          />
          <RoundCornerConfirmButtom
            text="Back"
            containerStyle={{ marginTop: wp("4%") }}
            onPressHandler={this.onBack.bind(this)}
            disabled={false}
            textStyle={{}}
            isFetching={false}
          />
        </View>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = (state: any) => {
  const { email } = state.ForgotPasswordReducer;

  return {
    email
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPasswordScreen);

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    paddingLeft: wp("8%"),
    paddingRight: wp("8%"),
    paddingTop: wp("20")
  },
  logoContainer: { marginBottom: wp("20%") },
  headingText: {
    color: colors.loginHeadingText,
    fontSize: wp("4.5%"),
    marginBottom: wp("5%")
  }
});
