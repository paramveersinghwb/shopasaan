import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import colors from "../style/colors";

export const RoundCornerTextInput = ({
  placeholder,
  propStyle,
  value,
  onChangeText,
  props
}) => (
  <View style={[styles.containerRoundCorner, propStyle]}>
    <TextInput
      style={styles.containerRoundCornerTextInput}
      placeholder={placeholder}
      placeholderTextColor={colors.textInputPlaceholder}
      onChangeText={text => onChangeText(text)}
      value={value}
      {...props}
    />
  </View>
);

const styles = StyleSheet.create({
  containerRoundCorner: {
    width: "100%",
    height: wp("12%"),
    backgroundColor: colors.textInput,
    paddingLeft: wp("4%"),
    borderRadius: 6
  },
  containerRoundCornerTextInput: {
    flex: 1,
    color: colors.textInputText
  }
});
