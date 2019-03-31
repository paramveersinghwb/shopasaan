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
  RefreshControl,
  Image
} from "react-native";
import { RoundCornerConfirmButtom } from "../../components/ConfirmButtons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import ShopCard from "./ShopCard";
import colors from "../../style/colors";
import { Icon } from "native-base";
import {sellerList,searchSeller} from '../../actions/authActions'
import {connect} from 'react-redux'
import { bindActionCreators,ClearAction } from "redux";
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';

class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.images = { shopOwner: require("../../images/shopOwner.jpg") };

    this.state = {
      isSearch:false,
      refreshing: false,
      sellerData: [],
      item:0,
      bareer_key:'',
      loader: false
    }
  }

  componentDidMount() {
    debugger
    this.setState({loader:true})
    AsyncStorage.getItem("bareer_key")
        .then(res => {
            if (res) {
                this.setState({ bareer_key: res })
                this.props.action.sellerList(res)
            }
        })
}

async componentWillReceiveProps(nextProps) {
  debugger

  // if (Actions.currentScene == "serviceHistroy") await this.setState({ loader: nextProps.loader })
  if (nextProps.fetchService.status_code === '5001') {
      this.setState({ ErrMsg: nextProps.err_Message,loader:false })
  }
  else if (nextProps.fetchService.status == '200') {
      this.setState({sellerData:nextProps.fetchService.response.items,loader:false})
      this.setState({ loading: false })

      debugger
  }

  else {
    alert("Getting error")
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

_renderItem = ({item}) => {
  const {
    container1,
    logoImageContainer,
    logoImage,
    shopTitleText,
    addressText,
    categoryContainer,
    categoryText,
    detailsContainer
  } = styles;
  return (
    <TouchableOpacity onPress = {()=> this.props.navigation.navigate('ProuductDetails',{'passdata':item,'token':this.state.bareer_key})}>
      <View style={container1}>
      <View style={logoImageContainer}>
        <Image
          source={this.images.shopOwner}
          resizeMode="cover"
          style={logoImage}
        />
      </View>

      <View style={detailsContainer}>
        <Text style={shopTitleText}>{item.shop_title}</Text>
        <Text style={addressText}>{item.company_locality}</Text>
        <View style={categoryContainer}>
          <Text style={categoryText}>{item.category}</Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );
}

  render() {
    const { container, header } = this.props;
    debugger
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fafafa" }}>
        <View style={container}>
        {!this.state.isSearch ? <View style = {styles.searchView}>
       <View style = {{flexDirection:'row',flex:1}}>
       <Icon type="Ionicons" name="md-search" style={{color:'white',marginHorizontal:5,alignSelf:'center'}} />
       <View style = {{alignItems:'center',flat:1}}>
       <TextInput
       style = {{alignSelf:'center',textAlign:'center',fontSize:14}}
       onChangeText={(text) => this.setState({searchText:text})}
        placeholder= 'search here' style = {{color:'white',fontSize:14}}>
       </TextInput>
         </View>
      
       </View>
       <TouchableOpacity onPress = {()=>this.props.action.searchSeller(this.state.bareer_key,this.state.searchText)} style = {{alignSelf:'center', justifyContent: 'center',}}>
       <Text style={{color:'white',marginRight:10,placeholderColor:'white',textAlign:'center'}}>
       Search
       </Text>

       </TouchableOpacity>
        </View> : <View/>}
        
          <FlatList
         ref={ (ref) => this.componentRef.FlatList = ref}
            keyExtractor={item => `key-${item.entity_id}`}
            data={this.state.sellerData}
            renderItem={this._renderItem}

            ref={(ref) => { this._listRef = ref; }}
            refreshControl={
              <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this.doRefresh.bind(this)}
              />
            }
          />
           {this.state.loader &&
    <View style={styles.loading}>
  <Bars size={10} color="red" />
    </View>
}
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
      fetchService: state.auth.fetchService,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      action: bindActionCreators({ sellerList,searchSeller, ClearAction }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);



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
    marginTop:'2%',
    justifyContent:'space-between',
    flexDirection:'row'
  },
  container1: {
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
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
