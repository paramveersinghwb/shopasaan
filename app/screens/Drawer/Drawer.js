import React, { Component } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text
} from "react-native";
import FilterAccount from "./FilterAccount";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import colors from "../../style/colors";

export const Drawer = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <FilterAccount {...navigation} />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
