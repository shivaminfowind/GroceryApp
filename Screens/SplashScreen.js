import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container:{
        flex:1,
        width:375,
        height:812,
        backgroundColor:'#3CCD7B',
        
    },
    topView:{
        width:375,
        height:280,
        backgroundColor:'#009440',
        borderBottomRightRadius:500,
        borderBottomLeftRadius:30,
    }
})

const SplashScreen = () =>{
    return(
        <View style={style.container}>
            <View style={style.topView}>

            </View>
            <View></View>
        </View>
    )
}

export default SplashScreen;