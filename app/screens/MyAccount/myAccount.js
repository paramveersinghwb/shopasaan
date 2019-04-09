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

class HomeScreen extends React.Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props);

    this.state = {
      isSearch: false,
      refreshing: false,
      name: "",
      isNumber: false
    };
  }

  render() {
    const { container, header, shopsData } = this.props;
    debugger;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
              marginBottom: 20
            }}
          >
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image
                source={require("../../images/back.png")}
                style={{ heigh: 24, width: 24, marginLeft: 20 }}
              />
            </TouchableOpacity>
            <Text
              style={{
                textAlign: "center",
                flex: 1,
                marginRight: 20,
                fontSize: 24,
                fontWeight: "600"
              }}
            >
              My Account
            </Text>
          </View>
          <ScrollView style={{ flex: 1 }}>
            <View style={{ marginHorizontal: 20 }}>
              <RoundCornerTextInput
                placeholder="Name"
                propStyle={{ marginTop: wp("7%") }}
                value={this.state.name}
                onChangeText={value => this.setState({ name: value })}
              />

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: wp("5%")
                }}
              >
                <RoundCornerTextInput
                  disabled={!this.state.isNumber}
                  placeholder="phone number "
                  propStyle={{ width: wp("60%") }}
                  value={this.state.PhoneNumber}
                  onChangeText={value => this.setState({ PhoneNumber: value })}
                />
                <TouchableOpacity
                  style={{ alignItems: "center", marginLeft: 10 }}
                  onPress={() => this.setState({ PhoneNumber: true })}
                >
                  <Text
                    style={{
                      color: "black",
                      fontSize: 14,
                      textAlign: "center"
                    }}
                  >
                    Edit
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: wp("5%")
                }}
              >
                <RoundCornerTextInput
                  disabled={!this.state.email}
                  placeholder="abc@gmail.com "
                  propStyle={{ width: wp("60%") }}
                  value={this.state.shopName}
                  onChangeText={value => this.setState({ email: value })}
                />
                <TouchableOpacity
                  style={{ alignItems: "center", marginLeft: 10 }}
                  onPress={() => this.setState({ email: true })}
                >
                  <Text
                    style={{
                      color: "black",
                      fontSize: 14,
                      textAlign: "center"
                    }}
                  >
                    Edit
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                borderWidth: 1,
                marginTop: wp("5%"),
                paddingBottom: 10,
                marginHorizontal: 10
              }}
            >
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 16,
                  fontWeight: "600",
                  marginVertical: 10
                }}
              >
                {" "}
                Address
              </Text>

              <RoundCornerTextInput
                placeholder="Address line 1 "
                propStyle={{ width: wp("90%"), alignSelf: "center" }}
                value={this.state.shopAddress}
                onChangeText={value => this.setState({ shopAddress: value })}
              />
              <RoundCornerTextInput
                placeholder="Address line 2"
                propStyle={{
                  marginTop: wp("5%"),
                  width: wp("90%"),
                  alignSelf: "center"
                }}
                value={this.state.contactNumber}
                onChangeText={value => this.setState({ contactNumber: value })}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: wp("5%"),
                  marginLeft: 10
                }}
              >
                <RoundCornerTextInput
                  placeholder="City"
                  propStyle={{ width: wp("45%"), alignSelf: "center" }}
                  value={this.state.shopAddress}
                  onChangeText={value => this.setState({ shopAddress: value })}
                />
                <RoundCornerTextInput
                  placeholder="State"
                  propStyle={{
                    width: wp("45%"),
                    alignSelf: "center",
                    marginLeft: 5
                  }}
                  value={this.state.contactNumber}
                  onChangeText={value =>
                    this.setState({ contactNumber: value })
                  }
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: wp("5%")
              }}
            >
              <TouchableOpacity>
                <Text
                  style={{
                    textDecorationLine: "underline",
                    fontWeight: "600",
                    color: "##00BEDA",
                    fontSize: 15
                  }}
                >
                  Change password
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginVertical: wp("10%")
              }}
            >
              <RoundCornerConfirmButtom
                text="Save"
                containerStyle={{ width: wp("30%") }}
                onPressHandler={this.onContinue}
              />
              <RoundCornerConfirmButtom
                text="Cancel"
                containerStyle={{ width: wp("30%"), marginLeft: wp("5%") }}
                onPressHandler={this.onContinue}
              />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: wp("8%"),
    paddingRight: wp("8%")
  },
  searchView: {
    borderRadius: 10,
    alignSelf: "center",
    marginHorizontal: wp("10%"),
    width: wp("90%"),
    height: wp("8%"),
    marginTop: "2%",
    justifyContent: "space-between",
    flexDirection: "row"
  }
});
