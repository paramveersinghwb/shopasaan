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

class SellWithUS extends React.Component {
    static navigationOptions = { header: null };
    constructor(props) {
        super(props);

        this.state = {
            isSearch: false,
            refreshing: false,
            name: ''

        }
    }
  
 
    render() {
        const { container, header, shopsData } = this.props;
        debugger
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20,marginBottom: 20, }}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Image source={require('../../images/back.png')} style={{ heigh: 24, width: 24, marginLeft: 20 }}></Image>
                        </TouchableOpacity>
                        <Text style={{ textAlign: 'center', flex: 1, marginRight: 20, fontSize: 24,fontWeight: '600', }}>Sell with us</Text>
                    </View>
                    <View style = {{flex:1,marginHorizontal:20}}>
                    <RoundCornerTextInput
            placeholder="Name"
            propStyle={{ marginTop: wp("7%") }}
            value={this.state.name}
            onChangeText={value =>this.setState({name:value})}
          />
                      <RoundCornerTextInput
            placeholder="Shop name "
            propStyle={{ marginTop: wp("7%") }}
            value={this.state.shopName}
            onChangeText={value =>this.setState({shopName:value})}
          />
                  <RoundCornerTextInput
            placeholder="Shop address "
            propStyle={{ marginTop: wp("7%") }}
            value={this.state.shopAddress}
            onChangeText={value =>this.setState({shopAddress:value})}
          />
              <RoundCornerTextInput
            placeholder="Contact number"
            propStyle={{ marginTop: wp("7%") }}
            value={this.state.contactNumber}
            onChangeText={value =>this.setState({contactNumber:value})}
          />
          <View style = {{flexDirection:'row',justifyContent:'center'}}>
          <RoundCornerConfirmButtom
            text="Submit"
            containerStyle={{ marginTop: wp("18%"),width : wp('30%') }}
            onPressHandler={this.onContinue}
          />
           <RoundCornerConfirmButtom
            text="Cancel"
            containerStyle={{ marginTop: wp("18%"),width :wp('30%'),marginLeft:wp('5%') }}
            onPressHandler={this.onContinue}
          />
          </View>
          </View>
       
                </View>
            </SafeAreaView>
        );
    }
};

export default SellWithUS

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
