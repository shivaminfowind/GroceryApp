import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
// import {CheckBox} from '@react-native-community/checkbox';
import CheckBox from 'react-native-check-box';


const SignUpScreen = ({navigation}) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');

    const [UserNameError, setUserNameError] = useState('');
    const [PasswordError, setPasswordError] = useState('');
    const [ConfirmPasswordError, setConfirmPasswordError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [mobileError, setMobileError] = useState('');
    const EmailRegEx = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    const NameRegex = new RegExp("[A-Za-z]");
    const OnSubmit = ()=>{
        if(!username){
            setUserNameError("UserName is Required!");
            return;  
        }else if(!email){
            setUserNameError("");
            setEmailError("Email is Required!");
            return;
        }else if(!mobile){
            setUserNameError("");
            setEmailError("");
            setMobileError("Mobile is Required!");
            return;
        }
        else if(!password){
            setEmailError("");
            setMobileError("");
            setUserNameError("");
            setPasswordError("Password is required!");
            return;
        }
        else if(ConfirmPassword != password){
            setEmailError("");
            setMobileError("");
            setUserNameError("");
            setPasswordError("");
            setConfirmPasswordError("Password not match!");
            return;
        }else if(!NameRegex.test(username)){
                setUserNameError("name must be alphabetic!");
                return;
        }else if(!EmailRegEx.test(email)){
            setEmailError('Invalid Email Formate!');
            return;
        }
        else if(!strongRegex.test(password)){
            setEmailError("");
            setMobileError("");
            setUserNameError("");
            setPasswordError("");
            setConfirmPasswordError("");
            setPasswordError("Password must be strong!");
            console.log(password);
            return;
        }
        
        else{
            // setEmailError("");
            // setMobileError("");
            // setUserNameError("");
            // setPasswordError("");
            // setConfirmPasswordError("");
            // setPasswordError("");
            // alert("SignUp Successful");

            var dataToSend = {
                name: username,
                email: email,
                password: password,
                phone: mobile,
                
              };
              var formBody = [];
              for (var key in dataToSend) {
                var encodedKey = encodeURIComponent(key);
                var encodedValue = encodeURIComponent(dataToSend[key]);
                formBody.push(encodedKey + '=' + encodedValue);
              }
              formBody = formBody.join('&');
          
              fetch('http://framework.infowindtech.biz:9000/api/register', {
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
                      navigation.navigate('SignUpThankScreen');
                    // setIsRegistraionSuccess(true);
                    console.log(
                      'Registration Successful. Please Login to proceed'
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
            
            <View style={style.container}>

                <View style={style.topView}>
                    <View style={{flexDirection:'row', width: 214, height: 30}}>
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
                    <ScrollView contentContainerStyle={{alignItems:'center'}}>
                        <Text style={{ width: 125, height: 37, fontFamily: 'Montserrat-Bold', fontSize: 30, color: '#000000', marginTop: 32 }}>Sign Up</Text>
                        <Text style={{ width: 154, height: 19, fontFamily: 'Montserrat-Medium', fontSize: 15, color: '#3A3A3A' }}>Create your account</Text>
                        <View style={style.userInput}>
                            <View style={{ width: 48, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../Asset/grocies/person_green.png')} />
                            </View>
                            <View>
                                <Text style={{ marginTop: 13, width: 78, height: 15, fontFamily: 'Montserrat-Medium', fontSize: 12, color: '#3A3A3A' }}>USER NAME</Text>
                                <TextInput
                                    style={{ width: 180, height: 20, marginTop: 8 }}
                                    placeholder="enter name"
                                    name="username"
                                    onChangeText = {username => setUserName(username)}
                                />
                                <View><Text style={style.Error}>{UserNameError}</Text></View>
                            </View>
                            
                        </View>

                        <View style={style.userInput}>
                            <View style={{ width: 48, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../Asset/grocies/email_green.png')} />
                            </View>
                            <View>
                                <Text style={{ marginTop: 13, width: 78, height: 15, fontFamily: 'Montserrat-Medium', fontSize: 12, color: '#3A3A3A' }}>EMAIL</Text>
                                <TextInput
                                    style={{ width: 180, height: 20, marginTop: 8 }}
                                    placeholder="enter email"
                                    name="email"
                                    onChangeText = {email => setEmail(email)}
                                />
                                <View><Text style={style.Error}>{emailError}</Text></View>
                            </View>
                            
                        </View>
                        <View style={style.userInput}>
                            <View style={{ width: 48, justifyContent: 'center', alignItems: 'center' }}>
                                <Text>im</Text>
                            </View>
                            <View>
                                <Text style={{ marginTop: 13, width: 78, height: 15, fontFamily: 'Montserrat-Medium', fontSize: 12, color: '#3A3A3A' }}>MOBILE</Text>
                                <TextInput
                                    style={{ width: 180, height: 20, marginTop: 8 }}
                                    placeholder="enter mobile"
                                    name="mobile"
                                    onChangeText = {mobile => setMobile(mobile)}
                                />
                                <View><Text style={style.Error}>{mobileError}</Text></View>
                            </View>
                            
                        </View>

                        <View style={style.passInput}>
                            <View style={{ width: 48, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../Asset/grocies/pass_green.png')} />
                            </View>
                            <View>
                                <Text style={{ marginTop: 13, width: 78, height: 15, fontFamily: 'Montserrat-Medium', fontSize: 12, color: '#3A3A3A' }}>PASSWORD</Text>
                                <TextInput
                                    style={{ width: 180, height: 20, marginTop: 8 }}
                                    placeholder="enter password"
                                    // secureTextEntry={true}
                                    name="password"
                                    onChangeText = {password => setPassword(password)}
                                />
                                <View><Text style={style.Error}>{PasswordError}</Text></View>
                            </View>
                        </View>

                        <View style={style.passInput}>
                            <View style={{ width: 48, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../Asset/grocies/pass_green.png')} />
                            </View>
                            <View>
                                <Text style={{ marginTop: 13, width: 143, height: 15, fontFamily: 'Montserrat-Medium', fontSize: 12, color: '#3A3A3A' }}>CONFIRM PASSWORD</Text>
                                <TextInput
                                    style={{ width: 180, height: 20, marginTop: 8 }}
                                    placeholder="enter confirm password"
                                    // secureTextEntry={true}
                                    name="ConfirmPassword"
                                    onChangeText = {ConfirmPassword => setConfirmPassword(ConfirmPassword)}  
                                />
                                <View><Text style={style.Error}>{ConfirmPasswordError}</Text></View>
                            </View>
                        </View>
                        
                        <View style={{ marginTop: 17, flexDirection: 'row', borderRadius: 30, backgroundColor: '#009440', width: 203, height: 55, justifyContent: 'center', alignItems: 'center' }}>
                            <View >
                                <TouchableOpacity
                                onPress={OnSubmit}
                                >
                                    <Text style={{ marginLeft: 51, width: 86, height: 24, color: '#FFFFFF', fontFamily: 'Montserrat-SemiBold', fontSize: 20 }}>SIGN UP</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ backgroundColor: '#8DB631', marginLeft: 18, width: 39, height: 39, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginRight:9 }}>
                                <Image style={{ width: 13, height: 15 }} source={require('../Asset/grocies/blackArrow.png')} />
                            </View>
                        </View>
                        <View style={{ height: 19, marginTop: 19,flexDirection:'row',justifyContent:'center',alignItems:'center' }}>
                            <View style={{width:60, height:1,borderWidth:0.90,borderColor:'#929292'}}></View>
                            <View style={{marginLeft:5,marginRight:5,width:24,height:19,fontFamily:'Montserrat-Medium',fontSize:15,color:'#3A3A3A'}}><Text>OR</Text></View>
                            <View style={{width:60, height:1,borderWidth:0.90,borderColor:'#929292'}}></View>
                        </View>
                        <View style={{ marginTop: 9, flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'row', width: 135, height: 40, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                                <View style={{ marginRight: 9 }}>
                                    <Image source={require('../Asset/grocies/fb.png')} />
                                </View>
                                <View>
                                    <TouchableOpacity>
                                        <Text>facebook</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{ marginLeft: 10, flexDirection: 'row', width: 135, height: 40, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                                <View style={{ marginRight: 8 }}>
                                    <Image source={require('../Asset/grocies/google.png')} />
                                </View>
                                <View>
                                    <TouchableOpacity>
                                        <Text>Google</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 32, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ width: 182, height: 18, fontFamily: 'Montserrat-Medium', fontSize: 14, color: '#000000' }}>Already have an account?</Text>
                            <TouchableOpacity
                            onPress={()=> navigation.navigate('LoginScreen')}
                            >
                                <Text style={{ marginTop: 7, width: 114, height: 15, fontFamily: 'Montserrat-Bold', fontSize: 14, color: '#009440' }}>SIGN IN NOW</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>

                    </View>
                    
                </View>
            </View>
            
        </SafeAreaView>
    )
}

// --------------style css start----------
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
        alignItems: 'center'
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
        marginTop: 27,
        borderColor: '#929292',
        flexDirection: 'row',

    },
    passInput: {
        borderWidth: 1,
        width: 292,
        height: 75,
        borderRadius: 10,
        borderColor: '#929292',
        marginTop: 12,
        flexDirection: 'row',
    },
    flexRow: {
        flexDirection: 'row',
        height: 18,
        width: 292,
        // backgroundColor:'red',
        marginTop: 15
    },
    Error:{
        color:'#FF4600',
        fontFamily:'Montserrat-ExtraBold',
        fontSize:10
    }
})
// --------style css end------------------
export default SignUpScreen;