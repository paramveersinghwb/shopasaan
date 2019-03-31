import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Dimensions,
  SafeAreaView,
 TouchableOpacity,
 Image,
 Text,
 FlatList
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
import { getProductList } from '../../config/fetchApi'
import { bindActionCreators,ClearAction } from "redux";
import {productList} from '../../actions/authActions'
import NumericInput from 'react-native-numeric-input'


class ProductDetails extends React.Component {
  static navigationOptions = { header: null };
  constructor(props){
    super(props);
    this.images1 = { shopOwner1: require("../../images/shop.png") };
    this.images = { shopOwner: require("../../images/shopOwner.jpg") };

    this.state={
      productsList:[],
      count: 1,
      currentPage:1,
      userDetails: '',
      accessTOken:'',
      listCount:0,
      addcardList:0
    }
  }


componentDidMount(){
  const {state} = this.props.navigation;
  console.log("PROPS " + state.params.passdata);
  let userData = state.params.passdata
  this.setState({userDetails:userData})
debugger
  let authToken = state.params.token
this.setState({accessTOken:authToken})
  debugger
  let postData = {
    'seller_id': userData.seller_id,
    'page_size':5,
    'page': 1,
  }
  this.props.action.productList(authToken,postData)


}
loadMoreData(){
  debugger
  let postData = {
    'seller_id': this.state.userDetails.seller_id,
    'page_size':this.state.count+5,
    'page': this.state.currentPage+1,
  }
  this.props.action.productList(this.state.accessTOken,postData)
}
renderFooter() {
  return (
  //Footer View with Load More button
    <View style={styles.footer}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={this.loadMoreData.bind(this)}
        //On Click of button calling loadMoreData function to load more data
        style={styles.loadMoreBtn}>
        <Text style={styles.btnText}>Load More</Text>
        {this.state.fetching_from_server ? (
          <ActivityIndicator color="white" style={{ marginLeft: 8 }} />
        ) : null}
      </TouchableOpacity>
    </View>
  );
}


async componentWillReceiveProps(nextProps) {
  debugger

  // if (Actions.currentScene == "serviceHistroy") await this.setState({ loader: nextProps.loader })
  if (nextProps.fetchService.status_code === '5001') {
      this.setState({ ErrMsg: nextProps.err_Message, })
  }
  else if (nextProps.fetchService.status == '200') {
    this.setState({
      productsList: [...this.state.productsList, ...nextProps.fetchService.response.items],
  
    });
  
      // this.setState({productsList:nextProps.fetchService.response.items})
      this.setState({ loading: false })

      debugger
  }

  else if (nnextProps.fetchService.status_code === '400') {
      this.setState({ ErrMsg: nextProps.err_Message })
  }
}
addCartPressed(){
  this.setState({addcardList:parseInt(this.state.addcardList)+1})
  
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
      <View style={container1}>
      <View style={logoImageContainer}>
        <Image
          source={this.images1.shopOwner1}
          resizeMode="cover"
          style={logoImage}
        />
      </View>

      <View style={detailsContainer}>
        <Text style={shopTitleText}>{item.name}</Text>
        <Text style={{  color: colors.loginHeadingText,
    fontSize: wp("3.6%"),
    width: wp("50%"),
    height: wp("12%"),
    fontWeight: "800",
    marginTop: wp("2%")
    }}>Price: {item.price}</Text>
        <View style={categoryContainer}>
        <View style= {{marginRight:10,alignItems:'center',justifyContent:'center',alignSelf:'center'}}>
        <NumericInput initValue={this.state.listCount}
                                value={ parseInt(this.state.listCount)}
                                onChange={(listCount) => this.setState({ listCount})}
                                 rounded minValue={0}
                                 rounded maxValue= {20}
                                 totalWidth={60}
                                 totalHeight={20}
                                 iconSize={25}
                                 step={1}
                                 valueType='real'
                                 rounded
                                 textColor='#B0228C'
                                 iconStyle={{ color: 'white' }}
                                 rightButtonBackgroundColor='#EA3788'
                                 leftButtonBackgroundColor='#E56B70'
                                 
                                 />
                                 </View>
                                 <TouchableOpacity onPress = {()=>this.addCartPressed()}>
                                 <Text style={categoryText}>Add to cart</Text>

                                 </TouchableOpacity>
        </View>
      </View>
   
    </View>
  );
}


  render() {
    const {state} = this.props.navigation;
    console.log("PROPS " + state.params.passdata);
    let userData = state.params.passdata
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
    const { container } = this.props;
    debugger
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fafafa" }}>
        <View style={container}>
        <View style = {{flexDirection:'row',alignItems: 'center',marginTop:20}}>
                    <TouchableOpacity onPress = {()=>this.props.navigation.goBack()}> 
        <Image source = {require('../../images/back.png')} style = {{height:24,width:24,marginLeft:20}}></Image>
        </TouchableOpacity>  
        <Text style={{ textAlign: 'center', flex: 1, marginRight: 20, fontSize: 24,fontWeight: '600', }}>Product Details</Text>
      </View>  
      <View style={container1}>
      <View style={logoImageContainer}>
        <Image
          source={this.images.shopOwner}
          resizeMode="cover"
          style={logoImage}
        />
      </View>

      <View style={detailsContainer}>
        <Text style={shopTitleText}>{userData.shop_title}</Text>
        <Text style={addressText}>{userData.company_locality}</Text>
        <View style={categoryContainer}>
          <Text style={categoryText}>{userData.category}</Text>
        </View>
      </View>
    </View>
        </View>

        <FlatList
         ref={ (ref) => this.componentRef.FlatList = ref}
            keyExtractor={item => `key-${item.entity_id}`}
            data={this.state.productsList}
            renderItem={this._renderItem}

            ref={(ref) => { this._listRef = ref; }}
            ListFooterComponent={this.renderFooter.bind(this)}

          />
              

             <View style={ styles.bottomView} >
            <Text style = {{marginLeft:15}}> {this.state.addcardList} item(s) added</Text>
            <TouchableOpacity onPress = {()=> this.props.navigation.navigate("cartDetails")}>
            <View style= {{flexDirection:'row',marginRight:15}}>
                <Text>View card</Text>
                <Image
            source={require('../../images/arrow.png')}
            resizeMode="cover"
            style={{height:20,width:20}}
          />
            </View>
            </TouchableOpacity>

</View>

        {/* <TabView
            tabStyle={styles.tabStyle}
        style = {{marginTop:10}}
        navigationState={this.state}
        renderScene={SceneMap({
          first: BestSeller,
          second: Condiment,
          thrid: Condiment
        })}
        onIndexChange={index => this.setState({ index })}
      /> */}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
      fetchService: state.auth.fetch_Proudcts,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      action: bindActionCreators({ productList, ClearAction }, dispatch)
  }
}

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
  },
  tabStyle: {
    opacity: 1,
    width: 'auto',
    marginRight: 2,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
    backgroundColor: 'red',
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
  loadMoreBtn: {
    padding: 10,
    backgroundColor: colors.primaryColor,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    padding: 70,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bottomView:{
    flexDirection:'row',
         width: '100%', 
         height: 60, 
         backgroundColor: '#FFF3E0',
         justifyContent: 'space-between', 
         alignItems: 'center',
         position: 'absolute',
         bottom: 0
       },
    
       textStyle:{
    
         color: '#fff',
         fontSize:22
       }
});
