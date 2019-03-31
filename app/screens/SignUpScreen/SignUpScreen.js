import React from "react";
import {
    ActivityIndicator,
    StyleSheet,
    AsyncStorage,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    SafeAreaView,
    Platform,
    ScrollView,
    TextInput,
    Image
} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { connect } from "react-redux";
import { Icon } from "native-base";
import { RoundCornerTextInput } from "../../components/TextInputs";
import { RoundCornerConfirmButtom } from "../../components/ConfirmButtons";
import { signUp } from '../../config/fetchApi'
import { validateEmailId } from '../../helper/Validations';
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';
import { bindActionCreators } from "redux";
import { SignIn, ClearAction} from "../../actions/authActions";
import colors from "../../style/colors";

class SignUP extends React.Component {
    static navigationOptions = { header: null };
    constructor(props) {
        super(props);

        this.state = {
            isSearch: false,
            refreshing: false,
            name: '',
            email:'',
            password:'',
            confirmPassword: '',
            phone:'',
            isLoading:false
        }
        this.onSignup = this.onSignup.bind(this);

    }
    onLoginPress(){
      this.props.navigation.navigate('LoginScreen')
    }
    onSignup = () => 
    {

     if (this.state.name == null || this.state.name.trim().length == 0) {
            alert("Enter First name")
        }
        else if (this.state.email == null || this.state.email.trim().length == 0) {
            alert("Enter email")
        }
        else if (!validateEmailId(this.state.email)) {
            alert("Email is not valid")
        }
        else if (this.state.phone == null || this.state.phone.trim().length == 0) {
            alert("Enter Mobile number")
        }
        else if (this.state.phone.length < 5 || this.state.phone.length > 15) {
            alert("Phone number is not valid")
        }
        else if (this.state.password.length != this.state.password.trim().length) {
            alert("Space is not allowed")
        }
        else if (this.state.password.trim().length == 0) {
            alert("Enter Password")
        }
        else if (this.state.password.length < 6) {
            alert("Password length should be greater then 6")
        }
        else if (this.state.confirmPassword.length != this.state.confirmPassword.trim().length) {
            alert("Space is not allowed")
        }
        else if (this.state.confirmPassword.trim().length == 0) {
            alert("Enter confrim password")
        }
        else if (this.state.password != this.state.confirmPassword) {
            alert("Password not matched")
        }
        else {
                this.setState({ isLoading: true })
                this._hitSignUpApi();
        }
    }

    _hitSignUpApi = async () => {
        await signUp(this.state.name, this.state.email, this.state.phone, this.state.password, response => this.signUpApiResponse(response))
    }

    signUpApiResponse = (response) => {
        this.setState({ isLoading: false })
        if (response != null) {
            debugger
            if (response.status == 200) {
                AsyncStorage.setItem("userData", JSON.stringify(response.data));

              setTimeout(() => {
                this.props.navigation.pop();
                this.props.navigation.navigate("HomeScreen");

                   alert('Acccount sucessfully created, login now')
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
  

  
 
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style = {{flex:1}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20,marginBottom: 20, }}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image source={require('../../images/back.png')} style={{ heigh: 24, width: 24, marginLeft: 20 }}></Image>
                        </TouchableOpacity>
                        <Text style={{ textAlign: 'center', flex: 1, marginRight: 20, fontSize: 24,fontWeight: '600', }}>Sign up</Text>
                    </View>
                    <View style = {{flex:1,marginHorizontal:20}}>
                    <View style={[styles.containerRoundCorner]}>

                    <TextInput
      style={styles.containerRoundCornerTextInput}
      placeholder= 'name'
      placeholderTextColor={colors.textInputPlaceholder}
      onChangeText={name =>this.setState({name:name})}
      value={this.state.name}
    />
    </View>
    <View style={[styles.containerRoundCorner]}>

<TextInput
style={styles.containerRoundCornerTextInput}
placeholder= 'email'
placeholderTextColor={colors.textInputPlaceholder}
onChangeText={email =>this.setState({email:email})}
value={this.state.email}
/>
</View>

<View style={[styles.containerRoundCorner]}>

<TextInput
style={styles.containerRoundCornerTextInput}
placeholder= 'Mobile'
placeholderTextColor={colors.textInputPlaceholder}
onChangeText={phone =>this.setState({phone:phone})}
value={this.state.phone}
/>
</View>
<View style={[styles.containerRoundCorner]}>

<TextInput
style={styles.containerRoundCornerTextInput}
placeholder= 'Password'
placeholderTextColor={colors.textInputPlaceholder}
onChangeText={password =>this.setState({password:password})}
value={this.state.password}
secureTextEntry={true}
/>
</View>
<View style={[styles.containerRoundCorner]}>

<TextInput
style={styles.containerRoundCornerTextInput}
placeholder="Re-Password"
placeholderTextColor={colors.textInputPlaceholder}
onChangeText={confirmPassword =>this.setState({confirmPassword:confirmPassword})}
value={this.state.confirmPassword}
secureTextEntry={true}
/>
</View>
          <View style = {{flexDirection:'row',justifyContent:'center'}}>
          <RoundCornerConfirmButtom
            text="Sign up"
            containerStyle={{ marginTop: wp("10%") }}
            onPressHandler={this.onSignup}
          />
         
          </View>
          </View>
          <View style = {styles.bottomView}>
            <Text style = {{fontSize:16,fontWeight:'600',marginBottom:5}}>Already have account?</Text>
            <TouchableOpacity onPress = {()=>this.onLoginPress()}>
            <Text style = {{color:'#FF6E40',fontSize:14,fontWeight:'600',}}>Login</Text>
            </TouchableOpacity>
      
  </View>
  {this.state.isLoading &&
    <View style={styles.loading}>
  <Bars size={10} color="red" />
    </View>
}
  </ScrollView>
 
            </SafeAreaView>
        );
    }
};
const mapStateToProps = state => {
    return {
        status: state.auth.status,
        err_Message: state.auth.err_Message,
        loader: state.auth.loader
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
        action: bindActionCreators({   }, dispatch)
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(SignUP);
  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        paddingLeft: wp("8%"),
        paddingRight: wp("8%")
    },
  
    bottomView:{
      marginTop:wp('10'),
      width: '100%', 
      height: 60, 
      alignItems: 'center',
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
      containerRoundCorner: {
        width: "100%",
        height: wp("12%"),
        backgroundColor: colors.textInput,
        paddingLeft: wp("4%"),
        borderRadius: 6,
        marginTop: wp("7%")
      },
      containerRoundCornerTextInput: {
        flex: 1,
        color: colors.textInputText
      }
});
