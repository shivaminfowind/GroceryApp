import React,{useState,useRef} from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity,FlatList } from 'react-native';
import Video from 'react-native-video';
import { Viewport } from '@skele/components';
// import MediaControls, {PLAYER_STATES} from 'react-native-media-controls';
const ViewportAware = Viewport.Aware(Video);
const Data =[
    {
        id:1,
        title:'Sample',
        uri:'http://techslides.com/demos/sample-videos/small.mp4',
        description:"This is a sample video for testing"
        
    },
    {
        id:2,
        title : "Elephant Dream",
        uri:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        description:"The first Blender Open Movie from 2006"
    },
    {
        id:3,
        title : "Big Buck Bunny",
        uri:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        description:"Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself."
        
    },
    {
        id:4,
        title:'Humnava Mere',
        uri:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        
    },
    {
        id:5,
        Name:'Tum Hi Aana ',
        uri:'https://www.youtube.com/watch?v=tLqtnGLfm4Q',
        
    },
    {
        id:6,
        Name:'Bekhayali',
        uri:'https://www.youtube.com/watch?v=VOLKJJvfAbg',
        
    },
]

const VideoScreen = ({ navigation}) => {
    
    // const onViewRef = React.useRef((viewableItems)=> {
    //     console.log(viewableItems)
    //     // Use viewable items in state or as intended
    // })
    // const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 10 })
    

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
                    <FlatList  data={Data} renderItem={({item}) =>
                        <View> 
                        <View style={{height:400,width:300,marginTop:40}}>
                            {/* <Video
                            style={{ width: 300, height: 400 }}
                            paused={false}
                            source={{uri:item.uri}}
                            controls={true}
                            
                            /> */}

                            <ViewportAware
                            style={{width:300,height:400}}
                            paused={false}
                            source={{uri:item.uri}}
                            controls={true}
                            onViewportEnter={() => console.log('Entered!')}
                            onViewportLeave={() => console.log('Left!')}
                            
                            />
                            
                        </View>
                        <View style={{justifyContent:'center',width:300,height:60}}>
                            <Text style={{marginLeft:10,fontFamily:'Montserrat-Bold',fontSize:20}}>{item.title}</Text>
                            <Text style={{marginLeft:10, fontFamily:'Montserrat-Regular',fontSize:12}}>{item.description}</Text>
                        </View>
                        </View>
                        }>       
            </FlatList> 
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
        // flex: 1,
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
        
        flex: 1,
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
    toolbar: {
        marginTop: 30,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
      },
      mediaPlayer: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'black',
        justifyContent: 'center',
      },
    
    
    
})


export default VideoScreen;


// onViewableItemsChanged={onViewRef.current} viewabilityConfig={viewConfigRef.current}