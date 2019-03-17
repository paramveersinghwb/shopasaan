import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Dimensions,
  SafeAreaView,
 TouchableOpacity,
 Image,
 Text
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { connect } from "react-redux";
import ShopCard from "./shopCard";
import colors from "../../style/colors";
import { Icon } from "native-base";
import { TabView, SceneMap } from 'react-native-tab-view';
import BestSeller from '../TabBar/BestSeller'
import Condiment from '../TabBar/Condiments'
import Noodle from '../TabBar/Noodles'


class ProductDetails extends React.Component {
  static navigationOptions = { header: null };

  constructor(props){
    super(props);
  }


  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Best Saller',sender:this.props },
      { key: 'second', title: 'Condiment', sender:this.props },
      { key: 'thrid', title: 'Noodles',sender:this.props },
    ],
  };






  render() {
    const { container, header, shopsData } = this.props;
    debugger
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fafafa" }}>
        <View style={container}>
        <View style = {{flexDirection:'row',alignItems: 'center',marginTop:20}}>
                    <TouchableOpacity onPress = {()=>this.props.navigation.goBack()}> 
        <Image source = {require('../../images/back.png')} style = {{heigh:24,width:24,marginLeft:20}}></Image>
        </TouchableOpacity>  
              <Text style = {{textAlign:'center',flex:1,marginRight:20}}>ProductDetails</Text>
      </View>  
        <ShopCard data={shopsData[0]} />
        </View>
        <TabView
        style = {{marginTop:10}}
        navigationState={this.state}
        renderScene={SceneMap({
          first: BestSeller,
          second: Condiment,
          thrid: Condiment
        })}
        onIndexChange={index => this.setState({ index })}
      />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  const { shopsData } = state.HomeReducer;

  return {
    shopsData
  };
};

const mapDispatchToProps = dispatch => ({
  searchAction: text => console.log("hello")
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: wp("8%"),
    paddingRight: wp("8%")
  },
  searchView:{
    borderRadius:10,
    backgroundColor: colors.primaryColor,
    alignSelf:'center',
    marginHorizontal:wp("10%"),
    width:wp('90%'),
    height:wp('8%'),
    marginTop:'2%',
    justifyContent:'space-between',
    flexDirection:'row'
  },
  scene: {
    flex: 1,
  }
});
