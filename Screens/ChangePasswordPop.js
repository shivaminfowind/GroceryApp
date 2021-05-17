import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity ,ScrollView} from 'react-native';
// import {CheckBox} from '@react-native-community/checkbox';
import CheckBox from 'react-native-check-box';
import AsyncStorage from '@react-native-community/async-storage';
import { BlurView } from "@react-native-community/blur";

 


const ChangePasswordPop = ({navigation}) =>{
    
    return(
        <SafeAreaView>
            <View style={style.Container}>
                <View>
                    <Image  blurRadius={4} style={{width:383,height:819}} source={require('../Asset/grocies/blurImg.png')} />
                </View>
                <View style={style.middleView}>
                    <View style={{width:110,height:110,backgroundColor:'#009440',marginTop:-50,borderRadius:60}}>
                    
                    </View>
                    <View style={{alignItems:'center',width:256, height:55,marginTop:14}}>
                        <Text style={{fontFamily:'Montserrat-ExtraBold',fontSize:45}}>Successful</Text>
                    </View>
                    <View style={{width:216,height:57,justifyContent:'center',alignItems:'center'}}>
                        <Text style={style.text}>Your Password has been</Text>
                        <Text style={style.text}>successfully changed</Text>
                        <Text style={style.text}>please login</Text>
                    </View>
                    <View style={{ marginTop: 49, flexDirection: 'row', borderRadius: 30, backgroundColor: '#009440', width: 203, height: 55, justifyContent: 'center', alignItems: 'center' }}>
                            <View >
                                <TouchableOpacity
                                onPress={()=> navigation.navigate('LoginScreen')}
                                >
                                    <Text style={{ marginLeft: 58, width: 72, height: 24, color: '#FFFFFF', fontFamily: 'Montserrat-SemiBold', fontSize: 20 }}>LOG IN</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ backgroundColor: '#8DB631', marginLeft: 20, width: 39, height: 39, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                                <Image style={{ width: 13, height: 15 }} source={require('../Asset/grocies/blackArrow.png')} />
                            </View>
                        </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    Container: {
        width: 375,
        height: 812,    
    },
    middleView:{
        width:333,
        height:268,
        backgroundColor:'#2ABE6A',
        marginTop:-580,
        // justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        borderRadius:50
    },
    text:{
        fontFamily:'Montserrat-Medium',
        fontSize:16,
        color:'#FFFFFF'
    }
})
export default ChangePasswordPop;