import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

const CheckOutScreen4 = () => {
    return (
        <SafeAreaView style={style.SafeArea}>
            <View style={style.Container}>

                <View style={style.TopView}>
                    <View style={{ flexDirection: 'row', width: 214 }}>
                        <View style={style.XButton}>
                            <Image style={{ width: 18, height: 21 }} source={require('../Asset/grocies/backArrow.png')} />
                        </View>
                        <View style={{ marginLeft: 46, marginTop: 26 }}>
                            <Text style={{ fontFamily: 'Montserrat-Black', fontSize: 18 }}>GROCERY</Text>
                        </View>
                        <View style={{ marginLeft: 5, marginTop: 26 }}>
                            <Text style={{ fontFamily: 'Montserrat-Black', fontSize: 18, color: '#FFE600' }}>SHOP</Text>
                        </View>
                        <View style={{ borderWidth: 1, width: 14, height: 14, marginLeft: 46, marginTop: 30 }}></View>

                    </View>

                    <View style={{ flexDirection: 'row', width: 59, height: 6, justifyContent: 'center', alignItems: 'center', marginTop: -13, marginLeft: 159 }}>
                        <View style={{ borderWidth: 1, width: 6, height: 6, borderRadius: 20, backgroundColor: '#000000' }}></View>
                        <View style={{ borderWidth: 1, width: 31, height: 1, borderColor: '#FFE600', marginRight: 5, marginLeft: 5 }}></View>
                        <View style={{ borderWidth: 1, width: 6, height: 6, borderRadius: 20, backgroundColor: '#000000' }}></View>
                    </View>
                </View>
                <View style={style.bottomView}>
                    <View>
                        <Image source={require('../Asset/grocies/login.png')} />
                    </View>

                </View>
                <View style={style.MiddleView}>
                    <View style={style.loginForm}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ width: 102, height: 24, marginLeft: 22, marginTop: 17 }}>
                                <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 20 }}>Checkout</Text>
                            </View>
                            <View style={{ width: 29, height: 13, marginLeft: 130, marginTop: 23 }}>
                                <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 10 }}>Items</Text>
                            </View>
                            <View style={{ marginLeft: 5, justifyContent: 'center', alignItems: 'center', width: 23, height: 23, backgroundColor: '#FFE600', borderRadius: 20, marginTop: 20 }}>
                                <Text style={{ width: 13, height: 13, fontFamily: 'Montserrat-Bold', fontSize: 10 }}>05</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 13 }}>
                            <View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 39, width: 20, height: 20, backgroundColor: '#3CCD7B', borderRadius: 10 }}>
                                    <Image source={require('../Asset/grocies/location.png')} />
                                </View>
                                <View style={{ marginLeft: 21, width: 57, height: 14 }}>
                                    <Text style={{ fontFamily: 'Montserrat-ExtraBold', fontSize: 11 }}>SHIPPING</Text>
                                </View>
                            </View>
                            <View style={{ marginLeft: 9, width: 25, height: 1, borderWidth: 0.6, marginTop: 26, borderColor: '#009440' }}></View>
                            <View>
                                <Image style={{ marginTop: 21, marginLeft: -4 }} source={require('../Asset/grocies/next.png')} />
                            </View>

                            <View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 26, width: 20, height: 20, backgroundColor: '#3CCD7B', borderRadius: 10 }}>
                                    <Image source={require('../Asset/grocies/credit-card.png')} />
                                </View>
                                <View style={{ width: 57, height: 14, marginLeft: 9 }}>
                                    <Text style={{ fontFamily: 'Montserrat-ExtraBold', fontSize: 11 }}>PAYMENT</Text>
                                </View>
                            </View>
                            <View style={{ marginLeft: 9, width: 25, height: 1, borderWidth: 0.6, marginTop: 26 }}></View>
                            <View>
                                <Image style={{ marginTop: 21, marginLeft: -4 }} source={require('../Asset/grocies/nextBlack.png')} />
                            </View>
                            <View style={{ marginTop: 5 }}>
                                <View style={{ marginLeft: 45 }}>
                                    <Image style={{ width: 12.66, height: 11.61 }} source={require('../Asset/grocies/checkmark.png')} />
                                </View>
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 11, color: '#3A3A3A' }}>confirmation</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ marginLeft: 143.41, marginTop: -5 }}>
                            <Text style={{ fontSize: 25, color: '#009440' }}>^</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 150, marginTop: -21 }}>
                            <View style={{ width: 1, height: 10, borderWidth: 0.6, borderColor: '#009440' }}></View>
                            <View style={{ width: 184, height: 1, borderWidth: 0.6, marginTop: 10, borderColor: '#009440' }}></View>
                        </View>

                        <View style={{ flexDirection: 'row', marginLeft: 135 }}>
                            <View style={{ marginTop: 25, width: 16, height: 1, borderWidth: 1, borderColor: '#009440' }}></View>
                            <View style={{ marginTop: 18.5, marginLeft: 8 }}>
                                <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 15, color: '#009440' }}>PAYMENT METHOD</Text>
                            </View>
                        </View>

                        <View style={{ alignItems: 'center', marginTop: 33, alignSelf: 'center', flexDirection: 'row', width: 285, height: 74, borderWidth: 1, borderRadius: 8,borderColor:'#D5D5D5'}}>
                            <View style={{ marginLeft: 16, width: 18, height: 18, borderWidth: 5, borderColor: '#3A3A3A', borderRadius: 10 }}>

                            </View>
                            <View style={{ marginLeft: 18, width: 50.29, height: 48 }}>
                                <Image source={require('../Asset/grocies/paypal.png')} />
                            </View>
                            <View style={{ marginLeft: 88, width: 72, height: 24 }}>
                                <Text style={{ fontFamily: 'Montserrat-ExtraBold', fontSize: 20 }}>PayPal</Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 33, alignSelf: 'center', flexDirection: 'row', width: 285, height: 74, borderWidth: 1, borderRadius: 8,borderColor:'#D5D5D5'}}>
                            <View style={{ marginLeft: 16, width: 18, height: 18, borderWidth: 5, borderColor: '#3A3A3A', borderRadius: 10 }}>

                            </View>
                            <View style={{ marginLeft: 18, width: 66, height: 45 }}>
                                <Image source={require('../Asset/grocies/stripe.png')} />
                            </View>
                            <View style={{ marginLeft: 73, width: 72, height: 24 }}>
                                <Text style={{ fontFamily: 'Montserrat-ExtraBold', fontSize: 20 }}>Stripe</Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 33, alignSelf: 'center', flexDirection: 'row', width: 285, height: 74, borderWidth: 1, borderRadius: 8,borderColor:'#D5D5D5'}}>
                            <View style={{ marginLeft: 16, width: 18, height: 18, borderWidth: 5, borderColor: '#3A3A3A', borderRadius: 10 }}>

                            </View>
                            <View style={{ marginLeft: 14, width: 75, height: 36 }}>
                                <Image source={require('../Asset/grocies/COD.png')} />
                            </View>
                            <View style={{ marginLeft: 64, width: 72, height: 24 }}>
                                <Text style={{ fontFamily: 'Montserrat-ExtraBold', fontSize: 20 }}>C.O.D</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 10, justifyContent: 'center', alignItems: 'center', opacity: 0.2 }}>
                            <Image source={require('../Asset/grocies/grocies.png')} />
                        </View>


                    </View>
                </View>
            </View>

            <View style={{ marginLeft: 60, marginTop: -110, flexDirection: 'row', borderRadius: 30, backgroundColor: '#009440', width: 264, height: 50, justifyContent: 'center', alignItems: 'center' }}>
                <View  >
                    <TouchableOpacity>
                        <Text style={{ marginLeft: 104, width: 74, height: 24, color: '#FFFFFF', fontFamily: 'Montserrat-SemiBold', fontSize: 20 }}>VERIFY</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: '#8DB631', marginLeft: 45, width: 39, height: 39, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginRight: 9 }}>
                    <Image style={{ width: 13, height: 15 }} source={require('../Asset/grocies/blackArrow.png')} />
                </View>
            </View>
        </SafeAreaView>
    )
}
// ------------style.css------------------

const style = StyleSheet.create({
    SafeArea: {
        backgroundColor: '#3CCD7B'
    },
    Container: {
        width: 375,
        height: 812,
        // backgroundColor:'white'
    },
    TopView: {
        flex: 1,

        width: 375,
        backgroundColor: '#3CCD7B'
    },
    MiddleView: {
        // flex: 3,
        backgroundColor: '#009440',
        borderRadius: 450,
        width: 450,
        position: 'absolute',
        height: 448,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 100,
    },
    loginForm: {
        // zIndex:10,
        marginTop: 120,
        // height:550,
        height: 624,
        width: 333,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 40,
        // alignItems: 'center',
        // opacity:0.5,

    },
    XButton: {
        width: 44,
        height: 44,
        // borderWidth:1,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: '#009440',
        marginLeft: 21,
        marginTop: 18


    },
    BottomView: {
        width: 375,
        height: 212,
        backgroundColor: '#009440'
    }
})

export default CheckOutScreen4;