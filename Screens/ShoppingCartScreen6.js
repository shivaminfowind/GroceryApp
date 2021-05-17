import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity, Button } from 'react-native';

const ShoppingCartScreen6 = ({navigation}) => {
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
                        <View>
                            
                        </View>
                        <View style={{marginTop:29.37,width:309.4,height:321.88,alignItems:'center'}}>
                            <View style={{alignItems:'center',marginTop:20}}>
                                <Text style={{fontFamily:'Montserrat-Bold',fontSize:22}}>Shopping cart</Text>
                            </View>
                            <View style={{alignItems:'center',marginTop:45}}>
                                <Image source={require('../Asset/grocies/online-shopping.png')} />
                            </View>
                        </View>
                        <View style={{width:234,height:27,marginTop:11.75}}>
                            <Text style={{fontFamily:'Montserrat-Bold',fontSize:22}}>Hey, It feels so light!</Text>
                        </View>
                        <View style={{width:220,height:38,alignItems:'center',marginTop:5}}>
                            <Text style={{fontFamily:'Montserrat-Medium',fontSize:15}}>There is nothing in your bag,</Text>
                            <Text style={{fontFamily:'Montserrat-Medium',fontSize:15}}>Lets add some items.</Text>
                        </View>        

                        <View style={{marginTop:31, flexDirection: 'row', borderRadius: 30, backgroundColor: '#009440', width: 203, height: 55, justifyContent: 'center', alignItems: 'center' }}>
                            <View>
                                <TouchableOpacity>
                                    <Text style={{ marginLeft: 40, width: 120, height: 24, color: '#FFFFFF', fontFamily: 'Montserrat-SemiBold', fontSize: 20 }}>SHOP NOW</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ backgroundColor: '#8DB631', marginLeft: 5, width: 39, height: 39, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginRight: 9 }}>
                                <Image style={{ width: 13, height: 15 }} source={require('../Asset/grocies/blackArrow.png')} />
                            </View>
                        </View> 
                          
                        <View style={{ marginTop: 10, justifyContent: 'center', alignItems: 'center', opacity: 0.2 }}>
                            <Image source={require('../Asset/grocies/grocies.png')} />
                        </View>

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

export default ShoppingCartScreen6;