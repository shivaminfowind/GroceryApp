import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

const CheckOutScreen = () => {
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
                        <View style={{ width: 14, height: 14, marginLeft: 46, marginTop: 30 }}>
                            <Image source={require('../Asset/grocies/ic_basket.png')} />
                        </View>

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
                        <View style={{flexDirection:'row'}}>
                            <View style={{marginTop:17,marginLeft:22,width:100, height:24,}}>
                                <Text style={{fontFamily:'Montserrat-Bold',fontSize:20,}}>Checkout</Text>
                            </View>
                            <View style={{width:29,height:13,marginTop:23,marginLeft:135,}}>
                                <Text style={{fontFamily:'Montserrat-Medium',fontSize:10,}}>Items</Text>
                            </View>
                            <View style={{marginTop:18,marginLeft:5,justifyContent:'center',alignItems:'center',borderRadius:20,width:23,height:23,backgroundColor:'#FFE600',}}>
                                <Text style={{fontFamily:'Montserrat-Bold',fontSize:10,}}>05</Text>
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
                        <View style={{ marginLeft: 50, marginTop: -5 }}>
                            <Text style={{ fontSize: 25, color: '#009440' }}>^</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 57, marginTop: -21 }}>
                            <View style={{ width: 1, height: 10, borderWidth: 0.6, borderColor: '#009440' }}></View>
                            <View style={{ width: 283, height: 1, borderWidth: 0.6, marginTop: 10, borderColor: '#009440' }}></View>
                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 135 }}>
                            <View style={{ marginTop: 18, width: 16, height: 1, borderWidth: 1, borderColor: '#009440' }}></View>
                            <View style={{ marginTop: 9.5, marginLeft: 8 }}>
                                <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 15, color: '#009440' }}>CONTACT DETAILS</Text>
                            </View>
                        </View>

                        <View style={{flexDirection:'row'}}>
                            <View>
                                <View style={{marginLeft:22,width:60,height:11,marginTop:12}}>
                                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:9,}}>FIRST NAME</Text>
                                </View>
                                <View style={{marginLeft:22,width:65,height:19}}>
                                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:15,}}>Geremia</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View>
                                <View style={{marginLeft:22,width:56,height:11,marginTop:10}}>
                                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:9,}}>LAST NAME</Text>
                                </View>
                                <View style={{marginLeft:22,width:87,height:19}}>
                                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:15,}}>Taglialatela</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View>
                                <View style={{marginLeft:22,width:81,height:11,marginTop:10}}>
                                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:9,}}>EMAIL ADDRESS</Text>
                                </View>
                                <View style={{marginLeft:22,width:161,height:19}}>
                                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:15,}}>Geremia@gmail.com</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View>
                                <View style={{marginLeft:22,width:83,height:11,marginTop:10}}>
                                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:9,}}>PHONE NUMBER</Text>
                                </View>
                                <View style={{marginLeft:22,width:113,height:19}}>
                                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:15,}}>+91 1253256820</Text>
                                </View>
                            </View>
                            
                        </View>
                        <View style={{ borderTopRightRadius:40,borderBottomLeftRadius:40,borderBottomRightRadius:40, width:333,height:307,backgroundColor:'#D6FFE8'}}>
                            <View style={{ flexDirection: 'row', marginLeft: 22 }}>
                                <View style={{ marginTop: 18, width: 16, height: 1, borderWidth: 1, borderColor: '#009440' }}></View>
                                <View style={{ marginTop: 9.5, marginLeft: 8 }}>
                                    <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 15, color: '#009440' }}>SHIPPING ADDRESS</Text>
                                </View>
                            </View>
                            <View>
                                <View style={{marginLeft:22,width:60,height:11,marginTop:12}}>
                                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:9,}}>COUNTRY</Text>
                                </View>
                                <View style={{marginLeft:22,width:65,height:19}}>
                                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:15,}}>India</Text>
                                </View>
                            </View>
                            <View>
                                <View style={{marginLeft:22,width:60,height:11,marginTop:12}}>
                                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:9,}}>STATE</Text>
                                </View>
                                <View style={{marginLeft:22,width:65,height:19}}>
                                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:15,}}>Madhya Pradesh</Text>
                                </View>
                            </View>
                            <View>
                                <View style={{marginLeft:22,width:60,height:11,marginTop:12}}>
                                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:9,}}>CITY</Text>
                                </View>
                                <View style={{marginLeft:22,width:65,height:19}}>
                                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:15,}}>Indore</Text>
                                </View>
                            </View>
                            <View>
                                <View style={{marginLeft:22,width:60,height:11,marginTop:12}}>
                                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:9,}}>ZIP CODE</Text>
                                </View>
                                <View style={{marginLeft:22,width:65,height:19}}>
                                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:15,}}>452001</Text>
                                </View>
                            </View>
                            <View>
                                <View style={{marginLeft:22,width:47,height:11,marginTop:10}}>
                                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:9,}}>ADDRESS</Text>
                                </View>
                                <View style={{marginLeft:22,width:219,height:19}}>
                                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:14,}}>THE VIEW Tower 1,Lad Colony</Text>  
                                </View>
                                <View style={{marginLeft:22,height:19,width:274}}>
                                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:14,}}>Y.N. Road,Above Jade Blue Showroom</Text>
                                </View>
                            </View>
                            <View style={{marginTop:15,flexDirection:'row'}}>
                                <View style={{marginLeft:22,width:237,height:18,}}>
                                    <Text style={{fontFamily:'Montserrat-Bold',fontSize:13,}}>SAVE FOR THE FUTURE PURCHASE</Text>
                                </View>
                                <View style={{marginLeft:15,width:39,height:18,borderWidth:1,borderRadius:10}}></View>
                            </View>
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
        height: 600,
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

export default CheckOutScreen;