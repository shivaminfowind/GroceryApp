import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity, Button, ScrollView } from 'react-native';

const ShoppingCartScreen5 = ({navigation}) => {
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
                        <View style={{alignItems:'center',marginTop:-6,width:333,height:229}}>
                            
                                <Image  source={require('../Asset/grocies/slack_compressed.png')} />
                            <TouchableOpacity>
                                <Image style={{marginLeft:250,marginTop:-110}} source={require('../Asset/grocies/cam_outline.png')} />
                                <Image style={{marginLeft:295,marginTop:-66}} source={require('../Asset/grocies/camera_outline.png')} />
                            </TouchableOpacity>
                        </View>
                        
                        <View style={{marginLeft:63,justifyContent:'center',alignItems:'center',marginTop:14,width:220,height:24}}>
                            <Text style={{fontFamily:'Montserrat-Bold',fontSize:20}}>Geremia Taglialatela</Text>
                        </View>
                        <View style={{flexDirection:'row',marginLeft:124,marginTop:7}}>
                            <View style={{justifyContent:'center',alignItems:'center',width:10.31,height:20}}>
                                <Image source={require('../Asset/grocies/location1.png')} />
                            </View>
                            <View style={{justifyContent:'center',alignItems:'center',width:70,height:20,marginLeft:4.81}}>
                                <Text style={{ color:'#009440',fontFamily:'Montserrat-Bold',fontSize:17}}>INDORE</Text>
                            </View>
                        </View>
                        <ScrollView>
                        <View style={{flexDirection:'row'}}>
                            <View>
                                <View style={{marginLeft:22,width:60,height:11,marginTop:12}}>
                                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:9,}}>FIRST NAME</Text>
                                </View>
                                <View style={{marginLeft:22,width:65,height:19}}>
                                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:15,}}>Geremia</Text>
                                </View>
                            </View>
                            <View  style={{marginTop:18,marginLeft:212}}>
                                <Image source={require('../Asset/grocies/person_outline.png')} />
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
                            <View  style={{marginTop:18,marginLeft:190}}>
                                <Image source={require('../Asset/grocies/person_outline.png')} />
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
                            <View style={{marginLeft:115,marginTop:18}}>
                                <Image source={require('../Asset/grocies/email_outline.png')} />
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
                            <View style={{marginLeft:163,marginTop:18}}>
                                <Image source={require('../Asset/grocies/email_outline.png')} />
                            </View>
                        </View>
                        
                        <View style={{flexDirection:'row'}}>
                            <View>
                                <View style={{marginLeft:22,width:21,height:11,marginTop:10}}>
                                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:9,}}>CITY</Text>
                                </View>
                                <View style={{marginLeft:22,width:50,height:19}}>
                                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:15,}}>Indore</Text>
                                </View>
                            </View>
                            <View style={{marginLeft:227,marginTop:18}}>
                                <Image source={require('../Asset/grocies/loc_outline.png')} />
                            </View>
                        </View>

                        <View style={{flexDirection:'row'}}>
                            <View>
                                <View style={{marginLeft:22,width:29,height:11,marginTop:10}}>
                                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:9,}}>STATE</Text>
                                </View>
                                <View style={{marginLeft:22,width:128,height:19}}>
                                    <Text style={{fontFamily:'Montserrat-Medium',fontSize:15,}}>Madhya Pradesh</Text>
                                </View>
                            </View>
                            <View style={{marginLeft:146,marginTop:18}}>
                                <Image source={require('../Asset/grocies/state_outline.png')} />
                            </View>
                        </View>
                        
                        <View style={{flexDirection:'row'}}>
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
                            <View style={{marginLeft:2,marginTop:18}}>
                                <Image source={require('../Asset/grocies/address_outline.png')} />
                            </View>
                        </View>
                        </ScrollView>
                            
                        
                    </View>
                    <TouchableOpacity
                            style={{borderRadius:25,justifyContent:'center',alignItems:'center',backgroundColor:'red',width:50,height:50,marginTop:-110,marginLeft:330}}
                            >
                                <Image style={{marginTop:-40}} source={require('../Asset/grocies/edit_outline.png')} />
                                <Image style={{marginTop:-60}} source={require('../Asset/grocies/pen_outline.png')} />
                    </TouchableOpacity>
                    <View style={{width:375,height:212, marginTop:-60,justifyContent: 'center', alignItems: 'center', opacity: 0.2 }}>
                            <Image  source={require('../Asset/grocies/grocies.png')} />
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
        marginTop: 200,
        // height:550,
        height: 600,
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
    
    
    
})

export default ShoppingCartScreen5;