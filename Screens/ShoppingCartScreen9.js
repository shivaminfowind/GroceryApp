import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity, Button, ScrollView } from 'react-native';

const ShoppingCartScreen9 = ({navigation}) => {
    return (
        <SafeAreaView style={style.SafeArea}>
            <View style={style.Container}>

                <View style={style.TopView}>
                    <View style={{ flexDirection: 'row', width: 214 }}>
                        <View style={style.XButton}>
                            <Image style={{ width: 18, height: 21 }} source={require('../Asset/grocies/backArrow.png')} />
                        </View>
                        <View style={{ marginLeft: 46, marginTop: 18 }}>
                            <Text style={{ fontFamily: 'Montserrat-Black', fontSize: 18 }}>GROCERY</Text>
                        </View>
                        <View style={{ marginLeft: 5, marginTop: 18 }}>
                            <Text style={{ fontFamily: 'Montserrat-Black', fontSize: 18, color: '#FFE600' }}>SHOP</Text>
                        </View>
                        <View style={{ borderWidth: 1, width: 14, height: 14, marginLeft: 46, marginTop: 20 }}></View>

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
                        <ScrollView contentContainerStyle={{alignItems:'center'}}>
                        <View style={{marginTop:19,width:128,height:24}}>
                            <Text style={{fontFamily:'Montserrat-Bold',fontSize:20}}>Notification</Text>
                        </View>
                        <View style={{marginTop:12,width:308,height:82}}>
                            <View style={{marginLeft:12,marginTop:7,width:115,height:19}}>
                                <Text style={{fontFamily:'Montserrat-Bold',fontSize:15}}>Goodricke Tea</Text>
                            </View>
                            <View style={{marginLeft:12,width:265,height:26}}>
                                <Text style={{fontFamily:'Montserrat-Medium',fontSize:10}}>Lorem ipsum is simply dummy text of the printing </Text>
                                <Text style={{fontFamily:'Montserrat-Medium',fontSize:10}}>and typosetting industry...</Text>
                            </View>
                            <View style={{flexDirection:'row',marginLeft:12,marginTop:6}}>
                                <View style={{width:12,height:12}}>
                                    <Image source={require('../Asset/grocies/calendar.png')} />
                                </View>
                                <View style={{width:100,height:13,marginLeft:4}}>
                                    <Text style={{ fontFamily:"Montserrat-Medium",fontSize:10}}>04 September 2020</Text>
                                </View>
                                <View style={{width:12,height:12,marginLeft:10}}>
                                    <Image source={require('../Asset/grocies/clock.png')} />
                                </View>
                                <View style={{marginLeft:5,width:40, height:13,}}>
                                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:10}}>5:07 PM</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{marginTop:18,width:308,height:82}}>
                            <View style={{marginLeft:12,marginTop:7,width:115,height:19}}>
                                <Text style={{fontFamily:'Montserrat-Bold',fontSize:15}}>Goodricke Tea</Text>
                            </View>
                            <View style={{marginLeft:12,width:265,height:26}}>
                                <Text style={{fontFamily:'Montserrat-Medium',fontSize:10}}>Lorem ipsum is simply dummy text of the printing </Text>
                                <Text style={{fontFamily:'Montserrat-Medium',fontSize:10}}>and typosetting industry...</Text>
                            </View>
                            <View style={{flexDirection:'row',marginLeft:12,marginTop:6}}>
                                <View style={{width:12,height:12}}>
                                    <Image source={require('../Asset/grocies/calendar.png')} />
                                </View>
                                <View style={{width:100,height:13,marginLeft:4}}>
                                    <Text style={{ fontFamily:"Montserrat-Medium",fontSize:10}}>04 September 2020</Text>
                                </View>
                                <View style={{width:12,height:12,marginLeft:10}}>
                                    <Image source={require('../Asset/grocies/clock.png')} />
                                </View>
                                <View style={{marginLeft:5,width:40, height:13,}}>
                                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:10}}>5:07 PM</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{marginTop:18,width:308,height:82}}>
                            <View style={{marginLeft:12,marginTop:7,width:115,height:19}}>
                                <Text style={{fontFamily:'Montserrat-Bold',fontSize:15}}>Goodricke Tea</Text>
                            </View>
                            <View style={{marginLeft:12,width:265,height:26}}>
                                <Text style={{fontFamily:'Montserrat-Medium',fontSize:10}}>Lorem ipsum is simply dummy text of the printing </Text>
                                <Text style={{fontFamily:'Montserrat-Medium',fontSize:10}}>and typosetting industry...</Text>
                            </View>
                            <View style={{flexDirection:'row',marginLeft:12,marginTop:6}}>
                                <View style={{width:12,height:12}}>
                                    <Image source={require('../Asset/grocies/calendar.png')} />
                                </View>
                                <View style={{width:100,height:13,marginLeft:4}}>
                                    <Text style={{ fontFamily:"Montserrat-Medium",fontSize:10}}>04 September 2020</Text>
                                </View>
                                <View style={{width:12,height:12,marginLeft:10}}>
                                    <Image source={require('../Asset/grocies/clock.png')} />
                                </View>
                                <View style={{marginLeft:5,width:40, height:13,}}>
                                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:10}}>5:07 PM</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{marginTop:18,width:308,height:82}}>
                            <View style={{marginLeft:12,marginTop:7,width:115,height:19}}>
                                <Text style={{fontFamily:'Montserrat-Bold',fontSize:15}}>Goodricke Tea</Text>
                            </View>
                            <View style={{marginLeft:12,width:265,height:26}}>
                                <Text style={{fontFamily:'Montserrat-Medium',fontSize:10}}>Lorem ipsum is simply dummy text of the printing </Text>
                                <Text style={{fontFamily:'Montserrat-Medium',fontSize:10}}>and typosetting industry...</Text>
                            </View>
                            <View style={{flexDirection:'row',marginLeft:12,marginTop:6}}>
                                <View style={{width:12,height:12}}>
                                    <Image source={require('../Asset/grocies/calendar.png')} />
                                </View>
                                <View style={{width:100,height:13,marginLeft:4}}>
                                    <Text style={{ fontFamily:"Montserrat-Medium",fontSize:10}}>04 September 2020</Text>
                                </View>
                                <View style={{width:12,height:12,marginLeft:10}}>
                                    <Image source={require('../Asset/grocies/clock.png')} />
                                </View>
                                <View style={{marginLeft:5,width:40, height:13,}}>
                                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:10}}>5:07 PM</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{marginTop:18,width:308,height:82}}>
                            <View style={{marginLeft:12,marginTop:7,width:115,height:19}}>
                                <Text style={{fontFamily:'Montserrat-Bold',fontSize:15}}>Goodricke Tea</Text>
                            </View>
                            <View style={{marginLeft:12,width:265,height:26}}>
                                <Text style={{fontFamily:'Montserrat-Medium',fontSize:10}}>Lorem ipsum is simply dummy text of the printing </Text>
                                <Text style={{fontFamily:'Montserrat-Medium',fontSize:10}}>and typosetting industry...</Text>
                            </View>
                            <View style={{flexDirection:'row',marginLeft:12,marginTop:6}}>
                                <View style={{width:12,height:12}}>
                                    <Image source={require('../Asset/grocies/calendar.png')} />
                                </View>
                                <View style={{width:100,height:13,marginLeft:4}}>
                                    <Text style={{ fontFamily:"Montserrat-Medium",fontSize:10}}>04 September 2020</Text>
                                </View>
                                <View style={{width:12,height:12,marginLeft:10}}>
                                    <Image source={require('../Asset/grocies/clock.png')} />
                                </View>
                                <View style={{marginLeft:5,width:40, height:13,}}>
                                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:10}}>5:07 PM</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{marginTop:12,width:308,height:82}}>
                            <View style={{marginLeft:12,marginTop:7,width:115,height:19}}>
                                <Text style={{fontFamily:'Montserrat-Bold',fontSize:15}}>Goodricke Tea</Text>
                            </View>
                            <View style={{marginLeft:12,width:265,height:26}}>
                                <Text style={{fontFamily:'Montserrat-Medium',fontSize:10}}>Lorem ipsum is simply dummy text of the printing </Text>
                                <Text style={{fontFamily:'Montserrat-Medium',fontSize:10}}>and typosetting industry...</Text>
                            </View>
                            <View style={{flexDirection:'row',marginLeft:12,marginTop:6}}>
                                <View style={{width:12,height:12}}>
                                    <Image source={require('../Asset/grocies/calendar.png')} />
                                </View>
                                <View style={{width:100,height:13,marginLeft:4}}>
                                    <Text style={{ fontFamily:"Montserrat-Medium",fontSize:10}}>04 September 2020</Text>
                                </View>
                                <View style={{width:12,height:12,marginLeft:10}}>
                                    <Image source={require('../Asset/grocies/clock.png')} />
                                </View>
                                <View style={{marginLeft:5,width:40, height:13,}}>
                                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:10}}>5:07 PM</Text>
                                </View>
                            </View>
                        </View>
                        </ScrollView>
                    </View>
                </View>

            </View>
            <View style={style.TabBar}>
                    <TouchableOpacity
                    onPress={()=> navigation.navigate('TabNavigat')}
                    >
                        <Text>Home</Text>
                    </TouchableOpacity>
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
        // backgroundColor:'#3CCD7B'
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
        marginTop: 110,
        // height:550,
        height: 624,
        width: 333,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 40,
         alignItems: 'center',
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
        marginTop: 10


    },
    BottomView: {
        width: 375,
        height: 212,
        // backgroundColor: '#009440'
        // backgroundColor:'#3CCD7B'
    },
    TabBar:{
        marginTop:-94,
        height:50,
        backgroundColor:'#3BCC7A',
        borderWidth:1,
        flexDirection:'row',
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
    }
})

export default ShoppingCartScreen9;