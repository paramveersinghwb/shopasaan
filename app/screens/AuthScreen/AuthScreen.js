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
    this.bootstrapAsync();
  }

  bootstrapAsync = async () => {
    const { navigation } = this.props;

    navigation.navigate(true ? "HomeStack" : "LoginStack");
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
