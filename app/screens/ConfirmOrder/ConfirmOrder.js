import React from "react";
import {
    ActivityIndicator,
    StyleSheet,
    View,
    Dimensions,
    SafeAreaView,
    Text,
    Image,
    TouchableOpacity,
    TextInput

} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { connect } from "react-redux";
import colors from "../../style/colors";
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Icon } from "native-base";


class DeliveryDetails extends React.Component {
    static navigationOptions = { header: null };
    constructor(props) {
        super(props);
    }
    state = {
        isDateTimePickerVisible: false,
    };

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        this._hideDateTimePicker();
    };

    render() {

        const { container, header, shopsData } = this.props;
        debugger
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image source={require('../../images/back.png')} style={{ heigh: 24, width: 24, marginLeft: 20 }}></Image>
                        </TouchableOpacity>
                        <Text style={{ textAlign: 'center', flex: 1, marginRight: 20, fontSize: 24,fontWeight: '600', }}>Order Confirmation</Text>
                    </View>
                    <View style = {{flexDirection:'row',marginTop:15}}>
                    <Text style={{ fontSize: 16, fontWeight: '600' ,marginLeft:10}}>Order #</Text>    
                      <Text style={{ fontSize: 16, fontWeight: '600',color:'blue',marginLeft:5 }}>1223</Text>
                    </View>
                   


                    <View style={{ height: 1, backgroundColor: 'black', marginTop: 5, opacity: 0.4 }} />
                    <View style = {{marginTop:20,marginLeft:15}}>
    <Text style= {{fontSize:16,fontWeight:'600'}}> Manhas ji Kariyan store</Text>
    <Text style = {{fontSize:14,fontWeight:'400',marginTop:5}}> Sco 12, scc XXX</Text>
    <Text style = {{fontSize:14,fontWeight:'400',marginTop:5}}>Chandigrah</Text>

</View>
<View style={{ height: 1, backgroundColor: 'black', marginTop: 5, opacity: 0.4 }} />
<View style = {{marginTop:10,flexDirection:'row'}}>
<View style = {{flex:1,justifyContent:'center',alignItems:'center',marginBottom:10}}>
<Text style= {{fontSize:14,fontWeight:'500'}}>ITEM</Text>
<Text style = {{fontSize:14,fontWeight:'400',marginTop:5}}> Aashiwad Atta</Text>
<Text style = {{fontSize:14,fontWeight:'400',marginTop:5}}> 10Kg</Text>
</View>

<View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
<Text style= {{fontSize:14,fontWeight:'500',marginBottom: 5,}}>QTY</Text>
<Text style= {{fontSize:14,fontWeight:'500',marginBottom: 5,}}>1</Text>

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
<Text style= {{fontSize:14,fontWeight:'500',marginBottom: 5,}}>1</Text>

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



                   

                </View>
            </SafeAreaView>
        );
    }
}

 
export default DeliveryDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: wp("8%"),
        paddingRight: wp("8%")
    },
    searchView: {
        borderRadius: 10,
        backgroundColor: colors.primaryColor,
        alignSelf: 'center',
        marginHorizontal: wp("10%"),
        width: wp('90%'),
        height: wp('8%'),
        marginTop: '2%',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    scene: {
        flex: 1,
    },

    bottomView: {
        flexDirection: 'row',
        width: '100%',
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#FFF3E0',
    },
});
