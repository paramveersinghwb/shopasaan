import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  AsyncStorage,
  Image,
  TextInput
} from "react-native";
import { SafeAreaView } from "react-navigation";
import colors from "../../style/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { RoundCornerTextInput } from "../../components/TextInputs";
import { RoundCornerConfirmButtom } from "../../components/ConfirmButtons";
import { connect } from "react-redux";
// import { TouchableOpacity } from "react-native-gesture-handler";
import {
  login,
  getToken,
  getForgetPassOtp,
  changePassword
} from "../../config/fetchApi";
import { Bubbles, DoubleBounce, Bars, Pulse } from "react-native-loader";
import { getOtp, ClearAction } from "../../actions/authActions";
import { bindActionCreators } from "redux";

class ChangePasswordScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Login Form Fields..
      phoneNumber: "",
      // Login Form validation fields..
      checkphoneNumber: [],
      isLoading: false,
      password: "",
      confirmPassword: ""

      /**
       * TODO: future use
       */
      // disabled: true
    };

    this.onContinue = this.onContinue.bind(this);
  }

  async componentWillReceiveProps(nextProps) {
    debugger;
    if (nextProps.status === "5001") {
      this.setState({ ErrMsg: nextProps.err_Message });
    } else if (nextProps.status === "200") {
      this.props.navigation.navigate("HomeStack");
      this.clearReducerState();
      this.setState({ email: "", password: "" });
    } else if (nextProps.status === "100") {
      this.setState({ email: "", password: "" });
      this.clearReducerState();
    } else if (nextProps.status === "400") {
      alert(nextProps.err_Message);
      this.clearReducerState();
    }
  }

  componentWillMount() {
    /**
     * !Just for testing purpose.
     */
  }

  onContinue = () => {
    if (this.state.password.trim().length == 0) {
      alert("Enter Password");
    } else if (this.state.password.length < 6) {
      alert("Password length should be greater then 6");
    } else if (
      this.state.confirmPassword.length !=
      this.state.confirmPassword.trim().length
    ) {
      alert("Space is not allowed");
    } else if (this.state.confirmPassword.trim().length == 0) {
      alert("Enter confrim password");
    } else if (this.state.password != this.state.confirmPassword) {
      alert("Password not matched");
    } else {
      this.setState({ isLoading: true });
      this._hitTokenApi();
    }
    debugger;
  };
  _hitTokenApi = async () => {
    this.setState({ isLoading: true });

    await getToken(response => this.TokenApiResponse(response));
  };

  TokenApiResponse = response => {
    debugger;
    if (response != null) {
      debugger;
      if (response.data.status == 200) {
        this._hitChangePasswordAPi(response.data.response.token);

        // this.props.navigation.navigate("HomeStack",{token: });
      } else {
        setTimeout(() => {
          alert(response.data.response);
        }, 600);
      }
    } else alert("Network error, Please try again later");
  };

  _hitChangePasswordAPi = async token => {
    const { otp, phonenumber } = this.props.navigation.state.params;
    debugger;
    await changePassword({
      phonenumber,
      otp,
      token,
      newpass: this.state.confirmPassword,
      data: response => this.getForgotPassOtpResponse(response, token)
    });
  };

  getForgotPassOtpResponse = (response, token) => {
    this.setState({ isLoading: false });

    if (response != null) {
      debugger;
      if (response.data.status == 200) {
        alert("Password Changed Successfully");
        this.props.navigation.navigate("LoginScreen");
      } else if (response.state == 201) {
        alert(response.message);
      } else {
        setTimeout(() => {
          alert(response.data.message);
        }, 600);
      }
    } else alert("Network error, Please try again later");
  };

  onBack() {
    this.props.navigation.pop();
  }
  render() {
    const {
      safeAreaViewContainer,
      container,
      logoContainer,
      headingText
    } = styles;
    // const { password, phoneNumber, loginTextfieldsChangeAction } = this.props;
    // const
    return (
      <SafeAreaView style={safeAreaViewContainer}>
        <View style={container}>
          <View style={logoContainer} />
          <View style={[styles.containerRoundCorner]}>
            <TextInput
              style={styles.containerRoundCornerTextInput}
              placeholder="Password"
              placeholderTextColor={colors.textInputPlaceholder}
              onChangeText={text => this.setState({ password: text })}
              value={this.state.password}
            />
          </View>
          <View style={[styles.containerRoundCorner]}>
            <TextInput
              style={styles.containerRoundCornerTextInput}
              placeholder="Confirm Password"
              placeholderTextColor={colors.textInputPlaceholder}
              onChangeText={text => this.setState({ confirmPassword: text })}
              value={this.state.confirmPassword}
            />
          </View>
          <RoundCornerConfirmButtom
            // disabled={!LoginButtonDisable}
            text="Change Password"
            onPressHandler={this.onContinue}
          />
          {/* <RoundCornerConfirmButtom
            // disabled={!LoginButtonDisable}
            text="Back"
            onPressHandler={this.onBack.bind(this)}
          /> */}

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
  logoContainer: { marginBottom: wp("10%") },
  headingText: {
    color: colors.loginHeadingText,
    fontSize: wp("4.5%"),
    marginBottom: wp("5%")
  },
  bottomView: {
    width: "100%",
    height: 60,
    alignItems: "center",
    position: "absolute",
    bottom: 50
  },
  loading: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  containerRoundCornerTextInput: {
    flex: 1,
    color: colors.textInputText
  },
  containerRoundCorner: {
    width: "100%",
    height: wp("12%"),
    backgroundColor: colors.textInput,
    paddingLeft: wp("4%"),
    borderRadius: 6,
    marginBottom: 20
  },
  containerRoundCornerTextInput: {
    flex: 1,
    color: colors.textInputText
  }
});

const mapStateToProps = state => {
  return {
    status: state.auth.status,
    err_Message: state.auth.err_Message,
    loader: state.auth.loader
  };
};
const mapDispatchToProps = dispatch => {
  return {
    action: bindActionCreators({ getOtp, ClearAction }, dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangePasswordScreen);
