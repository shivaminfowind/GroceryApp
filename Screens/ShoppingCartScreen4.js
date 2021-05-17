import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity, Button, ScrollView } from 'react-native';

const ShoppingCartScreen4 = ({navigation}) => {
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
                        <View style={{ width: 14, height: 14, marginLeft: 46, marginTop: 20 }}>
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
                    {/* <View>
                        <Image source={require('../Asset/grocies/login.png')} />
                    </View> */}
                    

                </View>
                <View style={style.MiddleView}>
                    <View style={style.loginForm}>
                        <View style={{width:125,height:24,marginTop:28,marginLeft:107}}>
                            <Text style={{fontFamily:'Montserrat-Bold',fontSize:20,}}>Track Order</Text>
                        </View>
                        <View style={{flexDirection:'row',width:177,height:18,marginTop:6,marginLeft:78}}>
                            <View>
                                <Text style={{fontFamily:'Montserrat-ExtraBold',fontSize:14}}>ORDER ID</Text>
                            </View>
                            <View>
                                <Text style={{fontFamily:'Montserrat-Medium',fontSize:14}}>:</Text>
                            </View>
                            <View>
                                <Text style={{fontFamily:'Montserrat-Medium',fontSize:14}}>#2563525985</Text>
                            </View>
                        </View>
                        <View style={style.ChkBar1}>
                            <Image style={{marginTop:3}} source={require('../Asset/grocies/chk2.png')} />
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{backgroundColor:'#009440',width:7,height:74,marginLeft:33}}></View>
                            <View style={{marginLeft:10,marginTop:20}}>
                                <Image source={require('../Asset/grocies/checkout1.png')} />
                            </View>
                            <View style={{marginLeft:19}}>
                                <View>
                                    <Text style={{color:'#009440',fontFamily:'Montserrat-Bold',fontSize:16}}>ORDER PLACED</Text>
                                </View>
                                <View style={{marginTop:5}}>
                                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:10,color:'#3A3A3A'}}>Your order has been</Text>
                                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:10,color:'#3A3A3A'}}>successfully placed.</Text>
                                </View>
                                <View style={{flexDirection:'row',marginTop:8}}>
                                    <View style={{width:12,height:12}}>
                                        <Image source={require('../Asset/grocies/calendar.png')} />
                                    </View>
                                    <View style={{width:100,height:13,marginLeft:3}}>
                                        <Text style={{fontFamily:'Montserrat-Medium', fontSize:10,color:'#3A3A3A'}}>04 September 2020</Text>
                                    </View>
                                    <View style={{width:12,height:12,marginLeft:11}}>
                                        <Image source={require('../Asset/grocies/clock.png')} />
                                    </View>
                                    <View style={{width:40,height:13,marginLeft:5}}>
                                        <Text style={{fontFamily:'Montserrat-Medium',fontSize:10,color:'#3A3A3A'}}>5:07 PM</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={style.ChkBar3}>
                            <Image style={{marginTop:3}} source={require('../Asset/grocies/chk2.png')} />
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{backgroundColor:'#009440',width:7,height:74,marginLeft:33}}></View>
                            <View style={{marginLeft:10,marginTop:20}}>
                                <Image source={require('../Asset/grocies/truck.png')} />
                            </View>
                            <View style={{marginLeft:19}}>
                                <View>
                                    <Text style={{color:'#009440',fontFamily:'Montserrat-Bold',fontSize:16}}>ORDER SHIPPED</Text>
                                </View>
                                <View style={{marginTop:5}}>
                                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:10,color:'#3A3A3A'}}>Your item has been shipped.</Text>
                                </View>
                                <View style={{flexDirection:'row',marginTop:7}}>
                                    <View style={{width:12,height:12}}>
                                        <Image source={require('../Asset/grocies/calendar.png')} />
                                    </View>
                                    <View style={{width:100,height:13,marginLeft:3}}>
                                        <Text style={{fontFamily:'Montserrat-Medium', fontSize:10,color:'#3A3A3A'}}>06 September 2020</Text>
                                    </View>
                                    <View style={{width:12,height:12,marginLeft:11}}>
                                        <Image source={require('../Asset/grocies/clock.png')} />
                                    </View>
                                    <View style={{width:40,height:13,marginLeft:5}}>
                                        <Text style={{fontFamily:'Montserrat-Medium',fontSize:10,color:'#3A3A3A'}}>2:45 PM</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        
                        <View style={style.ChkBar3}>
                            <Image style={{marginTop:3}} source={require('../Asset/grocies/chk2.png')} />
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{backgroundColor:'#009440',width:7,height:74,marginLeft:33}}></View>
                            <View style={{marginLeft:10,marginTop:20}}>
                                <Image source={require('../Asset/grocies/Tracking.png')} />
                            </View>
                            <View style={{marginLeft:19}}>
                                <View>
                                    <Text style={{color:'#009440',fontFamily:'Montserrat-Bold',fontSize:16}}>ORDER ON THE WAY</Text>
                                </View>
                                <View style={{marginTop:5}}>
                                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:10,color:'#3A3A3A'}}>Your item has been palced up by our</Text>
                                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:10,color:'#3A3A3A'}}>courier partner and it's on the way.</Text>
                                </View>
                                <View style={{flexDirection:'row',marginTop:7}}>
                                    <View style={{width:12,height:12}}>
                                        <Image source={require('../Asset/grocies/calendar.png')} />
                                    </View>
                                    <View style={{width:100,height:13,marginLeft:3}}>
                                        <Text style={{fontFamily:'Montserrat-Medium', fontSize:10,color:'#3A3A3A'}}>08 September 2020</Text>
                                    </View>
                                    <View style={{width:12,height:12,marginLeft:11}}>
                                        <Image source={require('../Asset/grocies/clock.png')} />
                                    </View>
                                    <View style={{width:40,height:13,marginLeft:5}}>
                                        <Text style={{fontFamily:'Montserrat-Medium',fontSize:10,color:'#3A3A3A'}}>1:52 PM</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={style.ChkBar3}>
                            <Image style={{marginTop:3}} source={require('../Asset/grocies/chk2.png')} />
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <View style={{backgroundColor:'#009440',width:7,height:74,marginLeft:33}}></View>
                            <View style={{marginLeft:10,marginTop:15}}>
                                <Image source={require('../Asset/grocies/sell.png')} />
                            </View>
                            <View style={{marginLeft:19}}>
                                <View>
                                    <Text style={{color:'#009440',fontFamily:'Montserrat-Bold',fontSize:16}}>ORDER DELIVERED</Text>
                                </View>
                                <View style={{marginTop:5}}>
                                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:10,color:'#3A3A3A'}}>Your item has been delivered.</Text>
                                    
                                </View>
                                <View style={{flexDirection:'row',marginTop:7}}>
                                    <View style={{width:12,height:12}}>
                                        <Image source={require('../Asset/grocies/calendar.png')} />
                                    </View>
                                    <View style={{width:100,height:13,marginLeft:3}}>
                                        <Text style={{fontFamily:'Montserrat-Medium', fontSize:10,color:'#3A3A3A'}}>09 September 2020</Text>
                                    </View>
                                    <View style={{width:12,height:12,marginLeft:11}}>
                                        <Image source={require('../Asset/grocies/clock.png')} />
                                    </View>
                                    <View style={{width:40,height:13,marginLeft:5}}>
                                        <Text style={{fontFamily:'Montserrat-Medium',fontSize:10,color:'#3A3A3A'}}>6:06 PM</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        
                        {/* <View style={{width:375,height:212, marginTop:-20,justifyContent: 'center', alignItems: 'center', opacity: 0.2 }}>
                            <Image  source={require('../Asset/grocies/grocies.png')} />
                        </View> */}
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
        marginTop: 70,
        // height:550,
        height: 574,
        width: 333,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 40,
        //  alignItems: 'center',
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
    },
    ChkBar1:{
        width:30,
        height:30,
        // borderWidth:1,
        marginTop:29,
        marginLeft:22,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#009440'
    },
    ChkBar2:{
        width:30,
        height:30,
        // borderWidth:1,
        // marginTop:29,
        marginLeft:22,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'#009440'
    },
    ChkBar3:{
        width:30,
        height:30,
        // borderWidth:1,
        // marginTop:29,
        marginLeft:22,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#009440'
    }
})

export default ShoppingCartScreen4;