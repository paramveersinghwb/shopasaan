import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Platform,TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import colors from "../../style/colors";

export default class ShopCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.images = { shopOwner: require("../../images/shopOwner.jpg") };
  }

  render() {
    const { data,passProps } = this.props;
    const {
      entity_id,
      seller_id,
      company_locality,
      logo_pic,
      shop_title,
      country_pic,
      category
    } = data.item;
    const {
      container,
      logoImageContainer,
      logoImage,
      shopTitleText,
      addressText,
      categoryContainer,
      categoryText,
      detailsContainer
    } = styles;
    return (
      <TouchableOpacity onPress = {()=> passProps.navigation.navigate('ProuductDetails',{
        itemId: 86,
        otherParam: 'anything you want here',
      })}>
      <View style={container}>
        <View style={logoImageContainer}>
          <Image
            source={this.images.shopOwner}
            resizeMode="cover"
            style={logoImage}
          />
        </View>

        <View style={detailsContainer}>
          <Text style={shopTitleText}>{shop_title}</Text>
          <Text style={addressText}>{company_locality}</Text>
          <View style={categoryContainer}>
            <Text style={categoryText}>{category}</Text>
          </View>
        </View>
      </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: wp("30%"),
    backgroundColor: "#f4f4f4",
    marginLeft: wp("5%"),
    marginRight: wp("5%"),
    marginTop: wp("5%"),

    borderRadius: 10,
    flexDirection: "row",
    overflow: "hidden"
  },
  logoImageContainer: {
    height: wp("55%"),
    width: wp("32%")
  },
  logoImage: {
    height: wp("55%"),
    width: wp("32%")
  },
  detailsContainer: {
    marginLeft: wp("4%"),
    marginTop: wp("4%")
  },
  shopTitleText: {
    color: colors.shopCardHeading,
    fontSize: wp("4%"),
    fontWeight: "bold"
  },
  addressText: {
    color: colors.loginHeadingText,
    fontSize: wp("3.6%"),
    width: wp("50%"),
    height: wp("12%"),
    fontWeight: "600",
    marginTop: wp("1%")
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  categoryText: {
    color: colors.primaryColor,
    fontSize: wp("3%"),
    fontWeight: "bold"
  }
});
