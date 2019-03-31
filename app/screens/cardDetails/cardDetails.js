import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Dimensions,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity
 
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { connect } from "react-redux";
import colors from "../../style/colors";
import { Icon } from "native-base";
import { TabView, SceneMap } from 'react-native-tab-view';
import BestSeller from '../TabBar/BestSeller'
import Condiment from '../TabBar/Condiments'
import Noodle from '../TabBar/Noodles'
import NumericInput from 'react-native-numeric-input'

class ProductDetails extends React.Component {
    static navigationOptions = { header: null };

  constructor(props){
    super(props);
  }
  
  render() {

    const { container, header, shopsData } = this.props;
    debugger
    return (
      <SafeAreaView style = {{flex:1}}>
          <View style = {{flex:1}}> 
      <View style = {{flexDirection:'row',alignItems: 'center',marginTop:20}}>
      <TouchableOpacity onPress = {()=>this.props.navigation.goBack()}> 
        <Image source = {require('../../images/back.png')} style = {{heigh:24,width:24,marginLeft:20}}></Image>
        </TouchableOpacity>
        <Text style={{ textAlign: 'center', flex: 1, marginRight: 20, fontSize: 24,fontWeight: '600', }}>Card Detail</Text>
      </View>  
<View style = {{height:1,backgroundColor:'black',marginTop:15,opacity:0.4}}/>
<View style = {{marginTop:20,marginLeft:15}}>
    <Text style= {{fontSize:16,fontWeight:'600'}}> Manhas ji Kariyan store</Text>
    <Text style = {{fontSize:14,fontWeight:'400',marginTop:5}}> Sco 12, scc XXX</Text>
    <Text style = {{fontSize:14,fontWeight:'400',marginTop:5}}>Chandigrah</Text>

</View>
<View style = {{height:1,backgroundColor:'black',marginTop:20,opacity:0.4}}/>

<View style = {{marginTop:10,flexDirection:'row'}}>
<View style = {{flex:1,justifyContent:'center',alignItems:'center',marginBottom:10}}>
<Text style= {{fontSize:14,fontWeight:'500'}}>ITEM</Text>
<Text style = {{fontSize:14,fontWeight:'400',marginTop:5}}> Aashiwad Atta</Text>
<Text style = {{fontSize:14,fontWeight:'400',marginTop:5}}> 10Kg</Text>
</View>

<View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
<Text style= {{fontSize:14,fontWeight:'500',marginBottom: 5,}}>QTY</Text>
<NumericInput 
            value={1} 
            onChange={value => this.setState({value})} 
            totalWidth={90} 
            totalHeight={20} 
            iconSize={25}
            step={1.5}
            valueType='real'
            rounded 
            textColor='#B0228C' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='#EA3788' 
            leftButtonBackgroundColor='#E56B70'/>
</View>


<View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
<Text style= {{fontSize:14,fontWeight:'500'}}>Prices</Text>
<Text style = {{fontSize:14,fontWeight:'400',marginTop:5}}>$125</Text>


</View>

</View>
<View style = {{marginTop:10,flexDirection:'row'}}>
<View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
<Text style= {{fontSize:14,fontWeight:'500'}}>ITEM</Text>
<Text style = {{fontSize:14,fontWeight:'400',marginTop:5}}> Aashiwad Atta</Text>
<Text style = {{fontSize:14,fontWeight:'400',marginTop:5}}> 10Kg</Text>
</View>

<View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
<Text style= {{fontSize:14,fontWeight:'500',marginBottom:5}}>QTY</Text>
<NumericInput 
            value={1} 
            onChange={value => this.setState({value})} 
            totalWidth={90} 
            totalHeight={20} 
            iconSize={25}
            step={1.5}
            valueType='real'
            rounded 
            textColor='#B0228C' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='#EA3788' 
            leftButtonBackgroundColor='#E56B70'/>
</View>


<View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
<Text style= {{fontSize:14,fontWeight:'500'}}>Prices</Text>
<Text style = {{fontSize:14,fontWeight:'400',marginTop:5}}>$125</Text>


</View>

</View>
<View style = {{height:1,backgroundColor:'black',marginTop:80,opacity:0.4}}/>

<View style = {{marginTop:10,flexDirection:'row',}}>
<View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
<Text style= {{fontSize:16,fontWeight:'500'}}>Total</Text>
<Text style = {{fontSize:10,fontWeight:'400',marginTop:5}}>(include text charges)</Text>
<Text style = {{fontSize:14,fontWeight:'400',marginTop:5}}>converstion Chanrges</Text>
</View>


<View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
<Text style = {{fontSize:14,fontWeight:'400',marginTop:5}}>$12</Text>
<Text style = {{fontSize:14,fontWeight:'400',marginTop:5}}>$14</Text>


</View>

</View>
<View style = {{height:1,backgroundColor:'black',marginTop:20,opacity:0.4}}/>

<View style = {{marginTop:10,flexDirection:'row',}}>
<View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
<Text style= {{fontSize:16,fontWeight:'700'}}>Grand Total</Text>
</View>


<View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
<Text style= {{fontSize:14,fontWeight:'700'}}>$200</Text>


</View>

</View>
<View style={ styles.bottomView} >
            <TouchableOpacity style = {{margin:10,flex:1,borderWidth:1,backgroundColor:'blue',borderRadius:8,height: 60,justifyContent:'center' 
}} onPress = {()=> this.props.navigation.navigate('deliveryDetails')}>
                <Text style = {{textAlign:'center',fontSize:16,fontWeight:'800',color:'white'}}>Continue</Text>
             </TouchableOpacity>

</View>
      </View>
      </SafeAreaView>
    );
  }
}



export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
     
  bottomView:{
    flexDirection:'row',
         width: '100%', 
         height: 60, 
         justifyContent: 'space-between', 
         alignItems: 'center',
         position: 'absolute',
         bottom: 5
       },
});
