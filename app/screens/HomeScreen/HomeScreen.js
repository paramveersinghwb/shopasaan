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
  ScrollView
} from "react-native";
import { RoundCornerConfirmButtom } from "../../components/ConfirmButtons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { connect } from "react-redux";
import ShopCard from "./ShopCard";
import colors from "../../style/colors";

class HomeScreen extends React.Component {
  onSignOut = () => {
    this.props.navigation.navigate("LoginScreen");
  };

  render() {
    const { container, header, shopsData } = this.props;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fafafa" }}>
        <View style={container}>
          <FlatList
            keyExtractor={item => `key-${item.entity_id}`}
            data={[...shopsData]}
            renderItem={data => <ShopCard data={data} />}
            
          />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  const { shopsData } = state.HomeReducer;

  return {
    shopsData
  };
};

const mapDispatchToProps = dispatch => ({
  searchAction: text => console.log("hello")
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: wp("8%"),
    paddingRight: wp("8%")
  }
});
