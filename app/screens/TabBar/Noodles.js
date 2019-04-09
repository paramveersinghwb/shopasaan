import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import NumericInput from 'react-native-numeric-input'


class Wallstab extends Component {
    state = {
        refreshing: false,
        isLoading: true,
    }

    componentDidMount = () => {
    }


    render() {
        return (
            <View style = {{flex:1}}>
            <View style={{flexDirection: 'row', marginTop: 20 }}>
            <View style = {{flex:1,justifyContent:'center',alignItem:'center'}}>
                    <Text style={{ fontSize: 18, color: 'black', fontWeight: '800',textAlign:'center' }}> Maggi Noodles </Text>
                    <Text style={{ fontSize: 14, color: 'black', fontWeight: '400',textAlign:'center' }}> Pack of four</Text>
                </View>
                <View style = {{flex:1,justifyContent:'center',alignItem:'center'}}>
                    <Text style={{ fontSize: 18, color: 'black', fontWeight: '800',textAlign:'center' }}> $60</Text>
                </View>

                <TouchableOpacity>
                <View style={{ borderRadius: 5, borderWidth: 1,justifyContent:'center',alignItem:'center',flex:1,marginRight:10 }}>
                        <Text style={{ margin: 10, color: 'black', fontSize: 18,textAlign:'center' }}> Add</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style = {{height:0.5,backgroundColor:'black',marginTop:20,opacity:0.5}}/>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
            <View style = {{flex:1,justifyContent:'center',alignItem:'center',}}>
                    <Text style={{ fontSize: 18, color: 'black', fontWeight: '800',textAlign:'center' }}> Maggi Noodles </Text>
                    <Text style={{ fontSize: 14, color: 'black', fontWeight: '400',textAlign:'center' }}> Pack of four</Text>
                </View>
                <View style = {{flex:1,justifyContent:'center',alignItem:'center',textAlign:'center'}}>
                    <Text style={{ fontSize: 18, color: 'black', fontWeight: '800',textAlign:'center' }}> $60</Text>
                </View>

                <TouchableOpacity>
                <View style={{ borderRadius: 5, borderWidth: 1,justifyContent:'center',alignItem:'center',flex:1,marginRight:10 }}>
                        <Text style={{ margin: 10, color: 'black', fontSize: 18,textAlign:'center' }}> Add</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style = {{height:0.5,backgroundColor:'black',marginTop:20,opacity:0.5}}/>

            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
            <View style = {{flex:1,justifyContent:'center',alignItem:'center'}}>
                    <Text style={{ fontSize: 18, color: 'black', fontWeight: '800',textAlign:'center' }}> Maggi Noodles </Text>
                    <Text style={{ fontSize: 14, color: 'black', fontWeight: '400',textAlign:'center' }}> Pack of four</Text>
                </View>
                <View style = {{flex:1,justifyContent:'center',alignItem:'center'}}>
                    <Text style={{ fontSize: 18, color: 'black', fontWeight: '800',textAlign:'center' }}> $60</Text>
                </View>
            <View style = {{justifyContent:'center',alignItem:'center'}}>
                <NumericInput 
            value={this.state.value} 
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
            <View style = {{height:0.5,backgroundColor:'black',marginTop:20,opacity:0.5}}/>
          </View>
          <View> </View>
            </View>
        );
    }
}



export default Wallstab;