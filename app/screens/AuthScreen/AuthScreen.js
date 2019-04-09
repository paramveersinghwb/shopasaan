import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  AsyncStorage,
  View
} from "react-native";

class AuthScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
this.getKey()
  }
  async getKey() {
    const { navigation } = this.props;
    try {
      const value = await AsyncStorage.getItem('userData');
      this.setState({myKey: value});
    debugger
      if(value !== null){
        navigation.navigate("HomeStack");

      }
      else{
        navigation.navigate("LoginStack");

      }

      this.bootstrapAsync();

    } catch (error) {
      console.log("Error retrieving data" + error);
      navigation.navigate("LoginStack");


    }
  }

  bootstrapAsync = async () => {

  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
}

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
