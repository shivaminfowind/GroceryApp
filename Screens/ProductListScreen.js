import React from 'react';
import {Image,StyleSheet,Text,View,SafeAreaView,ScrollView,TextInput,FlatList} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Data =[
    {
        id:1,
        Image : <Image source={require('../Asset/grocies/rice.png')} />,
        Name : 'Basmati Rice'
    },
    {
        id:2,
        Image : <Image source={require('../Asset/grocies/tea.png')} />,
        Name : 'Goodricke tea'
    },
    {
        id:3,
        Image : <Image source={require('../Asset/grocies/rice.png')} />,
        Name : 'Basmati Rice'
    },
    {
        id:4,
        Image : <Image source={require('../Asset/grocies/tea.png')} />,
        Name : 'Goodricke tea'
    },
    {
        id:5,
        Image : <Image source={require('../Asset/grocies/rice.png')} />,
        Name : 'Basmati Rice'
    },
    {
        id:6,
        Image : <Image source={require('../Asset/grocies/tea.png')} />,
        Name : 'Goodricke tea'
    },
    {
        id:7,
        Image : <Image source={require('../Asset/grocies/rice.png')} />,
        Name : 'Basmati Rice'
    },
    {
        id:8,
        Image : <Image source={require('../Asset/grocies/tea.png')} />,
        Name : 'Goodricke tea'
    },
]

const ProductListScreen = () =>{
    const numColumns= 2;
    return(
        <SafeAreaView style={style.SafeArea}>
            <View style={style.Container}>
                <View style={style.TopView}>
                    <View style={{flexDirection:'row'}}>
                        <View style={{width:25,height:14,marginLeft:21,marginTop:25}}>
                            <TouchableOpacity>
                                <Image source={require('../Asset/grocies/drawertab.png')} />
                            </TouchableOpacity>
                        </View>
                        <View style={{marginLeft:65,marginTop:16}}>
                            <Text style={{fontFamily:'Montserrat-Black',fontSize:18}}>GROCERY</Text>
                        </View>
                        <View style={{marginLeft:5,marginTop:16}}>
                            <Text style={{fontFamily:'Montserrat-Black',fontSize:18,color:'#FFE600'}}>SHOP</Text>
                        </View>
                        <View style={{marginLeft:19,marginTop:25,width:14,height:14,justifyContent:'center',alignItems:'center'}}>
                            <Image source={require('../Asset/grocies/heart_outline.png')} />
                        </View>
                        <View style={{marginLeft:11,marginTop:25,width:12,height:14,justifyContent:'center',alignItems:'center'}}>
                            <Image source={require('../Asset/grocies/bell_outline.png')} />
                        </View>
                        <View style={{marginLeft:14,marginTop:25,width:14,height:14,justifyContent:'center',alignItems:'center'}}>
                            <Image source={require('../Asset/grocies/ic_basket.png')} />
                        </View>
                    </View>
                    <View style={{marginLeft:159,flexDirection: 'row',width:59,height:6, justifyContent:'center',alignItems:'center',marginTop:1}}>
                        <View style={{borderWidth:1, width:6, height:6, borderRadius:20,backgroundColor:'#000000'}}></View>
                        <View style={{borderWidth:1, width:31, height:1, borderColor:'#FFE600',marginRight:5, marginLeft:5}}></View>
                        <View style={{borderWidth:1, width:6, height:6, borderRadius:20,backgroundColor:'#000000'}}></View>
                    </View>
                    <View style={{flexDirection:'row',width:323,height:35,marginLeft:27,marginTop:12}}>
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
                <View style={style.MiddleView}>
                    <View style={{flexDirection:'row'}}>
                        <View style={{ marginLeft:26,marginTop:12,width:90,height:19}}>
                            <Text style={{fontFamily:'Montserrat-Medium',fontSize:15,}}>Product list</Text>
                        </View>
                        <View style={{marginTop:16,marginLeft:150,width:30,height:10}}>
                            <Text style={{color:'#3A3A3A',fontFamily:'Montserrat-Medium',fontSize:8,}}>Sorting</Text>
                        </View>
                        <View style={{marginLeft:6.43,marginTop:15,width:9.52,height:10.75}}>
                            <Image source={require('../Asset/grocies/setup.png')} />
                        </View>
                    </View>
                    <FlatList  data={Data} numColumns={numColumns}  keyExtractor={(item,index) => item.id} renderItem={({item}) =>

                        <View  style={{marginLeft:5,justifyContent:'center',alignItems:'center',marginTop:12,width:159,height:179}}>
                            <View style={{marginLeft:20,marginTop:8,width:159,height:179}}>
                                <TouchableOpacity>
                                    <View style={{marginLeft:8}}>   
                                        {/* <Image source={require('../Asset/grocies/rice.png')} /> */}
                                        {item.Image}
                                    </View>
                                    <View style={{marginLeft:40,width:85,height:15}}>
                                        <Text style={{fontFamily:'Montserrat-Medium',fontSize:12,}}>{item.Name}</Text>
                                    </View>
                                </TouchableOpacity>
                                <View style={{flexDirection:'row',marginTop:7,marginLeft:22}}>
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

                            
                        </View>
                    }>
                    </FlatList>
                </View>

            </View>
        </SafeAreaView>
    )
}

style = StyleSheet.create({
    SafeArea:{
        backgroundColor:'#3CCD7B'
    },
    Container:{
        width:375,
        height:812,
        backgroundColor:'white'
    },
    TopView:{
        width:375,
        height:150,
        backgroundColor:'#3CCD7B',
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30
    },
    MiddleView:{
        width:333,
        height:650,
        backgroundColor:'white',
        alignSelf:'center',
        borderTopRightRadius:40,
        borderTopLeftRadius:40,
        marginTop:-40
    }
})

export default ProductListScreen;