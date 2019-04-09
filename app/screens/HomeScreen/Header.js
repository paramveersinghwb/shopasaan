import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import colors from "../../style/colors";
import { Icon } from "native-base";
import { TextInput } from "react-native-gesture-handler";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { container, headerIcon, menuButton } = styles;
    return (
      <SafeAreaView>
        <View style={container}>
          {this.props.navigation.navigation.state.isDrawerOpen ? (
            <TouchableOpacity
              style={menuButton}
              onPress={() => this.props.navigation.navigation.closeDrawer()}
            >
              <Icon type="Ionicons" name="md-close" style={headerIcon} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={menuButton}
              onPress={() => this.props.navigation.navigation.openDrawer()}
            >
              <Icon type="Ionicons" name="md-menu" style={headerIcon} />
            </TouchableOpacity>
          )}

          <Text
            style={{
              color: "white",
              fontSize: wp("5%"),
              fontWeight: "bold",
              letterSpacing: 1,
              textAlign:'center',
              flex: 1,
            }}
          >
            SHOPASAAN
          </Text>

       
        </View>
      
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: wp("14%"),
    backgroundColor: colors.primaryColor,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: wp("5%"),
    paddingRight: wp("5%")
  },
  headerIcon: {
    color: "white",
    fontSize: wp("8%")
  },
  menuButton: {
    width: wp("10%")
  },
 
});
