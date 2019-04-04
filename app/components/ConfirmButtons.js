import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import colors from "../style/colors";

export const RoundCornerConfirmButtom = ({
  text,
  containerStyle,
  textStyle,
  onPressHandler,
  disabled,
}) => (
  <TouchableOpacity
    disabled={disabled}
    style={[
      styles.containerRoundCorner,
      containerStyle,
      disabled ? { opacity: 0.6 } : { opacity: 1 }
    ]}
    onPress={onPressHandler}
  >
    <Text style={[styles.textRoundCorner, textStyle]}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  containerRoundCorner: {
    width: "100%",
    height: wp("12%"),
    backgroundColor: colors.textInputText,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginTop: wp("5%"),
  },
  textRoundCorner: {
    fontSize: wp("4.5%"),
    color: colors.white,
    fontWeight: "600"
  }
});
