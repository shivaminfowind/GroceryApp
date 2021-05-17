import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const style = StyleSheet.create({
    Container:{
        width:375,
        height:812,
        // backgroundColor:'green',
        alignItems:'center'
    },
    TopView:{
        width:375,
        height:113,
        backgroundColor:'#3CCD7B',
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50
    },
    MiddleView:{
        width:333,
        height:649,
        backgroundColor:'#FFFFFF',
        marginTop:-40,
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        // justifyContent:'center',
        // alignItems:'center'
    },
    BottomView:{
        width:375,
        height:50,
        backgroundColor:'#3BCC7A',
        borderTopLeftRadius:20,
        borderTopRightRadius:20
    },
    text:{
        transform: [{ rotate: '270deg'}],
        
        fontFamily:'Montserrat-ExtraBold',
        fontSize:15,
        color:'#009440',
        width:64,
        height:19,
        // backgroundColor:'red',
        marginTop:-40,
        marginRight:-10

    },
    backButton:{
        width:44,
        height:44,
        // borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        backgroundColor:'#009440',
        marginTop:12,
        marginLeft:21
    },
    Weight:{
        borderWidth:1,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        borderBottomRightRadius:10

    }
})

const ProductDetailScreen1 = () =>{
    return(

        <SafeAreaView >
            <View style={style.Container}>
                <View style={style.TopView}>
                    <View style={{flexDirection:'row',height:44}}>
                        <View style={style.backButton}>
                            <TouchableOpacity>
                                <Image style={{ width: 18, height: 21 }} source={require('../Asset/grocies/backArrow.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={{marginTop:22, marginLeft:46}}>
                            <Text style={{height:22, fontFamily:'Montserrat-Black',fontSize:18}}>GROCERY</Text>
                        </View>
                        <View style={{marginTop:22, marginLeft:5}}>
                           <Text style={{height:22, fontFamily:'Montserrat-Black',fontSize:18,color:'#FFE600'}}>SHOP</Text>
                        </View>
                        <View style={{borderWidth:1,width:14,height:14,marginLeft:46,marginTop:24}}></View>
                        <View style={{borderWidth:1,width:16,height:14,marginLeft:10,marginTop:24}}></View>
                    </View>
                    <View style={{flexDirection:'row',height:6,width:59,justifyContent:'center',alignItems:'center',marginLeft:159,marginTop:1}}>
                           <View style={{width:6,height:6,borderWidth:1,borderRadius:5,backgroundColor:'#000000'}}></View>
                           <View style={{width:31,height:1,borderWidth:1,marginRight:8,marginLeft:8,borderColor:'#FFE600'}}></View>
                           <View style={{width:6,height:6,borderWidth:1,borderRadius:5,backgroundColor:'#000000'}}></View>
                    </View>

                </View>
                <View style={style.MiddleView}>

                    <View style={{marginLeft:60,flexDirection:'row', marginTop:20,width:208, height:180,justifyContent:'center',alignItems:'center'}}>
                        <View >
                            <Text style={style.text}>In stock</Text>
                        </View>
                        <View style={{width:105,height:180,justifyContent:'center',alignItems:'center',marginRight:50}}> 
                            <Image style={{width:208,height:208}} source={require('../Asset/grocies/Coffee.png')} />
                        </View>
                    </View>
                    <View style={{flexDirection:'row',height:11,marginLeft:130}}>
                        <View style={{height:11,width:11,borderWidth:1,borderRadius:10,borderColor:'#707070'}}></View>
                        <View style={{height:11,width:30,borderWidth:1,borderRadius:10,marginLeft:4,marginRight:4,backgroundColor:'#009440',borderColor:'#009440'}}></View>
                        <View style={{height:11,width:11,borderWidth:1,borderRadius:10,borderColor:'#707070'}}></View>

                    </View>
                    <View style={{marginTop:9,marginLeft:25,borderRadius:5,width:66,height:19,borderWidth:1,justifyContent:'center',alignItems:'center',borderColor:'#3CCD7B'}}>
                        <Text style={{color:'#3CCD7B',fontFamily:'Montserrat-Bold',fontSize:13}}>Nescafe</Text>
                    </View>
                    <View style={{width:252,height:37,marginTop:3,marginLeft:25}}>
                        <Text style={{fontFamily:'Montserrat-ExtraBold',fontSize:30}}>Nascafe Tasters</Text>
                    </View>
                    <View style={{flexDirection:'row',height:34,marginTop:5,alignItems:'center',marginLeft:25}}>
                        <View style={{width:31,height:31,borderRadius:20,backgroundColor:'#FFE600'}}></View>
                        <View style={{width:91,height:34,marginLeft:5}}>
                            <Text style={{fontFamily:'Montserrat-Medium',fontSize:28,color:'#009440'}}>148.00</Text>
                        </View>
                        <View style={{width:98,height:19,marginLeft:12}}>
                            <Text style={{fontFamily:'Montserrat-Medium',fontSize:15}}>1pc : 200Grm</Text>
                        </View>
                        <View style={{backgroundColor:'#3CCD7B',marginLeft:32,width:29,height:78,borderWidth:1,marginTop:40,borderRadius:20,alignItems:'center'}}>
                            <View style={{alignItems:'center',justifyContent:'center',width:19,height:21,borderWidth:1,marginTop:5,borderRadius:10}}>
                                <TouchableOpacity>
                                    <Text style={{fontFamily:'Montserrat-Regular',fontSize:16}}>+</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{justifyContent:'center',alignItems:'center',width:14,height:16,marginTop:5}}>
                                <Text style={{fontFamily:'Montserrat-ExtraBold',fontSize:13}}>01</Text>
                            </View>
                            <View style={{alignItems:'center',justifyContent:'center',width:19,height:21,borderWidth:1,borderRadius:10}}>
                                <TouchableOpacity>
                                    <Text style={{fontFamily:'Montserrat-Regular',fontSize:16}}>-</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        
                    </View>
                    <View style={{width:97, height:11,marginLeft:65}}>
                        <Text style={{fontFamily:'Montserrat-Medium',fontSize:9}}>(Inclusive of all taxes)</Text>
                    </View>
                    <View style={{marginLeft:25,width:280,height:15,marginTop:14,flexDirection:'row'}}>
                        <View style={{flexDirection:'row',backgroundColor:'#C8FFE0',width:33,height:11}}>
                            <View style={{justifyContent:'center',alignItems:'center',width:9,height:15}}>
                                <Text style={{fontFamily:'Montserrat-ExtraBold',fontSize:20,color:'#009440'}}>*</Text>
                            </View>
                            <View style={{marginLeft:2,justifyContent:'center',alignItems:'center',width:13,height:15}}>
                                <Text style={{fontFamily:'Montserrat-Bold',fontSize:9}}>4.2</Text>
                            </View>
                        </View>
                        <View style={{width:119,height:15,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontFamily:'Montserrat-Medium',fontSize:9}}>2512 Rating & 102 reviews -</Text>
                        </View>
                    </View>
                    <View style={{width:65,height:13,marginTop:17,marginLeft:25}}>
                        <Text style={{fontFamily:'Montserrat-ExtraBold',fontSize:10}}>PACK SIZES</Text>
                    </View>
                    <View style={{marginLeft:25,alignItems:'center',flexDirection:'row',height:22,marginTop:10}}>
                        <View style={{borderColor:'#C9C9C9',borderWidth:1,borderTopLeftRadius:5,borderTopRightRadius:5,borderBottomRightRadius:5,width:56,height:22,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontFamily:'Montserrat-Medium',fontSize:10}}>50Grm</Text>
                        </View>
                        <View style={{borderColor:'#C9C9C9',borderWidth:1,borderTopLeftRadius:5,borderTopRightRadius:5,borderBottomRightRadius:5,width:56,height:22,marginLeft:9,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontFamily:'Montserrat-Medium',fontSize:10}}>100Grm</Text>
                        </View>
                        <View style={{backgroundColor:'#009440',borderColor:'#009440',borderWidth:1,borderTopLeftRadius:5,borderTopRightRadius:5,borderBottomRightRadius:5,width:56,height:22,marginLeft:11,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontFamily:'Montserrat-Medium',fontSize:10}}>200Grm</Text>
                        </View>
                        <View style={{borderColor:'#C9C9C9',borderWidth:1,borderTopLeftRadius:5,borderTopRightRadius:5,borderBottomRightRadius:5,marginLeft:10,justifyContent:'center',alignItems:'center',width:56,height:22}}>
                            <Text style={{fontFamily:'Montserrat-Medium',fontSize:10}}>500Grm</Text>
                        </View>
                        <View style={{borderColor:'#C9C9C9',borderWidth:1,borderTopLeftRadius:5,borderTopRightRadius:5,borderBottomRightRadius:5,marginLeft:10,justifyContent:'center',alignItems:'center', width:35,height:22}}>
                            <Text style={{fontFamily:'Montserrat-Medium',fontSize:10}}>1kg</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',marginTop:17,marginLeft:25,alignItems:'center'}}>
                        <View style={{width:11,height:2,borderWidth:2}}></View>
                        <View style={{width:193,height:19,marginLeft:7}}>
                            <Text style={{fontFamily:'Montserrat-ExtraBold',fontSize:15}}>PRODUCT DESCRIPTION</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',marginTop:7,marginLeft:25,alignItems:'center'}}>
                        <View style={{width:38,height:15}}>
                            <Text style={{fontFamily:'Montserrat-Bold',fontSize:12}}>Brand</Text>
                        </View>
                        <View style={{marginLeft:90,width:142,height:15}}>
                            <Text style={{fontFamily:'Montserrat-Medium',fontSize:12}}>Nescafe Taster's Choice</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',marginTop:7,marginLeft:25,alignItems:'center'}}>
                        <View style={{width:38,height:15}}>
                            <Text style={{fontFamily:'Montserrat-Bold',fontSize:12}}>Flavor</Text>
                        </View>
                        <View style={{marginLeft:90,width:142,height:15}}>
                            <Text style={{fontFamily:'Montserrat-Medium',fontSize:12}}>House Blend Decaf</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',marginTop:7,marginLeft:25,alignItems:'center'}}>
                        <View style={{width:105,height:15}}>
                            <Text style={{fontFamily:'Montserrat-Bold',fontSize:12}}>Caffeine Content</Text>
                        </View>
                        <View style={{marginLeft:24,width:86,height:15}}>
                            <Text style={{fontFamily:'Montserrat-Medium',fontSize:12}}>Decaffeinated</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',marginTop:7,marginLeft:25,alignItems:'center'}}>
                        <View style={{width:57,height:15}}>
                            <Text style={{fontFamily:'Montserrat-Bold',fontSize:12}}>Specialty</Text>
                        </View>
                        <View style={{marginLeft:72,width:42,height:15}}>
                            <Text style={{fontFamily:'Montserrat-Medium',fontSize:12}}>Kosar</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',marginTop:7,marginLeft:25,alignItems:'center'}}>
                        <View style={{width:95,height:15}}>
                            <Text style={{fontFamily:'Montserrat-Bold',fontSize:12}}>Container Type</Text>
                        </View>
                        <View style={{marginLeft:35,width:23,height:15}}>
                            <Text style={{fontFamily:'Montserrat-Medium',fontSize:12}}>Box</Text>
                        </View>
                    </View>
                    <View style={{marginLeft:25, flexDirection:'row',marginTop:9}}>
                        <View style={{backgroundColor:'#3CCD7B', justifyContent:'center',alignItems:'center', width:11,height:11,borderRadius:5}}>
                            <View style={{backgroundColor:'#FFFFFF', width:5,height:3}}></View>
                        </View>
                        <View style={{ width:64,height:13,marginLeft:5}}>
                            <Text style={{color:'#009440',fontFamily:'Montserrat-ExtraBold',fontSize:10}}>SEE MORE...</Text>
                        </View>
                    </View>
                    <View style={{height:33,marginTop:16,flexDirection:'row',marginLeft:25}}>
                        <View style={{borderBottomRightRadius:5,borderTopLeftRadius:5,borderTopRightRadius:5,backgroundColor:'#009440',justifyContent:'center',alignItems:'center', flexDirection:'row',width:120,height:33}}>
                            <View style={{backgroundColor:'#FFFFFF',width:11,height:13}}>

                            </View>
                            <View style={{marginLeft:10}}>
                                <TouchableOpacity>
                                    <Text style={{fontFamily:'Montserrat-Bold',fontSize:11,color:'#FFFFFF'}}>ADD TO CART</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{borderRadius:5,marginLeft:10,backgroundColor:'#3A3A3A',justifyContent:'center',alignItems:'center', flexDirection:'row',width:120,height:33}}>
                            
                            <View style={{marginRight:7}}>
                                <TouchableOpacity>
                                    <Text style={{fontFamily:'Montserrat-Bold',fontSize:11,color:'#FFFFFF'}}>ORDER NOW</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{backgroundColor:'#3A3A3A',width:11,height:13}}>
                                <Image source={require('../Asset/grocies/arrow.png')} />
                            </View>
                        </View>
                        <View style={{justifyContent:'center',alignItems:'center',width:36,height:33, backgroundColor:'#FF4600',marginLeft:9,borderTopRightRadius:5,borderTopLeftRadius:5,borderBottomLeftRadius:5}}>
                            <View style={{width:15,height:15,backgroundColor:'#FFFFFF'}}></View>
                        </View>
                        
                    </View>
                </View>
                <View style={style.BottomView}>

                </View>
            </View>
        </SafeAreaView>

    )
}
export default ProductDetailScreen1;