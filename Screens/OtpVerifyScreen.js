import React,{ useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

const OtpVerifyScreen = ({route,navigation}) => {
    const { user_id } = route.params;
    const [one, setOne] = useState('');
    const [two, setTwo] = useState('');
    const [three, setThree] = useState('');
    const [four, setFour] = useState('');
    const [error, setError] = useState('');
    const [otp, setOTP] = useState('');

    const OnSubmit = ()=>{
        if(!(one && two && three && four)){
            setError("Wrong OTP");
        }
        else{
            setOTP(one+two+three+four);

            var dataToSend = {
                otp: otp,
                user_id: user_id,
                
              };
              var formBody = [];
              for (var key in dataToSend) {
                var encodedKey = encodeURIComponent(key);
                var encodedValue = encodeURIComponent(dataToSend[key]);
                formBody.push(encodedKey + '=' + encodedValue);
              }
              formBody = formBody.join('&');
          
              fetch('http://framework.infowindtech.biz:9000/api/verify-otp', {
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
                      alert(responseJson.message);
                      navigation.navigate('ChangePasswordScreen',{user_id:user_id});
                    // setIsRegistraionSuccess(true);
                    console.log(
                      'OTP Verify Successfull'
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
                onPress={()=> navigation.goBack()}
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
                        <Text style={{ width: 206, height: 30, fontFamily: 'Montserrat-Bold', fontSize: 25, color: '#000000', marginTop: 25 }}>OTP Verification</Text>
                        <Text>user_id: {JSON.stringify(user_id)}</Text>
                        <View style={{marginRight:44,width:260, height:164, marginTop:28}}>
                            <Image source={require('../Asset/grocies/OtpVerify.png')} />
                        </View>
                        <View style={{ width:200,height:44,justifyContent:'center',alignItems:'center', marginTop:37}}>
                            <Text style={{fontFamily:'Montserrat-Medium', fontSize:18}}>Please enter your the</Text>
                            <Text style={{fontFamily:'Montserrat-Medium', fontSize:18}}>verification code</Text>
                        </View>
                        <View style={{width:240,height: 36,marginTop:7, justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontFamily:'Montserrat-Medium',fontSize:14,color:'#3A3A3A'}}>We have send a verification code</Text>
                            <Text style={{fontFamily:'Montserrat-Medium',fontSize:14,color:'#3A3A3A'}}>to your registered email ID</Text>
                        </View>
                        <View style={style.OtpInputView}>
                            <View style={{marginRight:12}}>
                                <TextInput
                                 style={style.OtpInputField} 
                                 name="one"
                                 onChangeText = {one => setOne(one)}
                                 textAlign="center"
                                 />
                            </View>
                            <View style={{marginRight:12}}>
                                <TextInput
                                style={style.OtpInputField} 
                                name="two"
                                onChangeText = {two => setTwo(two)}
                                textAlign="center"
                                />
                            </View>
                            <View style={{marginRight:12}}>
                                <TextInput
                                style={style.OtpInputField}
                                name="three"
                                onChangeText = {three => setThree(three)}
                                textAlign="center"
                                />
                            </View>
                            <View >
                                <TextInput
                                style={style.OtpInputField} 
                                name="four"
                                onChangeText = {four => setFour(four)}
                                textAlign="center"
                                />
                            </View>

                        </View>
                        

                        <View style={{ marginTop: 17, flexDirection: 'row', borderRadius: 30, backgroundColor: '#009440', width: 203, height: 55, justifyContent: 'center', alignItems: 'center' }}>
                            <View >
                                <TouchableOpacity
                                onPress={OnSubmit}
                                >
                                    <Text style={{ marginLeft: 57, width: 74, height: 24, color: '#FFFFFF', fontFamily: 'Montserrat-SemiBold', fontSize: 20 }}>VERIFY</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ backgroundColor: '#8DB631', marginLeft: 24, width: 39, height: 39, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginRight:9 }}>
                                <Image style={{ width: 13, height: 15 }} source={require('../Asset/grocies/blackArrow.png')} />
                            </View>
                        </View>
            
                        
                        <View style={{flexDirection:'row', marginTop: 27, justifyContent: 'center', alignItems: 'center' }}>
                            <View>
                               <Text style={{width:166,height:18, fontFamily:'Montserrat-Medium',fontSize:14}}>Don't receive the OTP?</Text>
                            </View>
                            <View>
                                <Text style={{ width: 65, height: 19, fontFamily: 'Montserrat-Bold', fontSize: 16, color: '#009440' }}>Resend</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

// -----------Style.Css------------------

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
    OtpInputView:{
        marginTop:28,
        flexDirection:'row',
    },
    OtpInputField:{
        width:44,
        height:44,
        borderWidth:1,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        borderColor:'#009440',
        // justifyContent:'center',
        // alignItems:'center'
    }
})

export default OtpVerifyScreen;