import React, { Component } from "react";
import { StyleSheet, Text, View,TouchableOpacity,AsyncStorage,Image ,TextInput} from "react-native";
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
import { login,getToken } from '../../config/fetchApi'
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';
import { changeEmail, ClearAction} from "../../actions/authActions";
import { bindActionCreators } from "redux";

 class ForgotPassScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Login Form Fields..
      password: "",
      phoneNumber: "",
      // Login Form validation fields..
      checkpassword: [],
      checkphoneNumber: [],
      isLoading:false

      /**
       * TODO: future use
       */
      // disabled: true
    };

    // this.onContinue = this.onContinue.bind(this);
  }

  async componentWillReceiveProps(nextProps) {
    debugger
    if (nextProps.status === '5001') {
        this.setState({ ErrMsg: nextProps.err_Message, })
    }
    else if (nextProps.status === '200') {
        this.props.navigation.navigate('HomeStack')
        this.clearReducerState();
        this.setState({ email: '', password: '' })
    }
    else if (nextProps.status === '100') {
        this.setState({ email: '', password: '' })
        this.clearReducerState();
    }
    else if (nextProps.status === '400') {
        this.setState({ ErrMsg: nextProps.err_Message })
    }
}


  componentWillMount() {
    /**
     * !Just for testing purpose.
     */
  }

  onContinue = () => 
  {

  if (this.state.phoneNumber == null || this.state.phoneNumber.trim().length == 0) {
      alert("Enter Mobile number")
  }
  else if (this.state.phoneNumber.length < 5 || this.state.phoneNumber.length > 15) {
      alert("Phone number is not valid")
  }
  else if (this.state.password.length != this.state.password.trim().length) {
      alert("Space is not allowed")
  }
  else if (this.state.password.trim().length == 0) {
      alert("Enter Password")
  }
 
  

  else {
          this.setState({ isLoading: true })
          this._hitTokenApi();
  }
}

_hitTokenApi = async () => {
  await getToken(this.state.phoneNumber, this.state.password, response => this.TokenApiResponse(response))
}

TokenApiResponse = (response) => {
  debugger
  this.setState({ isLoading: false })
  if (response != null) {
      debugger
      if (response.data.status == 200) {
          this._hitLoginApi(response.data.response.token,)
        // this.props.navigation.navigate("HomeStack",{token: });
     
      }
      else {
          setTimeout(() => {
              alert(response.data.response)
          }, 600);
      }
  }
  else
      alert('Network error, Please try again later')
}


_hitLoginApi = async (token) => {
  let data = { // API request data.
    "username": this.state.phoneNumber,
    "password": this.state.password,

}
  this.props.action.SignIn(data,token)

  // await login(this.state.phoneNumber, this.state.password,token, response => this.loginApiResponse(response,token))

}


loginApiResponse = (response,token) => {
  debugger
  this.setState({ isLoading: false })
  if (response != null) {
      debugger
      if (response.data.status == 200) {
        let mainToken = {'token':token}
        let userDetails = [response.data,mainToken]
        
        AsyncStorage.setItem("userData", JSON.stringify(userDetails));
        setTimeout(() => {
          this.props.navigation.navigate("HomeStack");
        }, 600);
      }
      else {
          setTimeout(() => {
              alert(response.data.message)
          }, 600);
      }
  }
  else
      alert('Network error, Please try again later')
}
ChangePassword(){
    alert('password')
}

  validatepassword(password) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(password).toLowerCase());
  }
  onSignUp (){
    this.props.navigation.navigate("SignUpScreen");
  } 
  goback(){
    this.props.navigation.navigate('LoginScreen')
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
          <View style={[styles.containerRoundCorner]}>

<TextInput
style={styles.containerRoundCornerTextInput}
placeholder="email"
placeholderTextColor={colors.textInputPlaceholder}
onChangeText={email =>this.setState({email:email})}
value={this.state.email}
/>
</View>
<RoundCornerConfirmButtom
            text="Change password"
            containerStyle={{ marginTop: wp("10%") }}
            onPressHandler={this.ChangePassword}
          />
        <RoundCornerConfirmButtom
            text="back"
            containerStyle={{ marginTop: wp("10%") }}
            onPressHandler={this.goback}
          />
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
  bottomView:{
         width: '100%', 
         height: 60, 
         alignItems: 'center',
         position: 'absolute',
         bottom: 50
       },
       loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
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
        borderRadius: 6,marginBottom:10
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
  }
}
const mapDispatchToProps = dispatch => {
  return {
      action: bindActionCreators({ changeEmail, ClearAction }, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassScreen);
