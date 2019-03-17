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

import NumericInput from 'react-native-numeric-input'

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
                    <View style = {{flexDirection:'row',alignItems: 'center',marginTop:20}}>
                    <TouchableOpacity onPress = {()=>this.props.navigation.goBack()}> 
        <Image source = {require('../../images/back.png')} style = {{heigh:24,width:24,marginLeft:20}}></Image>
        </TouchableOpacity>  
              <Text style = {{textAlign:'center',flex:1,marginRight:20}}> Delivery Details </Text>
      </View>  
<View style = {{height:1,backgroundColor:'black',marginTop:15,opacity:0.4}}/>
                    <View style={{ marginTop: 20, marginHorizontal: 15 }}>
                        <Text style={{ fontSize: 16, fontWeight: '600' }}> Address</Text>
                        <TextInput
                            placeholder='House number'
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 15 }}
                            onChangeText={(text) => this.setState({ text })}
                        />

                        <TextInput
                            placeholder='Society'
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 15 }}
                            onChangeText={(text) => this.setState({ text })}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', marginHorizontal: 15 }}>
                        <TextInput
                            placeholder='Society'
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 15, flex: 1, marginRight: 15 }}
                            onChangeText={(text) => this.setState({ text })}
                        />
                        <TextInput
                            placeholder='Society'
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 15, flex: 1 }}
                            onChangeText={(text) => this.setState({ text })}
                        />

                    </View>
                    <TextInput
                        placeholder='Society'
                        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 15, marginHorizontal: 15 }}
                        onChangeText={(text) => this.setState({ text })}
                    />
                    <View style={{ flexDirection: 'row', alignItems: 'center', margin: 15 }}>
                        <TouchableOpacity>
                            <Image
                                style={{ height: 15, width: 15 }}
                                source={require('../../images/unfilledcircle.png')}
                            />
                        </TouchableOpacity>
                        <Text style={{ textAlign: 'center', marginLeft: 15, }}>Seheduled date </Text>
                    </View>

                    <View style={{ marginHorizontal: 15, alignItems: 'center', flexDirection: 'row' }}>
                        <Text style={{ marginRight: 60 }}>Date</Text>
                        <TouchableOpacity onPress={this._showDateTimePicker}>
                            <Text>9/11/2012</Text>
                        </TouchableOpacity>
                        <Image resizeMode='cover' source={require('../../images/datec.png')} style={{ height: 20, width: 20, marginLeft: 5 }}></Image>

                        <DateTimePicker
                            isVisible={this.state.isDateTimePickerVisible}
                            onConfirm={this._handleDatePicked}
                            onCancel={this._hideDateTimePicker}
                        />
                    </View>
                    <View style={{ marginHorizontal: 15, alignItems: 'center', flexDirection: 'row', marginTop: 20 }}>
                        <Text style={{ marginRight: 60 }}>Time Slot</Text>
                        <TouchableOpacity onPress={this._showDateTimePicker}>
                            <Text>9:30</Text>
                        </TouchableOpacity>
                        <Image resizeMode='cover' source={require('../../images/datec.png')} style={{ height: 20, width: 20, marginLeft: 5 }}></Image>

                        <DateTimePicker
                            isVisible={this.state.isDateTimePickerVisible}
                            onConfirm={this._handleDatePicked}
                            onCancel={this._hideDateTimePicker}
                        />
                    </View>


                    <View style={styles.bottomView} >
                        <View>
                            <Text style={{ marginLeft: 15 }}>payment Method</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ marginLeft: 15, fontSize: 12 }}>cash on delivery</Text>

                            </View>

                        </View>
                        <TouchableOpacity style = {{margin:10,borderWidth:1,backgroundColor:'blue',borderRadius:8,height: 40,justifyContent:'center' 
}} onPress = {()=> this.props.navigation.navigate('deliveryDetails')}>
                <Text style = {{textAlign:'center',fontSize:16,fontWeight:'800',color:'white',margin:5}}>Place order</Text>
             </TouchableOpacity>

                    </View>

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

export default connect(mapStateToProps, mapDispatchToProps)(DeliveryDetails);

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
        backgroundColor: colors.primaryColor,
    },
});
