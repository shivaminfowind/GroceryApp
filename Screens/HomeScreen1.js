import React,{useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';


const HomeScreen1 = () =>{
     const [ shop, setShop ] = useState(style.btnNormal);
     const [notification, setNotification] = useState(style.btnNormal1);
     const [category, setCategory] = useState(style.btnNormal1);
     const [orders ,setOrders] = useState(style.btnNormal1);
     const [wishlist, setWishlist] = useState(style.btnNormal1);
     const [customer, setCustomer] = useState(style.btnNormal1);
     const [setting, setSetting] = useState(style.btnNormal1);
     const [logout, setLogout] = useState(style.btnNormal1);
    
     const Shop = ()=>{
         
         style=StyleSheet.create({
             btnShop:{
             backgroundColor:'#009440',
             marginTop:11,
            marginLeft:21,
            flexDirection:'row',
            width:233,
            height:29,    
            borderRadius:20,
            
             },
             btnNormal:{
                marginTop:11,
                marginLeft:21,
                flexDirection:'row',
                width:233,
                height:29,
                // borderWidth:1
            },
            btnNormal1:{
                marginTop:11,
                marginLeft:21,
                flexDirection:'row',
                width:233,
                height:29,
                // borderWidth:1
            },

            })

         setShop(style.btnShop)
         setNotification(style.btnNormal1)
         setCategory(style.btnNormal1)
        setOrders(style.btnNormal1)
        setWishlist(style.btnNormal1);
        setCustomer(style.btnNormal1)
        setSetting(style.btnNormal1)
        setLogout(style.btnNormal1)



     }

     const Notification = ()=>{
         
         style =StyleSheet.create({
             btnNotification:{
                backgroundColor:'#009440',
                marginTop:11,
               marginLeft:21,
               flexDirection:'row',
               width:233,
               height:29,    
               borderRadius:20
             },
             btnNormal:{
                marginTop:11,
                marginLeft:21,
                flexDirection:'row',
                width:233,
                height:29,
                // borderWidth:1
            },
             btnNormal1:{
                marginTop:11,
                marginLeft:21,
                flexDirection:'row',
                width:233,
                height:29,
                // borderWidth:1
            },
         })
         setNotification(style.btnNotification)
         setShop(style.btnNormal)
         setCategory(style.btnNormal1)
        setOrders(style.btnNormal1)
        setWishlist(style.btnNormal1);
        setCustomer(style.btnNormal1)
        setSetting(style.btnNormal1)
        setLogout(style.btnNormal1)



     }
     const Category = ()=>{
        
        style =StyleSheet.create({
            btnCategory:{
               backgroundColor:'#009440',
               marginTop:11,
              marginLeft:21,
              flexDirection:'row',
              width:233,
              height:29,    
              borderRadius:20
            },
            btnNormal:{
                marginTop:11,
                marginLeft:21,
                flexDirection:'row',
                width:233,
                height:29,
                // borderWidth:1
            },
            btnNormal1:{
               marginTop:11,
               marginLeft:21,
               flexDirection:'row',
               width:233,
               height:29,
               // borderWidth:1
           },
        })
        setCategory(style.btnCategory)
        setNotification(style.btnNormal1)
        setShop(style.btnNormal)
        setOrders(style.btnNormal1)
        setWishlist(style.btnNormal1);
        setCustomer(style.btnNormal1)
        setSetting(style.btnNormal1)
        setLogout(style.btnNormal1)



    }
    const Orders = ()=>{
        
        style =StyleSheet.create({
            btnOrders:{
               backgroundColor:'#009440',
               marginTop:11,
              marginLeft:21,
              flexDirection:'row',
              width:233,
              height:29,    
              borderRadius:20
            },
            btnNormal:{
                marginTop:11,
                marginLeft:21,
                flexDirection:'row',
                width:233,
                height:29,
                // borderWidth:1
            },
            btnNormal1:{
               marginTop:11,
               marginLeft:21,
               flexDirection:'row',
               width:233,
               height:29,
               // borderWidth:1
           },
        })
        setOrders(style.btnOrders)
        setCategory(style.btnNormal1)
        setNotification(style.btnNormal1)
        setShop(style.btnNormal)
        setWishlist(style.btnNormal1);
        setCustomer(style.btnNormal1)
        setSetting(style.btnNormal1)
        setLogout(style.btnNormal1)


    }

    const Wishlist = ()=>{
        
        style =StyleSheet.create({
            btnWishlist:{
               backgroundColor:'#009440',
               marginTop:11,
              marginLeft:21,
              flexDirection:'row',
              width:233,
              height:29,    
              borderRadius:20
            },
            btnNormal:{
                marginTop:11,
                marginLeft:21,
                flexDirection:'row',
                width:233,
                height:29,
                // borderWidth:1
            },
            btnNormal1:{
               marginTop:11,
               marginLeft:21,
               flexDirection:'row',
               width:233,
               height:29,
               // borderWidth:1
           },
        })
        setWishlist(style.btnWishlist);
        setOrders(style.btnNormal1)
        setCategory(style.btnNormal1)
        setNotification(style.btnNormal1)
        setShop(style.btnNormal)
        setCustomer(style.btnNormal1)
        setSetting(style.btnNormal1)
        setLogout(style.btnNormal1)


    }

    const Customer = ()=>{
        
        style =StyleSheet.create({
            btnCustomer:{
               backgroundColor:'#009440',
               marginTop:11,
              marginLeft:21,
              flexDirection:'row',
              width:233,
              height:29,    
              borderRadius:20
            },
            btnNormal:{
                marginTop:11,
                marginLeft:21,
                flexDirection:'row',
                width:233,
                height:29,
                // borderWidth:1
            },
            btnNormal1:{
               marginTop:11,
               marginLeft:21,
               flexDirection:'row',
               width:233,
               height:29,
               // borderWidth:1
           },
        })
        setCustomer(style.btnCustomer)
        setWishlist(style.btnNormal1);
        setOrders(style.btnNormal1)
        setCategory(style.btnNormal1)
        setNotification(style.btnNormal1)
        setShop(style.btnNormal)
        setSetting(style.btnNormal1)
        setLogout(style.btnNormal1)

    }
    const Setting = ()=>{
        
        style =StyleSheet.create({
            btnSetting:{
               backgroundColor:'#009440',
               marginTop:11,
              marginLeft:21,
              flexDirection:'row',
              width:233,
              height:29,    
              borderRadius:20
            },
            btnNormal:{
                marginTop:11,
                marginLeft:21,
                flexDirection:'row',
                width:233,
                height:29,
                // borderWidth:1
            },
            btnNormal1:{
               marginTop:11,
               marginLeft:21,
               flexDirection:'row',
               width:233,
               height:29,
               // borderWidth:1
           },
        })
        setSetting(style.btnSetting)
        setCustomer(style.btnNormal1)
        setWishlist(style.btnNormal1);
        setOrders(style.btnNormal1)
        setCategory(style.btnNormal1)
        setNotification(style.btnNormal1)
        setShop(style.btnNormal)
        setLogout(style.btnNormal1)
    } 
    const Logout = ()=>{
        
        style =StyleSheet.create({
            btnLogout:{
               backgroundColor:'#009440',
               marginTop:11,
              marginLeft:21,
              flexDirection:'row',
              width:233,
              height:29,    
              borderRadius:20
            },
            btnNormal:{
                marginTop:11,
                marginLeft:21,
                flexDirection:'row',
                width:233,
                height:29,
                // borderWidth:1
            },
            btnNormal1:{
               marginTop:11,
               marginLeft:21,
               flexDirection:'row',
               width:233,
               height:29,
               // borderWidth:1
           },
        })
        setLogout(style.btnLogout)
        setSetting(style.btnNormal1)
        setCustomer(style.btnNormal1)
        setWishlist(style.btnNormal1);
        setOrders(style.btnNormal1)
        setCategory(style.btnNormal1)
        setNotification(style.btnNormal1)
        setShop(style.btnNormal)
    } 

//     console.log(isPress);
//   var touchProps = {
//     activeOpacity: 1,
//     underlayColor: '#009440',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
//     style: isPress ? style.btnPress : style.btnNormal, // <-- but you can still apply other style changes
//     onHideUnderlay: () => setIsPress(false),
//     onShowUnderlay: () => setIsPress(true),
//     // onPress: ()=> setIsPress(true),
//     onPress: () => console.log(isPress),                 // <-- "onPress" is apparently required
//   };
    
return(
    <SafeAreaView style={style.safeArea}>
    <View style={style.Container}>
        
            <View style={{width:273,height:170}}>
                <View style={{marginTop:-140,marginLeft:-40}}>
                    <Image source={require('../Asset/grocies/drawhead.png')} />
                </View>
                <View style={{width:77,height:77,marginLeft:90,marginTop:-140}}>
                    <Image source={require('../Asset/grocies/drawerImg.png')} />
                </View>
                <View style={{marginLeft:30,marginTop:7,width:217,height:24,}}>
                    <Text style={{fontFamily:'Montserrat-Bold',fontSize:20}}>Geremia Taglialatela</Text>
                </View>
                <View style={{flexDirection:'row',marginTop:7.73}}>
                    <View style={{marginTop:6,width:10,height:7.32,marginLeft:45,justifyContent:'center',alignItems:'center'}}>
                        <Image source={require('../Asset/grocies/mail.png')} />
                    </View>
                    <View style={{marginLeft:4,width:161,height:19,}}>
                        <Text style={{fontFamily:'Montserrat-Medium',fontSize:15}}>Geremia@gmail.com</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row',marginTop:8.83}}>
                    <View style={{marginTop:4,marginLeft:78,width:9.67,height:9.67,}}>
                        <Image source={require('../Asset/grocies/phone.png')} />
                    </View>
                    <View style={{marginLeft:1.5,width:110,height:18,}}>
                        <Text style={{color:'#3A3A3A',fontFamily:'Montserrat-Medium',fontSize:14}}>+91 1253256820</Text>
                    </View>
                </View>
                <View style={{width:273,height:352}}>
                
                    <View>
                    <TouchableOpacity
                    style={shop}
                    
                    onPress={Shop}
                     >
                        <View style={{width:11,height:10,marginTop:10,marginLeft:10}}>
                            <Image  source={require('../Asset/grocies/questMark.png')} />
                        </View>
                        <View style={{marginLeft:9,marginTop:6}}>
                            <Text style={{fontFamily:'Montserrat-Medium',fontSize:15}}>Shop</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                    

                    <View>
                        <TouchableOpacity
                        style={notification}
                        onPress={Notification}
                        >
                        <View style={{width:11,height:10,marginTop:10,marginLeft:10}}>     
                            <Image  source={require('../Asset/grocies/notify.png')} />
                        </View>
                        <View style={{marginLeft:9,marginTop:6}}>
                            <Text style={{fontFamily:'Montserrat-Medium',fontSize:15}}>Notification</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                    <View >
                        <TouchableOpacity
                        style={category}
                        onPress={Category}
                        >
                            <View style={{width:11,height:10,marginTop:10,marginLeft:10}}>
                                <Image  source={require('../Asset/grocies/category.png')} />
                            </View>
                            <View style={{marginLeft:9,marginTop:6}}>
                                <Text style={{fontFamily:'Montserrat-Medium',fontSize:15}}>Shop By Categories</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity
                        style={orders}
                        onPress={Orders}
                        >
                        <View style={{width:11,height:10,marginTop:10,marginLeft:10}}>
                            <Image  source={require('../Asset/grocies/order.png')} />
                        </View>
                        <View style={{marginLeft:9,marginTop:6}}>
                            <Text style={{fontFamily:'Montserrat-Medium',fontSize:15}}>Orders</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                        style={wishlist}
                        onPress={Wishlist}
                        >
                        <View style={{width:11,height:10,marginTop:10,marginLeft:10}}>
                            <Image  source={require('../Asset/grocies/wishlist.png')} />
                        </View>
                        <View style={{marginLeft:9,marginTop:6}}>
                            <Text style={{fontFamily:'Montserrat-Medium',fontSize:15}}>Wishlist</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                    
                    <View>
                        <TouchableOpacity
                        style={customer}
                        onPress={Customer}
                        >
                        <View style={{width:11,height:10,marginTop:10,marginLeft:10}}>
                            <Image  source={require('../Asset/grocies/customer.png')} />
                        </View>
                        <View style={{marginLeft:9,marginTop:6}}>
                            <Text style={{fontFamily:'Montserrat-Medium',fontSize:15}}>Customer Help</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                        style={setting}
                        onPress={Setting}
                        >
                        <View style={{width:11,height:10,marginTop:10,marginLeft:10}}>
                            <Image  source={require('../Asset/grocies/setting.png')} />
                        </View>
                        <View style={{marginLeft:9,marginTop:6}}>
                            <Text style={{fontFamily:'Montserrat-Medium',fontSize:15}}>Setting</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                        style={logout}
                        onPress={Logout}
                        >
                        <View style={{width:11,height:10,marginTop:10,marginLeft:10}}>
                            <Image  source={require('../Asset/grocies/logout.png')} />
                        </View>
                        <View style={{marginLeft:9,marginTop:6}}>
                            <Text style={{color:'#FF0000',fontFamily:'Montserrat-Medium',fontSize:15}}>Logout</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{width:273,height:240.5}}>
                    <View>
                        <Image source={require('../Asset/grocies/drawerBottom.png')} />
                    </View>
                    <View style={{marginTop:-135 }}>
                        <Image style={{opacity:0.2,width:273,height:130}} source={require('../Asset/grocies/grocies.png')} />
                    </View>
                    <View style={{flexDirection:'row',width:154,height:22,marginTop:-90,marginLeft:65}}>
                        <View>
                            <Text style={{fontFamily:'Montserrat-Black',fontSize:18}}>GROCERY</Text>
                        </View>
                        <View style={{marginLeft:5}}>
                            <Text style={{fontFamily:'Montserrat-Black',fontSize:18,color:'#FFE600'}}>SHOP</Text>
                        </View>
                    </View>
                    <View style={{marginLeft:105,flexDirection: 'row',width:59,height:6, justifyContent:'center',alignItems:'center',marginTop:1}}>
                        <View style={{borderWidth:1, width:6, height:6, borderRadius:20,backgroundColor:'#000000'}}></View>
                        <View style={{borderWidth:1, width:31, height:1, borderColor:'#FFE600',marginRight:5, marginLeft:5}}></View>
                        <View style={{borderWidth:1, width:6, height:6, borderRadius:20,backgroundColor:'#000000'}}></View>
                    </View>
                    <View style={{marginTop:9,alignItems:'center',marginLeft:24,width:220,height:30}}>
                        <Text style={{fontFamily:'Montserrat-Regular',fontSize:12,}}>© Copyright 2020.</Text>
                        <Text style={{fontFamily:'Montserrat-Regular',fontSize:12,}}>GROCERY SHOP All Rights Reserved</Text>
                    </View>
                </View>
            </View>

            
        
        
    </View>
    </SafeAreaView>
)
}

style =StyleSheet.create({
    safeArea:{
        backgroundColor:'red'
    },
    Container:{
        height:812,
        width:273,
        backgroundColor:'white',
        // flexDirection:'row',
    },
    btnNormal:{
        marginTop:11,
        marginLeft:21,
        flexDirection:'row',
        width:233,
        height:29,
        // borderWidth:1
    },
    btnNormal1:{
        marginTop:11,
        marginLeft:21,
        flexDirection:'row',
        width:233,
        height:29,
        
    },
    btnPress:{
         marginTop:11,
         marginLeft:21,
        flexDirection:'row',
        width:233,
        height:29,
        borderRadius:20,
        backgroundColor:'#009440'
        
    }
})

export default HomeScreen1;