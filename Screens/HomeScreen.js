import React from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';
// import {DrawerActions} from '@react-navigation/drawer';


const HomeScreen = ({navigation}) =>{
    return(
        <SafeAreaView style={style.SafeArea}>
        <View style={style.Container}>
            <View style={style.TopView}>
                <View style={{flexDirection:'row'}}>
                    <View style={{marginTop:25,marginLeft:21}}>
                        <TouchableOpacity
                        onPress={()=> navigation.navigate('DrawerNavigat')}
                        >
                            <Image source={require('../Asset/grocies/drawertab.png')} />
                        </TouchableOpacity>
                       
                    </View>
                    <View style={{flexDirection:'row',width:154,height:22,marginTop:17,marginLeft:65}}>
                        <View>
                            <Text style={{fontFamily:'Montserrat-Black',fontSize:18}}>GROCERY</Text>
                        </View>
                        <View style={{marginLeft:5}}>
                            <Text style={{fontFamily:'Montserrat-Black',fontSize:18,color:'#FFE600'}}>SHOP</Text>
                        </View>
                    </View>
                    <View style={{marginLeft:19,marginTop:25}}>
                        <Image source={require('../Asset/grocies/heart_outline.png')} />
                    </View>
                    <View style={{marginLeft:11,marginTop:25}}>
                        <Image source={require('../Asset/grocies/bell_outline.png')} />
                    </View>
                    <View style={{marginLeft:14,marginTop:25}}>
                        <Image source={require('../Asset/grocies/ic_basket.png')} />
                    </View>
                </View>
                <View style={{marginLeft:159,flexDirection: 'row',width:59,height:6, justifyContent:'center',alignItems:'center',marginTop:1}}>
                        <View style={{borderWidth:1, width:6, height:6, borderRadius:20,backgroundColor:'#000000'}}></View>
                        <View style={{borderWidth:1, width:31, height:1, borderColor:'#FFE600',marginRight:5, marginLeft:5}}></View>
                        <View style={{borderWidth:1, width:6, height:6, borderRadius:20,backgroundColor:'#000000'}}></View>
                </View>
                <View style={{flexDirection:'row',width:323,height:35,marginLeft:27,marginTop:17}}>
                    <View style={{borderRadius:20,width:323,backgroundColor:'#FFFFFF'}}>
                        <TextInput
                        
                        name="searchBar"
                        placeholder="  Search Product here..."
                        />
                    </View>
                    <View style={{justifyContent:'center',alignItems:'center', borderRadius:20,marginLeft:-78,width:78, height:35,backgroundColor:'#009440'}}>
                        <TouchableOpacity>
                            <Text style={{fontFamily:'Montserrat-Bold',fontSize:12,color:'#FFFFFF'}}>SEARCH</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            
            
                <View style={{width:375, height:152.5,marginTop:-40,flexDirection:'row'}}>
                <ScrollView horizontal={true} >
                    <View>
                        <Image style={{width:304,height:152.5}} source={require('../Asset/grocies/card.png')} />
                    </View>
                    <View>
                        <Image style={{width:304,height:152.5}} source={require('../Asset/grocies/card.png')} />
                    </View>
                    <View>
                        <Image style={{width:304,height:152.5}} source={require('../Asset/grocies/card.png')} />
                    </View>
                    </ScrollView>
                </View>
                
            <View style={{alignItems:'center',flexDirection:'row',borderTopLeftRadius:10,borderTopRightRadius:10,marginTop:-26,alignSelf:'center',backgroundColor:'white',width:120,height:26}}>
                <View style={{marginLeft:27,borderRadius:10,height:10,width:10,borderWidth:1,borderColor:'#707070'}}></View>
                <View style={{marginLeft:4,borderRadius:10,height:10,width:10,borderWidth:1,borderColor:'#707070'}}></View>
                <View style={{backgroundColor:'#009440',marginLeft:4,borderRadius:10,height:10,width:10,borderWidth:1,borderColor:'#009440'}}></View>
                <View style={{marginLeft:4,borderRadius:10,height:10,width:10,borderWidth:1,borderColor:'#707070'}}></View>
                <View style={{marginLeft:4,borderRadius:10,height:10,width:10,borderWidth:1,borderColor:'#707070'}}></View>
            </View>
            <View style={{height:450}}>
            <ScrollView >
                <View style={{flexDirection:'row',marginTop:16}}>
                    <View style={{width:93,height:20,marginLeft:20}}>
                        <Text style={{fontFamily:'Montserrat-Medium',fontSize:17,}}>Category</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={{marginLeft:161,justifyContent:'center',alignItems:'center',width:80,height:23,backgroundColor:'#FFE600'}}>
                            <Text style={{fontFamily:'Montserrat-Bold',fontSize:10,color:'#3A3A3A'}}>Explore All</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',marginTop:12}}>
                    <ScrollView horizontal={true}>
                        <View style={{marginLeft:11}}>
                            <TouchableOpacity>
                                <View style={{justifyContent:'center',alignItems:'center',height:60,width:60}}>
                                    <Image source={require('../Asset/grocies/bakery.png')} />
                                </View>
                                <View style={{marginTop:4,justifyContent:'center',alignItems:'center',width:60,height:11}}>
                                    <Text style={{fontFamily:'Montserrat-Bold',fontSize:9}}>BAKERY</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginLeft:8}}>
                            <TouchableOpacity>
                                <View style={{justifyContent:'center',alignItems:'center',height:60,width:60 }}>
                                    <Image source={require('../Asset/grocies/fruits.png')} />
                                </View>
                                <View style={{marginTop:4,justifyContent:'center',alignItems:'center',width:60,height:11}}>
                                    <Text style={{fontFamily:'Montserrat-Bold',fontSize:9}}>FRUITS</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginLeft:8}}>
                            <TouchableOpacity>
                                <View style={{justifyContent:'center',alignItems:'center',height:60,width:60,backgroundColor:'#009440',borderTopRightRadius:10,borderTopLeftRadius:10,borderBottomRightRadius:10}}>
                                    <Image source={require('../Asset/grocies/outline.png')} />
                                </View>
                                <View style={{marginTop:4,justifyContent:'center',alignItems:'center',width:60,height:11}}>
                                    <Text style={{fontFamily:'Montserrat-Bold',fontSize:9}}>SOAP</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginLeft:8}}>
                            <TouchableOpacity>
                                <View style={{justifyContent:'center',alignItems:'center',height:60,width:60}}>
                                    <Image source={require('../Asset/grocies/coconut-oil.png')} />
                                </View>
                                <View style={{marginTop:4,justifyContent:'center',alignItems:'center',width:60,height:11}}>
                                    <Text style={{fontFamily:'Montserrat-Bold',fontSize:9}}>OIL</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginLeft:8}}>
                            <TouchableOpacity>
                                <View style={{justifyContent:'center',alignItems:'center',height:60,width:60}}>
                                    <Image source={require('../Asset/grocies/food.png')} />
                                </View>
                                <View style={{marginTop:4,justifyContent:'center',alignItems:'center',width:60,height:11}}>
                                    <Text style={{fontFamily:'Montserrat-Bold',fontSize:9}}>VEGITABLES</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{marginLeft:8}}>
                            <TouchableOpacity>
                                <View style={{justifyContent:'center',alignItems:'center',height:60,width:60}}>
                                    <Image source={require('../Asset/grocies/Page-1.png')} />
                                </View>
                                <View style={{marginTop:4,justifyContent:'center',alignItems:'center',width:60,height:11}}>
                                    <Text style={{fontFamily:'Montserrat-Bold',fontSize:9}}>DRINKS</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
                <View style={{marginLeft:159,flexDirection: 'row',width:59,height:6, justifyContent:'center',alignItems:'center',marginTop:21}}>
                        <View style={{ width:6, height:6, borderRadius:20,backgroundColor:'#009440'}}></View>
                        <View style={{borderWidth:1, width:31, height:1, borderColor:'#FFE600',marginRight:5, marginLeft:5}}></View>
                        <View style={{ width:6, height:6, borderRadius:20,backgroundColor:'#009440'}}></View>
                </View>
                <View style={{flexDirection:'row',marginTop:5}}>
                    <View style={{width:79,height:20,marginLeft:20}}>
                        <Text style={{fontFamily:'Montserrat-Medium',fontSize:17,}}>Popular</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={{marginLeft:175,justifyContent:'center',alignItems:'center',width:80,height:23,backgroundColor:'#FFE600'}}>
                            <Text style={{fontFamily:'Montserrat-Bold',fontSize:10,color:'#3A3A3A'}}>Explore All</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:20,flexDirection:'row'}}>
                    <View>
                        <TouchableOpacity>
                            <View style={{marginLeft:29}}>   
                                <Image source={require('../Asset/grocies/rice.png')} />
                            </View>
                            <View style={{marginLeft:61,width:85,height:15}}>
                                <Text style={{fontFamily:'Montserrat-Medium',fontSize:12,}}>Basmati Rice</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{flexDirection:'row',marginTop:7,marginLeft:43}}>
                            <TouchableOpacity>
                                <View style={{borderTopLeftRadius:5,borderTopRightRadius:5,borderBottomRightRadius:5,alignItems:'center',flexDirection:'row',backgroundColor:'#009440',width:85,height:23}}>
                                    <View style={{marginLeft:4}}>
                                        <Image source={require('../Asset/grocies/questMark.png')} />
                                    </View>
                                    <View style={{marginLeft:4}}>
                                        <Text style={{fontFamily:'Montserrat-Bold',fontSize:8, color:'#FFFFFF'}}>ADD TO CART</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{borderTopRightRadius:5,borderTopLeftRadius:5,borderBottomLeftRadius:5,justifyContent:'center',alignItems:'center',width:26,height:23, backgroundColor:'#FFE600',marginLeft:4}}>
                                <Image source={require('../Asset/grocies/blackheart.png')} />
                            </View>
                        </View>
                    </View>

                    <View>
                        <TouchableOpacity>
                            <View style={{marginLeft:52}}>   
                                <Image source={require('../Asset/grocies/tea.png')} />
                            </View>
                            <View style={{marginLeft:80,width:85,height:15}}>
                                <Text style={{fontFamily:'Montserrat-Medium',fontSize:12,}}>Goodricke Tea</Text>
                            </View>
                        </TouchableOpacity>
                        
                        <View style={{marginLeft:65,flexDirection:'row',marginTop:7}}>
                        <TouchableOpacity>
                            <View style={{borderTopLeftRadius:5,borderTopRightRadius:5,borderBottomRightRadius:5,alignItems:'center',flexDirection:'row',backgroundColor:'#009440',width:85,height:23}}>
                                <View style={{marginLeft:4}}>
                                    <Image source={require('../Asset/grocies/questMark.png')} />
                                </View>
                                <View style={{marginLeft:4}}>
                                    <Text style={{fontFamily:'Montserrat-Bold',fontSize:8, color:'#FFFFFF'}}>ADD TO CART</Text>
                                </View>
                            </View>
                            </TouchableOpacity>
                            <View style={{borderTopRightRadius:5,borderTopLeftRadius:5,borderBottomLeftRadius:5,justifyContent:'center',alignItems:'center',width:26,height:23, backgroundColor:'#FF4600',marginLeft:4}}>
                                <Image source={require('../Asset/grocies/whiteheart.png')} />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{marginLeft:159,flexDirection: 'row',width:59,height:6, justifyContent:'center',alignItems:'center',marginTop:37}}>
                        <View style={{ width:6, height:6, borderRadius:20,backgroundColor:'#009440'}}></View>
                        <View style={{borderWidth:1, width:31, height:1, borderColor:'#FFE600',marginRight:5, marginLeft:5}}></View>
                        <View style={{ width:6, height:6, borderRadius:20,backgroundColor:'#009440'}}></View>
                </View>
                <View style={{flexDirection:'row',marginTop:2}}>
                    <View style={{width:108,height:20,marginLeft:20}}>
                        <Text style={{fontFamily:'Montserrat-Medium',fontSize:17,}}>Recent View</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={{marginLeft:146,justifyContent:'center',alignItems:'center',width:80,height:23,backgroundColor:'#FFE600'}}>
                            <Text style={{fontFamily:'Montserrat-Bold',fontSize:10,color:'#3A3A3A'}}>Explore All</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',marginTop:19}}>
                    <ScrollView horizontal={true}>
                    <TouchableOpacity>
                        <View style={style.RecentView}>
                            <Image source={require('../Asset/grocies/Image1.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={style.RecentView}>
                            <Image source={require('../Asset/grocies/Image2.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={style.RecentView}>
                            <Image source={require('../Asset/grocies/Image3.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={style.RecentView}>
                            <Image source={require('../Asset/grocies/Image4.png')} />
                        </View>
                    </TouchableOpacity>
                    </ScrollView>
                </View>
            </ScrollView>
            </View>
        </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    SafeArea:{
        backgroundColor:'#3CCD7B'
    },
    Container:{
        width:375,
        height:812,
        backgroundColor:'#FFFFFF'
    },
    TopView:{
        width: 375,
        height:150,
        backgroundColor:'#3CCD7B',
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
        // position:'absolute'
    },
    RecentView:{
        width:71,
        height:80,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderRadius:5,
        borderColor:'#7CAE02',
        marginLeft:21

    }
})

export default HomeScreen;
