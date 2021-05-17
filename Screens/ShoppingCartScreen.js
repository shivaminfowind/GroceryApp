import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity, Button ,FlatList} from 'react-native';

const Data =[
    {
        id:1,
        Name:'Goodricke Tea',
        Image:<Image source={require('../Asset/grocies/goodrick.png')} />,
        Price:148.01
    },
    {
        id:2,
        Name:'Goodricke Tea',
        Image:<Image source={require('../Asset/grocies/goodrick.png')} />,
        Price:148.01
    },
    {
        id:3,
        Name:'Goodricke Tea',
        Image:<Image source={require('../Asset/grocies/goodrick.png')} />,
        Price:148.01
    },
    {
        id:4,
        Name:'Goodricke Tea',
        Image:<Image source={require('../Asset/grocies/goodrick.png')} />,
        Price:148.01
    },
    {
        id:5,
        Name:'Goodricke Tea',
        Image:<Image source={require('../Asset/grocies/goodrick.png')} />,
        Price:148.01
    },
    {
        id:6,
        Name:'Goodricke Tea',
        Image:<Image source={require('../Asset/grocies/goodrick.png')} />,
        Price:148.01
    },
]

const ShoppingCartScreen = ({navigation}) => {
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
                            <Image source={require('../Asset/grocies/heart_outline.png')} />
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
                            <View style={{width:148,height:24,marginTop:17,marginLeft:29}}>
                                <Text style={{fontFamily:'Montserrat-Bold',fontSize:20}}>Shopping cart</Text>
                            </View>
                            <View style={{width:29,height:13,marginLeft:86,marginTop:21}}>
                                <Text style={{fontFamily:'Montserrat-Medium',fontSize:10,}}>Items</Text>
                            </View>
                            <View style={{borderRadius:20,justifyContent:'center',alignItems:'center',marginLeft:5,width:23,height:23,backgroundColor:'#FFE600',marginTop:16}}>
                                <Text style={{fontFamily:'Montserrat-Bold',fontSize:10}}>06</Text>
                            </View>
                        </View>
                        
                        <FlatList  data={Data} renderItem={({item}) => 
                            <View style={{flexDirection:'row',marginTop:12,width:317,height:99,alignSelf:'center'}}>
                                <View style={{marginTop:14,width:60,height:71}}>
                                    {/* <Image source={require('../Asset/grocies/nescafe1.png')} /> */}
                                    {item.Image}
                                </View>
                                <View>
                                    <View style={{flexDirection:'row',marginLeft:2}}>
                                        <View style={{marginTop:11,borderRadius:5,borderColor:'#3CCD7B',justifyContent:'center',alignItems:'center',width:54,height:16,borderWidth:1}}>
                                            <Text style={{color:'#3CCD7B',fontFamily:'Montserrat-Medium',fontSize:11,}}>Nescafe</Text>
                                        </View>
                                        <View style={{borderTopRightRadius:10,borderTopLeftRadius:10,borderBottomLeftRadius:10,justifyContent:'center',alignItems:'center',width:28,height:28, backgroundColor:'#FFE600',marginLeft:131,marginTop:7}}>
                                            <Image style={{width:12,height:13}} source={require('../Asset/grocies/blackheart.png')} />
                                        </View>
                                        <TouchableOpacity>
                                            <View style={{backgroundColor:'#FF4600',justifyContent:'center',alignItems:'center',borderTopLeftRadius:10,borderTopRightRadius:10,borderBottomRightRadius:10,marginLeft:6,marginTop:7,width:28,height:28}}>
                                                <Text style={{fontFamily:'Montserrat-ExtraBold',fontSize:13,color:'#FFFFFF'}}>X</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{width:109,height:16,marginTop:-3}}>
                                        <Text style={{fontFamily:'Montserrat-Bold',fontSize:13}}>{item.Name}</Text>
                                    </View>
                                    <View style={{marginTop:1,width:131,height:14}}>
                                        <Text style={{color:'#3A3A3A',fontFamily:'Montserrat-Medium',fontSize:11,}}>Nescafe Tester's Choice</Text>
                                    </View>
                                    <View style={{flexDirection:'row',marginTop:4}}>
                                        <View style={{borderRadius:10,width:20,height:20,backgroundColor:'#FFE600'}}></View>
                                        <View style={{marginLeft:4,width:52,height:22}}>
                                            <Text style={{color:'#009440',fontFamily:'Montserrat-Medium',fontSize:18}}>{item.Price}</Text>
                                        </View>
                                        <View style={{marginLeft:17,backgroundColor:'#009440',borderTopLeftRadius:10,borderTopRightRadius:10,borderBottomRightRadius:10,justifyContent:'center',alignItems:'center',width:56,height:22}}>
                                            <Text style={{fontFamily:'Montserrat-Medium',fontSize:10,color:'#FFFFFF'}}>500Grm</Text>
                                        </View>
                                        <TouchableOpacity>
                                            <View style={{backgroundColor:'#009440',borderRadius:10,marginLeft:17,alignItems:'center',flexDirection:'row',width:83,height:21}}>
                                                <View style={{marginLeft:8,width:52,height:9}}>
                                                    <Text style={{fontFamily:'Montserrat-ExtraBold',fontSize:7,color:'#FFFFFF'}}>MOVE TO BAG</Text>
                                                </View>
                                                <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#7CAE02',borderRadius:10,marginLeft:4,width:17,height:17}}>
                                                    <Image style={{width:8,height:7}} source={require('../Asset/grocies/basket.png')} />
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </View>
                            }>
                                
                        </FlatList>
                        <View style={{height:15}}></View>
                    </View>
                    <View style={{alignItems:'center',marginTop:12,flexDirection:'row'}}>
                        <TouchableOpacity>
                            <View style={{borderTopRightRadius:10,borderTopLeftRadius:10,borderBottomRightRadius:10,justifyContent:'center',alignItems:'center',marginLeft:70,flexDirection:'row',backgroundColor:'#3A3A3A',width:152, height:33,}} >
                                
                                <View style={{justifyContent:'center',width:110,height:19}}>
                                    <Text style={{fontFamily:'Montserrat-Bold',fontSize:15,color:'#FFFFFF'}}>Place order</Text>
                                </View>
                                <View style={{width:11,height:13}}>
                                    <Image source={require('../Asset/grocies/arrow.png')} />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={{borderRadius:20,marginLeft:19,width:30,height:30,backgroundColor:'#FFE600'}}></View>
                        <View style={{marginLeft:5,width:107, height:37,}}>
                            <Text style={{fontFamily:'Montserrat-Bold',fontSize:30,}}>780.05</Text>
                        </View>
                    </View>
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
        marginTop: 120,
        // height:550,
        height: 590,
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
    
})

export default ShoppingCartScreen;