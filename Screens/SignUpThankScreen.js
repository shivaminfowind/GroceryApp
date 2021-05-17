import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

const style = StyleSheet.create({
    safeArea: {
        width: 375,
        height: 812,
        backgroundColor: '#3CCD7B',
    },
    container: {
        flex: 1,
        backgroundColor: '#3CCD7B',
        justifyContent: 'center',
        alignItems: 'center'
    },
    topView: {
        flex: 1,
        width: 375,
        height: 225,
        backgroundColor: '#3CCD7B',
        alignItems: 'center',
        
    },
    middleView: {
        
        flex: 2,
        backgroundColor: '#009440',
        borderRadius: 450,
        width: 495,
        position: 'absolute',
        height: 493,
        justifyContent: 'center',
        alignSelf: 'center',
        // marginTop:600

    },
    bottomView: {
        height: 210,
        // zIndex:0,
         position: 'absolute',
        backgroundColor: '#3CCD7B',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,

    },
    loginForm: {
        // zIndex:10,
        marginTop: 26.79,
        // height:550,
        height: 624,
        width: 333,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 40,
        alignItems: 'center',
        // opacity:0.5,

    },
    userInput: {
        borderWidth: 1,
        width: 292,
        height: 75,
        borderRadius: 10,
        marginTop: 27,
        borderColor: '#929292',
        flexDirection: 'row',

    },
    passInput: {
        borderWidth: 1,
        width: 292,
        height: 75,
        borderRadius: 10,
        borderColor: '#929292',
        marginTop: 12,
        flexDirection: 'row',
    },
    flexRow: {
        flexDirection: 'row',
        height: 18,
        width: 292,
        // backgroundColor:'red',
        marginTop: 15
    },
    XButton:{
        width:44,
        height:44,
        // borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        backgroundColor:'#009440',
        marginRight:310,
        
    }
})

const SignUpThankScreen = ({navigation}) => {
    
    return (
        <SafeAreaView style={style.safeArea}>
            <View style={style.container}>

                <View style={style.topView}>
                    <View style={style.XButton}>
                        <TouchableOpacity
                        onPress={()=> navigation.navigate('LoginScreen')}
                        >
                            <Text style={{width:14,height:24,fontFamily:'Montserrat-Bold',fontSize:20,color:'#FFFFFF' }}>X</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row', width: 214, height: 30,marginTop:5}}>
                        <View>
                            <Text style={{ fontFamily: 'Montserrat-Black', fontSize: 25 }}>GROCERY</Text>
                        </View>
                        <View>
                            <Text style={{fontFamily: 'Montserrat-Black', fontSize:25, color:'#FFE600',marginLeft:5}}>SHOP</Text>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row',width:83.77,height:9.21, justifyContent:'center',alignItems:'center',marginTop:6.92}}>
                        <View style={{borderWidth:1, width:8, height:9, borderRadius:20,backgroundColor:'#000000'}}></View>
                        <View style={{borderWidth:1, width:44.26, height:1.43, borderColor:'#FFE600',marginRight:5, marginLeft:5}}></View>
                        <View style={{borderWidth:1, width:8, height:9, borderRadius:20,backgroundColor:'#000000'}}></View>
                    </View>
                </View>

                <View style={style.bottomView}>
                    <Image source={require('../Asset/grocies/login.png')} />
                </View>

                <View style={style.middleView}>
                    <View style={{backgroundColor:'#FFFFFF', width:478,height:476,borderRadius:450,marginTop:12,alignItems:'center'}}>
                        <View style={{marginTop:89}}>
                            <Image source={require('../Asset/grocies/smile.png')} />
                        </View>
                        <View style={{marginLeft:25,marginTop:3, height:102,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontFamily:'Montserrat-Bold',fontSize:50,color:'#009440'}}>Thank you!</Text>
                        </View>
                        <View style={{marginLeft:25,justifyContent:'center',alignItems:'center',width:244,height:53}}>
                            <Text style={{fontFamily:'Montserrat-Medium',fontSize:20}}>Registration Completed</Text>
                            <Text style={{fontFamily:'Montserrat-Medium',fontSize:20}}>Enjoy Shoping!!</Text>
                        </View>
                    </View>
                    
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SignUpThankScreen;