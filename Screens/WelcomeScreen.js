import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView, ScrollViewBase } from 'react-native';



const WelcomeScreen = ({navigation}) => {
    return (

        <SafeAreaView style={style.safeArea}>
            <ScrollView>
                <View style={style.container}>
                    <View style={style.topView}>
                        <Text style={{ fontSize: 50, fontFamily: 'Montserrat-Black' }}>GROCERY</Text>
                        <Text style={{ fontSize: 50, fontFamily: 'Montserrat-Black', color: '#FFE600' }}>SHOP</Text>
                        <View style={{ flexDirection: 'row', marginTop: 7.66 }}>
                            <View style={{ width: 9, height: 9, borderWidth: 1, borderRadius: 10, backgroundColor: '#000000' }} />
                            <View style={{ width: 46.26, height: 1.49, borderWidth: 1, borderColor: '#FFE600', marginLeft: 8, marginRight: 8, marginTop: 3 }} />
                            <View style={{ width: 9, height: 9, borderWidth: 1, borderRadius: 10, backgroundColor: '#000000' }} />
                        </View>
                        <Image style={style.cartImg} source={require('../Asset/grocies/shopping-cart.png')} />

                    </View >
                    <View style={style.middleView}>
                        <Text style={{ fontSize: 40, fontFamily: 'Montserrat-Thin' }}>Welcome to</Text>
                        <Text style={{ fontSize: 40, fontFamily: 'Montserrat-Regular' }}>Grocery App</Text>
                        <TouchableOpacity
                        style={style.loginButton}
                        onPress={() => navigation.navigate('LoginScreen')}
                        >
                            <Text style={{ marginBottom: -20, color: '#FFFFFF', width: 72, height: 24, fontSize: 20, paddingTop: 4 }}>LOG IN</Text>
                            <View style={style.LogInArrow}>
                                <Image source={require('../Asset/grocies/arrow.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={style.signupButton}
                        onPress={() => navigation.navigate('SignUpScreen')}
                        >
                            <Text style={{ marginBottom: -20, paddingTop: 4, width: 86, height: 24, fontSize: 20, color: '#009440', }}>SIGN UP</Text>
                            <View style={style.SignUpArrow}>
                                <Image source={require('../Asset/grocies/signupArrow.png')} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={style.bottomView}>
                        <Image source={require('../Asset/grocies/grocies.png')} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        width: 375,
        backgroundColor:'white'
    },
    safeArea: {
     backgroundColor: '#3CCD7B',
    },
    topView: {
        flex: 1,
        height: 225,
        backgroundColor: '#3CCD7B',
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop:40

    },
    middleView: {
        flex: 2,
        // marginTop:40,
        // backgroundColor:'grey',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomView: {
        flex: 1,
        height: 210,
    },
    loginButton: {
        marginTop: 80,
        marginBottom: 20,
        backgroundColor: '#009440',
        width: 301,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    signupButton: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#009440',

        width: 301,
        height: 55,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cartImg: {
        width: 69,
        height: 67,
        marginLeft: 250,
        marginTop: -30

    },
    LogInArrow: {

        marginLeft: 240,
        marginTop: -9,
        // width:12,
        // height:13,
        borderRadius: 20,
        backgroundColor: '#B5E2BE',

        // borderWidth: 1,
        width: 39,
        height: 39,
        justifyContent: 'center',
        alignItems: 'center',

    },
    SignUpArrow: {
        marginLeft: 240,
        marginTop: -9,
        borderRadius: 20,

        width: 39,
        height: 39,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B5E2BE',


    }
})


export default WelcomeScreen;