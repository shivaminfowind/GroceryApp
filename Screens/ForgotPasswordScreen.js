import React,{useState} from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const ForgotPasswordScreen = ({navigation}) => {

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    
    const OnSubmit = ()=>{
        if(!email){
            setEmailError("Email is Required!");
        }
        else{

            var dataToSend = {
                email: email,
                
              };
              var formBody = [];
              for (var key in dataToSend) {
                var encodedKey = encodeURIComponent(key);
                var encodedValue = encodeURIComponent(dataToSend[key]);
                formBody.push(encodedKey + '=' + encodedValue);
              }
              formBody = formBody.join('&');
          
              fetch('http://framework.infowindtech.biz:9000/api/forget-password', {
                method: 'POST',
                body: formBody,
                headers: {
                  //Header Defination
                  'Content-Type':
                  'application/x-www-form-urlencoded;charset=UTF-8',
                },
              })
                .then((response) => response.json())
                .then((responseJson) => {
                  //Hide Loader
                //   setLoading(false);
                  console.log(responseJson);
                  // If server response message same as Data Matched
                  if (responseJson.status === true) {
                    AsyncStorage.setItem('user_id',JSON.stringify(responseJson.user_id));
                    console.log(responseJson.user_id);
                      alert(responseJson.message);
                      navigation.navigate('OtpVerifyScreen',{user_id:responseJson.user_id});
                    // setIsRegistraionSuccess(true);
                    console.log(
                      'OTP send to your Email'
                    );
                  } else {
                    alert(responseJson.message);
                  }
                })
                .catch((error) => {
                  //Hide Loader
                //   setLoading(false);
                  console.error(error);
                  alert("Error");
                });
            
        }
    }    

    return (
        <SafeAreaView style={style.safeArea}>
            <View style={style.XButton}>
                <TouchableOpacity
                onPress={()=>navigation.goBack()}
                >
                    <Image style={{ width: 18, height: 21 }} source={require('../Asset/grocies/backArrow.png')} />
                </TouchableOpacity>
            </View>
            <View style={style.container}>
            
                <View style={style.topView}>
                
                    <View style={{flexDirection:'row', width: 214, height: 30,marginTop:-20}}>
                    
                        <View>
                            <Text style={{ fontFamily: 'Montserrat-Black', fontSize: 25 }}>GROCERY</Text>
                        </View>
                        <View>
                            <Text style={{fontFamily: 'Montserrat-Black', fontSize:25, color:'#FFE600',marginLeft:5}}>SHOP</Text>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row',width:83.77,height:9.21, justifyContent:'center',alignItems:'center',marginTop:6.92}}>
                        <View style={{borderWidth:1, width:8, height:9, borderRadius:20,backgroundColor:'#000000'}}></View>
                        <View style={{borderWidth:1, width:44.26, height:1.43, borderColor:'#FFE600',marginRight:5, marginLeft:5}}></View>
                        <View style={{borderWidth:1, width:8, height:9, borderRadius:20,backgroundColor:'#000000'}}></View>
                    </View>
                </View>

                <View style={style.bottomView}>
                    <Image source={require('../Asset/grocies/login.png')} />
                </View>

                <View style={style.middleView}>

                    <View style={style.loginForm}>
                        <Text style={{ width: 239, height: 30, fontFamily: 'Montserrat-Bold', fontSize: 25, color: '#000000', marginTop: 28 }}>Forgot Password?</Text>
                        <View style={{width:220, height:202, marginTop:12}}>
                            <Image source={require('../Asset/grocies/forgot-banner.png')} />
                        </View>
                        <View style={{width:272,height:44,justifyContent:'center',alignItems:'center', marginTop:14}}>
                            <Text style={{fontFamily:'Montserrat-Medium', fontSize:18}}>Enter the email address</Text>
                            <Text style={{fontFamily:'Montserrat-Medium', fontSize:18}}>associate with your account.</Text>
                        </View>
                        <View style={{width:240,height: 36,marginTop:7, justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontFamily:'Montserrat-Medium',fontSize:14,color:'#3A3A3A'}}>We will email you a link to reset</Text>
                            <Text style={{fontFamily:'Montserrat-Medium',fontSize:14,color:'#3A3A3A'}}>your password</Text>
                        </View>
                        <View style={style.userInput}>
                            <View style={{ width: 48, justifyContent: 'center', alignItems: 'center' }}>
                                <Text>im</Text>
                            </View>
                            <View>
                                <Text style={{ marginTop: 13, width: 108, height: 15, fontFamily: 'Montserrat-Medium', fontSize: 12, color: '#3A3A3A' }}>EMAIL ADDRESS</Text>
                                <TextInput
                                    style={{ width: 180, height: 20, marginTop: 8 }}
                                    placeholder="enter email"
                                    name="email"
                                    onChangeText ={email =>setEmail(email)}
                                />
                                <View><Text style={style.Error}>{emailError}</Text></View>
                            </View>
                        </View>

                        <View style={{ marginTop: 17, flexDirection: 'row', borderRadius: 30, backgroundColor: '#009440', width: 203, height: 55, justifyContent: 'center', alignItems: 'center' }}>
                            <View >
                                <TouchableOpacity
                                onPress={OnSubmit}
                                >
                                    <Text style={{ marginLeft: 67, width: 86, height: 24, color: '#FFFFFF', fontFamily: 'Montserrat-SemiBold', fontSize: 20 }}>NEXT</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ backgroundColor: '#8DB631', marginLeft: 5, width: 39, height: 39, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginRight:9 }}>
                                <Image style={{ width: 13, height: 15 }} source={require('../Asset/grocies/blackArrow.png')} />
                            </View>
                        </View>
            
                        
                        <View style={{flexDirection:'row', marginTop: 24, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{width:58, height:18}}>
                               <Text style={{fontFamily:'Montserrat-Medium',fontSize:14}}>Back to</Text>
                            </View>
                            <View>
                                <TouchableOpacity
                                onPress={()=> navigation.navigate('SignUpScreen')}
                                >
                                    <Text style={{ width: 110, height: 19, fontFamily: 'Montserrat-Bold', fontSize: 14, color: '#009440' }}>SIGN IN NOW</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

// ----------------Style.Css----------------------
const style = StyleSheet.create({
    safeArea: {
        width: 375,
        height: 812,
        backgroundColor: '#3CCD7B',
    },
    container: {
        flex: 1,
        backgroundColor: '#3CCD7B',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    topView: {
        flex: 1,
        width: 375,
        height: 225,
        backgroundColor: '#3CCD7B',
        alignItems: 'center',
        
        
    },
    middleView: {
        flex: 2,
        backgroundColor: '#009440',
        borderRadius: 450,
        width: 495,
        position: 'absolute',
        height: 493,
        justifyContent: 'center',
        alignSelf: 'center',

    },
    bottomView: {
        height: 210,
        // zIndex:0,
         position: 'absolute',
        backgroundColor: '#3CCD7B',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 0,

    },
    loginForm: {
        // zIndex:10,
        marginTop: 26.79,
        // height:550,
        height: 624,
        width: 333,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 40,
        alignItems: 'center',
        // opacity:0.5,

    },
    userInput: {
        borderWidth: 1,
        width: 292,
        height: 75,
        borderRadius: 10,
        marginTop: 18,
        borderColor: '#929292',
        flexDirection: 'row',

    },
    
    flexRow: {
        flexDirection: 'row',
        height: 18,
        width: 292,
        // backgroundColor:'red',
        marginTop: 15
    },
    XButton:{
        width:44,
        height:44,
        // borderWidth:1,
        justifyContent:'center',
        alignItems:'center',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        backgroundColor:'#009440',
        marginLeft:21,    
    },
    Error:{
        color:'#FF4600',
        fontFamily:'Montserrat-ExtraBold',
        fontSize:10
    }
})

export default ForgotPasswordScreen;