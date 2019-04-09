import React from "react";
import { StyleSheet, Text, View, AsyncStorage } from "react-native";
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
import {
  loginverficationOtp,
  verficationSignUpOtp,
  signUp,
  getToken
} from "../../config/fetchApi";
import { bindActionCreators } from "redux";
import { Bars } from "react-native-loader";

class VerficationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { otp: "", isLoading: false, token: "" };
  }

  componentWillMount() {
    /**
     * !Just for testing purpose.
     */
  }

  onContinue = () => {
    // this._;
    this._hitTokenApi();
    // this.props.navigation.navigate("HomeStack");
  };

  onBack = () => this.props.navigation.goBack();
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  _hitSignUpVerficationOtp = async token => {
    await this.setState({ isLoading: true });
    console.log(this.props.navigation.state);

    debugger;

    const { mobile } = this.props.navigation.state.params;

    debugger;
    await verficationSignUpOtp({
      mobile: mobile,
      otp: this.state.otp,
      token,
      data: response => this.verificationSignUpOtpResponse(response, token)
    });
  };

  verificationSignUpOtpResponse = async (response, token) => {
    // await this.setState({ isLoading: false });

    if (response != null) {
      debugger;
      if (
        response.data.status == 200 &&
        response.data.message &&
        response.data.message != "wrong otp."
      ) {
        if (response.data.message && response.data.message != "wrong otp.") {
          this._hitSignUpApi(token);
        } else {
          await this.setState({ isLoading: false });

          alert(response.data.message);
        }
      } else if (response.state == 201) {
        await this.setState({ isLoading: false });

        alert(response.message);
      } else {
        await this.setState({ isLoading: false });

        setTimeout(() => {
          alert(response.data.message);
        }, 600);
      }
    } else {
      await this.setState({ isLoading: false });

      alert("Network error, Please try again later");
    }
  };

  _hitTokenApi = async () => {
    const {
      mobile,
      name,
      email,
      password
    } = this.props.navigation.state.params;
    await getToken(response => this.TokenApiResponse(response));
  };

  TokenApiResponse = response => {
    debugger;
    if (response != null) {
      debugger;
      if (response.data.status == 200) {
        this._hitSignUpVerficationOtp(response.data.response.token);
      } else {
        setTimeout(() => {
          alert(response.data.message);
        }, 600);
      }
    } else alert("Network error, Please try again later");
  };

  _hitSignUpApi = async token => {
    const {
      mobile,
      name,
      email,
      password
    } = this.props.navigation.state.params;

    await signUp({
      name,
      email,
      phoneNumber: mobile,
      password,
      token,
      data: response => this.signUpApiResponse(response)
    });
  };

  signUpApiResponse = response => {
    this.setState({ isLoading: false });
    if (response != null) {
      debugger;
      if (response.status == 200) {
        if (response.data.message == "Success" || response.data.status == 200) {
          // AsyncStorage.setItem("userData", JSON.stringify(response.data));

          setTimeout(() => {
            this.props.navigation.navigate("LoginScreen");

            alert("Acccount sucessfully created");
          }, 600);
        } else {
          alert(response.data.message);
        }
      } else if (response.state == 201) {
        alert(response.message);
      } else {
        setTimeout(() => {
          alert(response.data.message);
        }, 600);
      }
    } else alert("Network error, Please try again later");
  };

  render() {
    const {
      safeAreaViewContainer,
      container,
      logoContainer,
      headingText,
      enterOtpHeadingText
    } = styles;

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
            onChangeText={otp => this.setState({ otp })}
            value={this.state.otp}
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
          {this.state.isLoading && (
            <View style={styles.loading}>
              <Bars size={10} color="red" />
            </View>
          )}
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  // debugger;
  const { otp } = state.SignUpReducer;
  return {
    otp
  };
};
const mapDispatchToProps = dispatch => {
  return {
    action: bindActionCreators({}, dispatch)
  };
};
export default connect(
  mapStateToProps,
  { otpTextfieldsChangeAction }
)(VerficationScreen);

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
  },
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  }
});
