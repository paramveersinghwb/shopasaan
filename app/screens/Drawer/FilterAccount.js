import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Slider,AsyncStorage } from "react-native";
import { Icon, Accordion } from "native-base";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import colors from "../../style/colors";
const dataArray = [
  { title: "All Categories", content: "Lorem ipsum dolor sit amet" },
  { title: "All Products", content: "Lorem ipsum dolor sit amet" },
  { title: "All Brands", content: "Lorem ipsum dolor sit amet" }
];
export default class FilterAccount extends Component {
  constructor(props) {
    super(props);
    this.state = { active: 1, pricerSlider: 0 };
  }

  _logout = async() => {
    AsyncStorage.clear();
    this.props.navigation.navigate("LoginScreen")
}

  _renderHeader(item, expanded) {
    const { filterAccHeader, filterAccHeaderIcon } = styles;
    return (
      <View style={filterAccHeader}>
        <Text style={{ fontWeight: "600" }}> {item.title}</Text>
        {expanded ? (
          <Icon
            style={filterAccHeaderIcon}
            type="Ionicons"
            name="md-arrow-dropdown"
          />
        ) : (
          <Icon
            style={filterAccHeaderIcon}
            type="Ionicons"
            name="md-arrow-dropup"
          />
        )}
      </View>
    );
  }
  _renderContent(item) {
    const { filterAccContent } = styles;

    return (
      <View style={filterAccContent}>
        <Text
          style={{
            backgroundColor: "#e3f1f1",
            padding: 10,
            fontStyle: "italic"
          }}
        >
          {item.content}
        </Text>
      </View>
    );
  }
  filter() {
    const {
      bodyContainer,
      priceSlider,
      filterPriceContainer,
      filterPriceText
    } = styles;
    return (
      <View style={bodyContainer}>
        <View>
          <Accordion
            dataArray={dataArray}
            animation={true}
            expanded={true}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
          />
        </View>

        <Slider
          onValueChange={pricerSlider => this.setState({ pricerSlider })}
          minimumValue={0}
          maximumValue={100}
          step={1}
          style={priceSlider}
          maximumTrackTintColor={colors.loginHeadingText}
          minimumTrackTintColor={colors.primaryColor}
        />
        <View style={filterPriceContainer}>
          <Text style={filterPriceText}>0</Text>
          <Text style={filterPriceText}>{this.state.pricerSlider}</Text>

          <Text style={filterPriceText}>100</Text>
        </View>
      </View>
    );
  }
  account() {
    const { bodyContainer, accountButton, accountButtonText } = styles;
    return (
      <View style={bodyContainer}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("myAccount")} style={accountButton}>
          <Text style={accountButtonText}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("myOrder")} style={accountButton}>
          <Text style={accountButtonText}>Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("sellwithus")} style={accountButton}>
          <Text style={accountButtonText}>Sell with us</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={accountButton}
          onPress={() =>
            this._logout()
          }
        >
          <Text style={accountButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
  logoutHandler = () => this.props.navigation.navigate("LoginScreen");

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => this.setState({ active: 1 })}
            style={[
              styles.headerButton,
              this.state.active == 1
                ? { backgroundColor: colors.primaryColor }
                : { backgroundColor: "white" }
            ]}
          >
            <Text
              style={[
                styles.headerButtonText,
                this.state.active == 1
                  ? { color: "white" }
                  : { color: colors.primaryColor }
              ]}
            >
              FILTERS
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.setState({ active: 2 })}
            style={[
              styles.headerButton,
              this.state.active == 2
                ? { backgroundColor: colors.primaryColor }
                : { backgroundColor: "white" }
            ]}
          >
            <Text
              style={[
                styles.headerButtonText,
                this.state.active == 2
                  ? { color: "white" }
                  : { color: colors.primaryColor }
              ]}
            >
              Account
            </Text>
          </TouchableOpacity>
        </View>
        {this.state.active == 1 ? this.filter() : this.account()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flexDirection: "row"
  },
  headerButton: {
    flex: 1,
    height: wp("10%"),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  headerButtonText: {
    color: colors.loginHeadingText,
    fontSize: wp("3.5%"),
    fontWeight: "bold"
  },
  bodyContainer: {
    flex: 1,
    paddingTop: wp("5%"),
    paddingLeft: wp("4%"),
    paddingRight: wp("4%")
  },
  accountButton: {
    height: wp("11%"),
    justifyContent: "center",
    alignItems: "center"
  },
  accountButtonText: {
    color: colors.loginHeadingText,
    fontSize: wp("4%"),
    fontWeight: "bold"
  },
  filterAccHeader: {
    flexDirection: "row",
    padding: wp("2%"),
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: wp("0.5%"),
    borderColor: colors.primaryColor,
    marginTop: wp("5%")
  },
  filterAccHeaderIcon: {
    color: colors.primaryColor,
    fontSize: wp("6%")
  },
  filterAccContent: {
    borderRadius: 8
  },
  priceSlider: {
    marginTop: wp("5%")
  },
  filterPriceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  filterPriceText: {
    color: colors.loginHeadingText,
    fontSize: wp("3.5%")
  }
});
