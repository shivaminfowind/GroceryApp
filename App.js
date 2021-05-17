import 'react-native-gesture-handler';
import React from 'react';

import WelcomeScreen from './Screens/WelcomeScreen';
import LoginScreen from './Screens/LoginScreen';
import SignUpScreen from './Screens/SignUpScreen';
import SignUpThankScreen from './Screens/SignUpThankScreen';
import ForgotPasswordScreen from './Screens/ForgotPasswordScreen';
import OtpVerifyScreen from './Screens/OtpVerifyScreen';
import ChangePasswordScreen from './Screens/ChangePasswordScreen';
import ProductDetailScreen1 from './Screens/ProductDetailScreen1';
import ChangePasswordPop from './Screens/ChangePasswordPop';
import CheckOutScreen4 from './Screens/CheckOutScreen4';

import HomeScreen from './Screens/HomeScreen';
import CategoriesScreen from './Screens/CategoriesScreen';
import ProfileScreen from './Screens/ProfileScreen';
import MoreScreen from './Screens/MoreScreen';


import ShoppingCartScreen from './Screens/ShoppingCartScreen';
import ShoppingCartScreen1 from './Screens/ShoppingCartScreen1';
import ShoppingCartScreen2 from './Screens/ShoppingCartScreen2';
import ShoppingCartScreen3 from './Screens/ShoppingCartScreen3';
import ShoppingCartScreen4 from './Screens/ShoppingCartScreen4';
import ShoppingCartScreen5 from './Screens/ShoppingCartScreen5';
import ShoppingCartScreen6 from './Screens/ShoppingCartScreen6';
import ShoppingCartScreen7 from './Screens/ShoppingCartScreen7';
import ShoppingCartScreen8 from './Screens/ShoppingCartScreen8';
import ShoppingCartScreen9 from './Screens/ShoppingCartScreen9';
import ProductDetailScreen2 from './Screens/ProductDetailScreen2';
import ProductListScreen from './Screens/ProductListScreen';
import WishListScreen1 from './Screens/WishListScreen1';
import CheckOutScreen from './Screens/CheckOutScreen';
import VideoScreen from './Screens/VideoScreen';

import HomeScreen1 from './Screens/HomeScreen1';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();



const groceryLinking = {
  prefixes: ['https://groceryapp.com','groceryapp://'],
  
}

const App = () =>{
  const DrawerNavigat = ()=>{
    
    return(
      <Drawer.Navigator drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: {marginVertical: 5},
      }}
      drawerContent={(props) => <HomeScreen1 {...props} />}
      >
        <Drawer.Screen name="HomeScreen" component={HomeScreen} /> 
         
         
       </Drawer.Navigator>
    )}

  const TabNavigat =()=>{
    return(
    <Tab.Navigator lazy={true} tabBarOptions={
      {
          style: {
              
              height:50,
              backgroundColor: '#3BCC7A',
              borderTopLeftRadius: 18,
              borderTopRightRadius: 18,
              shadowOpacity:0.5,
              position:'absolute'
              // overflow: 'hidden',
              // borderColor: 'transparent',
              
          }
        }
      }>
      
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="CategoriesScreen" component={CategoriesScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen}/>
      <Tab.Screen name="MoreScreen" component={MoreScreen}/>
      
      <Tab.Screen name="ShoppingCartScreen" component={ShoppingCartScreen}/>
      <Tab.Screen name="ShoppingCartScreen6" component={ShoppingCartScreen6} />
      {/* <Tab.Screen name="ShoppingCartScreen5" component={ShoppingCartScreen5} /> */}
      {/* <Tab.Screen name="HomeScreen1" component={HomeScreen1} /> */}
    </Tab.Navigator>
)
  }

  return(
    
    <NavigationContainer linking={groceryLinking}>
      <Stack.Navigator initialRouteName={WelcomeScreen}>
      
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown: false}}/>
        <Stack.Screen name="SignUpThankScreen" component={SignUpThankScreen} options={{headerShown: false}}/>
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options={{headerShown: false}}/>
        <Stack.Screen name="OtpVerifyScreen" component={OtpVerifyScreen} options={{headerShown: false}}/>
        <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} options={{headerShown: false}}/>
        <Stack.Screen name="ProductDetailScreen1" component={ProductDetailScreen1} options={{headerShown: false}}/>
        <Stack.Screen name="ChangePasswordPop" component={ChangePasswordPop} options={{headerShown: false}}/>
        <Stack.Screen name="CheckOutScreen4" component={CheckOutScreen4} options={{headerShown: false}}/>
        <Stack.Screen name="ShoppingCartScreen6" component={ShoppingCartScreen6} options={{headerShown: false}}/>
        <Stack.Screen name="CheckOutScreen" component={CheckOutScreen} options={{headerShown: false}}/>
        <Stack.Screen name="HomeScreen1" component={HomeScreen1} />
        <Stack.Screen name="VideoScreen" component={VideoScreen} options={{headerShown: false}}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="TabNavigat" component={TabNavigat} options={{headerShown: false}}/>
        
        {/* <Stack.Screen name="VideoTest" component={VideoTest} options={{headerShown: false}}/> */}
        <Stack.Screen name="DrawerNavigat" component={DrawerNavigat} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;


      // <Drawer.Navigator>
      //   <Drawer.Screen name="HomeScreen1" component={HomeScreen1} />
      //   <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      // </Drawer.Navigator>