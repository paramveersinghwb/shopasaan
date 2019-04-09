import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";

import React, { PureComponent } from "react";
import { Text, View, SafeAreaView } from "react-native";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import { Drawer } from "../screens/Drawer/Drawer";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { Icon } from "native-base";
import Header from "../screens/HomeScreen/Header";
import ProuductDetails from '../screens/ProductDetailScreen/ProductDetails'
import cartDetails from '../screens/cardDetails/cardDetails'
import DeliverDetails from '../screens/DeliveryDetails/DeliveryDetails'
import Myorder from '../screens/MyOrder/MyOrder'
import MyAccount from '../screens/MyAccount/myAccount'
import SellWithUs from '../screens/SellWithus/sellWithUs'
import ConfirmOrder from '../screens/ConfirmOrder/ConfirmOrder'

const HomeStackNavigation = createDrawerNavigator(
  {
    Account: {
      screen: HomeScreen
    }
  },
  {
    drawerPosition: "left",
    contentComponent: props => <Drawer navigation={props} />
  }
);
const HomeStack = createStackNavigator({
  HomeStack: { screen: HomeStackNavigation },
  ProuductDetails: {screen: ProuductDetails},
  cartDetails: {screen: cartDetails},
  deliveryDetails:{screen: DeliverDetails},
  myOrder:{screen: Myorder},
  myAccount:{screen: MyAccount},
  sellwithus:{screen: SellWithUs},
  confirmOrder:{screen: ConfirmOrder},


});

HomeStackNavigation.navigationOptions = navigation => {
  return {
    header: props => (
      <SafeAreaView>
        <Header navigation={navigation} />
      </SafeAreaView>
    )
  };
};

export default HomeStack;
