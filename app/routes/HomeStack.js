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
  HomeStack: { screen: HomeStackNavigation }
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
