import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-navigation";
import colors from "../../style/colors";
import CommonStyle from "../../style/common";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { RoundCornerTextInput } from "../../components/TextInputs";
import { RoundCornerConfirmButtom } from "../../components/ConfirmButtons";
// import firebase from "react-native-firebase";
import { otpTextfieldsChangeAction } from "../../actions";
import { connect } from "react-redux";

class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    /**
     * !Just for testing purpose.
     */
  }

  onContinue = () => {
    const { email, password } = this.props;
    this.props.navigation.navigate("HomeStack");
  };

  onBack = () => this.props.navigation.goBack();
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  render() {
    const {
      safeAreaViewContainer,
      container,
      logoContainer,
      headingText,
      enterOtpHeadingText
    } = styles;
    const { otp, otpTextfieldsChangeAction } = this.props;
    const signUpButtonDisable = otp.length >= 1;

    return (
      <SafeAreaView style={safeAreaViewContainer}>
        <View style={container}>
          <View style={logoContainer}>
            <Text
              style={{
                fontSize: wp("6%"),
                color: colors.textInputText,
                fontWeight: "500"
              }}
            >
              Verify your phone number
            </Text>
          </View>
          <Text style={enterOtpHeadingText}>Enter OTP sent to your number</Text>
          <RoundCornerTextInput
            placeholder="XXXXX"
            propStyle={{ marginTop: wp("7%") }}
            onChangeText={value =>
              otpTextfieldsChangeAction({ key: "otp", value })
            }
            value={otp}
            props={{ maxLength: 6 }}
          />
          <Text
            style={[
              enterOtpHeadingText,
              { marginTop: wp("7%"), fontSize: wp("3.5%") }
            ]}
          >
            Didn't receive OTP?{" "}
            <Text style={{ color: colors.primaryColor }}>SEND AGAIN</Text>
          </Text>

          <RoundCornerConfirmButtom
            disabled={!signUpButtonDisable}
            text="Verify & Continue"
            containerStyle={{ marginTop: wp("15%") }}
            onPressHandler={this.onContinue}
          />
          <RoundCornerConfirmButtom
            disabled={false}
            text="Go Back"
            containerStyle={{ marginTop: wp("7%") }}
            onPressHandler={this.onBack}
          />
        </View>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = state => {
  const { otp } = state.SignUpReducer;

  return {
    otp
  };
};

const mapDispatchToProps = dispatch => ({
  otpTextfieldsChangeAction: text => dispatch(otpTextfieldsChangeAction(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpScreen);

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    // backgroundColor: colors.mainbackground,
    alignItems: "center",
    flexDirection: "column",
    paddingLeft: wp("8%"),
    paddingRight: wp("8%"),
    marginTop: wp("20%")
  },
  logoContainer: { marginBottom: wp("20%") },
  headingText: {
    color: colors.loginHeadingText,
    fontSize: wp("4.5%"),
    marginBottom: wp("5%")
  },
  enterOtpHeadingText: {
    color: colors.loginHeadingText,
    fontSize: wp("4%"),
    fontWeight: "600"
  }
});
