import { StyleSheet, Dimensions } from "react-native";
import color from "./colors";

const CommonStyle = StyleSheet.create({
  textInputStyle: {
    // color: color.textInputColor,
    // fontFamily: 'Roboto-Regular',
    // borderColor: color.vLine,
    // borderWidth: 1,
    // width: Dimensions.get('window').width - 60,
    height: 40,
    fontSize: 15,
    padding: 0,
    paddingTop: 5,
    backgroundColor: "transparent",
    margin: 0
    // paddingLeft: 15,
    // borderRadius: 5,
    // paddingTop: 5,
    // paddingBottom: 5,
  },
  roundCornerStyles: {
    paddingTop: 10,
    // backgroundColor: 'transparent',
    height: 40,
    width: Dimensions.get("window").width - 60,
    borderColor: color.shadows,
    borderWidth: 0.6,
    borderRadius: 8,
    justifyContent: "center",
    // alignItems: 'center',
    paddingBottom: 10,
    fontSize: 15
  },
  roundCornerDropStyles: {
    // paddingTop: 10,
    backgroundColor: "transparent",
    height: 40,
    width: Dimensions.get("window").width - 60,
    borderColor: color.shadows,
    borderWidth: 0.6,
    borderRadius: 8,
    justifyContent: "center",
    // alignItems: 'center',
    paddingBottom: 15,
    fontSize: 15,
    paddingLeft: 2
  },
  headerCommodity: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "transparent",
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
    // width: Dimensions.get('window').width - 60,
    borderColor: color.shadows,
    borderWidth: 0.6,
    borderRadius: 8,
    justifyContent: "center"
  },
  subCommodity: {
    // paddingLeft: 10,
    // paddingRight: 10,
    backgroundColor: "transparent",
    height: 30,
    // width: Dimensions.get('window').width - 60,
    borderColor: color.shadows,
    borderWidth: 0.6,
    borderRadius: 8,
    justifyContent: "center"
  },
  navigation: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width / 3 - 20,
    height: 25
  },
  vLine: {
    height: 40,
    alignSelf: "center",
    backgroundColor: color.appColor,
    width: 2
  },

  hLine: {
    height: 1,
    backgroundColor: color.appColor,
    width: Dimensions.get("window").width
  },

  capsuleView: {
    // backgroundColor:"#ffffff",
    // width:100,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 3,
    paddingLeft: 3,
    marginRight: 5,
    marginBottom: 3,
    alignItems: "flex-start",
    borderRadius: 10,
    borderColor: color.appTitle,
    borderWidth: 2,
    justifyContent: "space-between",
    flexDirection: "row"
  },

  capsuleText: {
    marginLeft: 4,
    textAlign: "left",
    color: "#000000",

    // fontWeight :'bold',
    fontSize: 12
  },

  // to create action button view

  actionButtonView: {
    elevation: 10,
    position: "absolute",
    bottom: 30,
    right: 30,
    justifyContent: "center",
    alignItems: "center",
    // alignSelf:'center',
    backgroundColor: color.appColor,
    height: 50,
    width: 50,
    // paddingBottom:4,
    borderRadius: 25
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white"
  },
  imageUser: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  name: {
    width: Dimensions.get("window").width - 50,
    justifyContent: "center",
    paddingLeft: 20,
    // backgroundColor:"green",
    paddingRight: 20
  },

  headerText: {
    fontSize: 15,
    color: "#000000",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: 50,
    borderWidth: 0.5,
    borderColor: color.hintText,
    borderRadius: 5,
    marginTop: 6,
    marginBottom: 6,
    paddingLeft: 6
  },
  postCreateheaderText: {
    fontSize: 15,
    color: "#000000",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: 50,
    borderWidth: 0.5,
    borderColor: "#ffffff",
    borderRadius: 5,
    marginTop: 6,
    marginBottom: 6,
    paddingLeft: 6
  },

  addBtn: {
    // marginLeft:5,
    marginBottom: 12,
    // marginRight:12,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    height: 28,
    width: 28,
    borderWidth: 1,
    borderRadius: 14,
    backgroundColor: color.hintText,
    elevation: 0,
    borderColor: "#d0d0d0"
  },
  navRightBox: {
    width: 50,
    justifyContent: "center",
    // alignItems:'center',
    flexDirection: "row"
  }
});

module.exports = CommonStyle;
