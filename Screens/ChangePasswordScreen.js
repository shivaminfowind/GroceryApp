import React,{useState} from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';


const VideoScreen = ({route, navigation}) => {
    const [NewPassword, setNewPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    const [NewPasswordError, setNewPasswordError] = useState('');
    const [ConfirmPasswordError, setConfirmPasswordError] = useState('');
    
    const { user_id } = route.params;

    const OnSubmit = ()=>{
        if(!NewPassword){
            setNewPasswordError("Password is Required!");
            return;
        }else if(!strongRegex.test(NewPassword)){ 
            setNewPasswordError("Password must be strong!");
            return;
        }
        else if(NewPassword != ConfirmPassword){
            setConfirmPasswordError("Password not match!");
            return;
        }
        else{
            var dataToSend = {
                password:NewPassword,
                user_id: user_id,     
              };
              var formBody = [];
              for (var key in dataToSend) {
                var encodedKey = encodeURIComponent(key);
                var encodedValue = encodeURIComponent(dataToSend[key]);
                formBody.push(encodedKey + '=' + encodedValue);
              }
              formBody = formBody.join('&');
          
              fetch('http://framework.infowindtech.biz:9000/api/reset-password', {
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
                      navigation.navigate('ChangePasswordPop');
                    // setIsRegistraionSuccess(true);
                    console.log(
                      'Successfully Password change'
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
                        <Text style={{ width: 235, height: 30, fontFamily: 'Montserrat-Bold', fontSize: 25, color: '#000000', marginTop: 25 }}>Change Password</Text>
                        <Text>user_id: {JSON.stringify(user_id)}</Text>
                        <View style={{ width:213, height:240, marginTop:10}}>
                            <Image source={require('../Asset/grocies/ChangePassword.png')} />
                        </View>
                        
                        <View style={style.NewPassword}>
                            <View style={{ width: 48, justifyContent: 'center', alignItems: 'center' }}>
                                <Text>im</Text>
                            </View>
                            <View>
                                <Text style={{ marginTop: 13, width: 113, height: 15, fontFamily: 'Montserrat-Medium', fontSize: 12, color: '#3A3A3A' }}>NEW PASSWORD</Text>
                                <TextInput
                                    style={{ width: 180, height: 20, marginTop: 8 }}
                                    placeholder="enter new password"
                                    // secureTextEntry
                                    name="NewPassword"
                                    onChangeText ={NewPassword =>setNewPassword(NewPassword)}
                                />
                                <View><Text style={style.Error}>{NewPasswordError}</Text></View>
                            </View>
                        </View>

                        <View style={style.ConfirmPassword}>
                            <View style={{ width: 48, justifyContent: 'center', alignItems: 'center' }}>
                                <Text>im</Text>
                            </View>
                            <View>
                                <Text style={{ marginTop: 13, width: 143, height: 15, fontFamily: 'Montserrat-Medium', fontSize: 12, color: '#3A3A3A' }}>CONFIRM PASSWORD</Text>
                                <TextInput
                                    style={{ width: 180, height: 20, marginTop: 8 }}
                                    placeholder="enter confirm password"
                                    // secureTextEntry
                                    name="ConfirmPassword"
                                    onChangeText={ConfirmPassword =>setConfirmPassword(ConfirmPassword)}
                                />
                                <View><Text style={style.Error}>{ConfirmPasswordError}</Text></View>
                            </View>
                        </View>
                        

                        <View style={{ marginTop: 17, flexDirection: 'row', borderRadius: 30, backgroundColor: '#009440', width: 203, height: 55, justifyContent: 'center', alignItems: 'center' }}>
                            <View >
                                <TouchableOpacity
                                onPress={OnSubmit}
                                >
                                    <Text style={{ marginLeft: 67, width: 74, height: 24, color: '#FFFFFF', fontFamily: 'Montserrat-SemiBold', fontSize: 20 }}>SAVE</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ backgroundColor: '#8DB631', marginLeft: 10, width: 39, height: 39, justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginRight:9 }}>
                                <Image style={{ width: 13, height: 15 }} source={require('../Asset/grocies/blackArrow.png')} />
                            </View>
                        </View>
            
                        
                        
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

// ----------------Style.css-------------

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
    NewPassword: {
        borderWidth: 1,
        width: 292,
        height: 75,
        borderRadius: 10,
        borderColor: '#929292',
        marginTop: 14,
        flexDirection: 'row',
    },
    ConfirmPassword: {
        borderWidth: 1,
        width: 292,
        height: 75,
        borderRadius: 10,
        borderColor: '#929292',
        marginTop: 11,
        flexDirection: 'row',
    },
    Error:{
        color:'#FF4600',
        fontFamily:'Montserrat-ExtraBold',
        fontSize:10
    }
    
})


export default VideoScreen;