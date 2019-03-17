import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  AsyncStorage,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  ScrollView,
  TextInput,
  RefreshControl
} from "react-native";
import { RoundCornerConfirmButtom } from "../../components/ConfirmButtons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { connect } from "react-redux";
import ShopCard from "./ShopCard";
import colors from "../../style/colors";
import { Icon } from "native-base";

class HomeScreen extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isSearch:false,
      refreshing: false,

      item:0,
    }
  }
  onSignOut = () => {
    this.props.navigation.navigate("LoginScreen");
  };

  //on flat list scroll view 
onscollView(){
this.setState({isSearch:true})
}
onTopScrollerView(){
  this.setState({isSearch:false})

}

doRefresh() {
  this.setState({isSearch:false})
}
  render() {
    const { container, header, shopsData } = this.props;
    debugger
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fafafa" }}>
        <View style={container}>
        {!this.state.isSearch ? <View style = {styles.searchView}>
       <View style = {{flexDirection:'row',alignItems:'center',flex:1}}>
       <Icon type="Ionicons" name="md-search" style={{color:'white',marginHorizontal:5}} />
       <TextInput placeholder= 'search here' style = {{color:'white',fontSize:18}}>
       </TextInput>
       </View>
       <Icon type="Ionicons" name="close" style={{color:'white',marginRight:10,placeholderColor:'white'}} />
        </View> : <View/>}
        
          <FlatList
         ref={ (ref) => this.componentRef.FlatList = ref}
            keyExtractor={item => `key-${item.entity_id}`}
            data={[...shopsData]}
            renderItem={(data,index) => <TouchableOpacity onPress = {()=> this.props.navigation.navigate('ProuductDetails',{shopsData:data,value:index})}>
              <ShopCard data={data} />
              </TouchableOpacity>}
            ref={(ref) => { this._listRef = ref; }}
            refreshControl={
              <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this.doRefresh.bind(this)}
              />
            }
          />
        </View>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);

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
  }
});
