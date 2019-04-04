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
    Image
} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { connect } from "react-redux";
import { Icon } from "native-base";
import { RoundCornerTextInput } from "../../components/TextInputs";
import { RoundCornerConfirmButtom } from "../../components/ConfirmButtons";

class HomeScreen extends React.Component {
    static navigationOptions = { header: null };
    constructor(props) {
        super(props);

        this.state = {
            isSearch: false,
            refreshing: false,
            name: '',
            isNumber: false

        }
    }
  
 
    render() {
        const { container, header, shopsData } = this.props;
        debugger
        return (
            <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View style = {{flexDirection:'row',alignItems: 'center',marginTop:20}}>
                <TouchableOpacity onPress = {()=>this.props.navigation.goBack()}> 
    <Image source = {require('../../images/back.png')} style = {{heigh:24,width:24,marginLeft:20}}></Image>
    </TouchableOpacity>  
    <Text style={{ textAlign: 'center', flex: 1, marginRight: 20, fontSize: 24,fontWeight: '600', }}>My order</Text>
  </View> 
            <View style = {{backgroundColor:'#FFF3E0',marginTop:20,borderRadius:15}}>
                   <View style={{ marginTop: 20, marginLeft: 20 }}>
                        <Text style={{ fontSize: 16, fontWeight: '600' }}> Manhas ji Kariyan store</Text>
                        <Text style={{ fontSize: 14, fontWeight: '400', marginTop: 5 }}> Sco 12, scc XXX Chandigrah</Text>
                        <Text style={{ fontSize: 16, fontWeight: '600', opacity: 0.6, marginTop: 10 }}>Item</Text>
                        <Text style={{ fontSize: 16, fontWeight: '600' }}>Carrot 1k, milk 2kg</Text>
                        <Text style={{ fontSize: 16, fontWeight: '600', opacity: 0.6, marginTop: 10 }}>Item</Text>
                        <Text style={{ fontSize: 16, fontWeight: '600' }}>Carrot 1k, milk 2kg</Text>
                        <Text style={{ fontSize: 16, fontWeight: '600', opacity: 0.6, marginTop: 10 }}>Total</Text>
                        <Text style={{ fontSize: 16, fontWeight: '600' }}>$124</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, opacity: 0.8 }}>
                            <Text style={{ fontSize: 16, fontWeight: '600' }}>Delevery</Text>
                            <View style={{ flexDirection: 'row', marginRight: 20, alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={require('../../images/repeat.png')} resizeMode='contain' style={{ heigh: 20, width: 20, marginRight: 5 }}></Image>
                                <Text style={{ fontSize: 16, fontWeight: '400', }}>Repeat</Text>

                            </View>


                        </View>


                    </View>
                        
       </View>
       </View>
       </SafeAreaView>

        );
    }
};


export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        paddingLeft: wp("8%"),
        paddingRight: wp("8%")
    },
    searchView: {
        borderRadius: 10,
        alignSelf: 'center',
        marginHorizontal: wp("10%"),
        width: wp('90%'),
        height: wp('8%'),
        marginTop: '2%',
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
});
