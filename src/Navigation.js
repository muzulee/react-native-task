import React from 'react'
import {FlatList, View, TouchableOpacity, Text, Image, StatusBar, Platform} from 'react-native'
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import {TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation'
import getSlideFromRightTransition from 'react-navigation-slide-from-right-transition';

import LoginScreen from './LoginScreen'
import SignupScreen from './SignupScreen'
import HomeScreen from './HomeScreen'
import UserProfileScreen from './UserProfileScreen'
import ProductScreen from './ProductScreen'

//Tab
const TopTab = TabNavigator({
    loginscreen:{screen:LoginScreen},
    signupscreen:{screen:SignupScreen}
},{
    tabBarLabel: "Login",
    tabBarOptions:{
        activeBackgroundColor:'white',
        style:{backgroundColor:Platform.select({ios:'white', android:'gainsboro'}), borderTopColor: 'transparent', borderTopWidth: 0, elevation: 0},
        labelStyle:{color:Platform.select({ios:null, android:'magenta'}), fontSize:20, fontWeight: "bold"},
        indicatorStyle:{backgroundColor:'#fff'},
    }
})

const BottomTab = TabNavigator({
    profilescreen:{
        screen:UserProfileScreen,
        navigationOptions: {
          //tabBarLabel: "Profile",
          tabBarIcon: ({ tintColor }) => (
            <FontAwesome name="user" color="black" size={20} />
          ),
        }
    },
    productscreen:{
        screen:ProductScreen,
        navigationOptions: {
            //tabBarLabel: "Product",
            tabBarIcon: ({ tintColor }) => (
              <Entypo name="shop" color="black" size={20} />
              ),
        }
    }
},{
    tabBarLabel: "Profile",
    tabBarPosition: 'bottom',
    tabBarOptions:{
        showIcon: true,
        activeBackgroundColor:'white',
        style:{backgroundColor:Platform.select({ios:'white', android:'gainsboro'}), borderTopColor: 'transparent', borderTopWidth: 0, elevation: 0},
        labelStyle:{color:Platform.select({ios:null, android:'black'})},
        indicatorStyle:{backgroundColor:'#fff'},
    }
})

const TabNavigationOptions = (props) => ({
    title:'FURNITURE ONLINE',
    headerStyle:{backgroundColor:'orange', borderBottomColor: 'transparent', borderBottomWidth: 0, elevation: 0},
    headerLeft:<DrawerOpenButton {...props} />
})

const StackNavigationOptions = (props) => ({
    headerStyle:{backgroundColor:'#4d3241'},
    headerTitleStyle:{color:'white'},
    headerTintColor:'white',
    headerBackTitle:null,
})

export const DrawerOpenButton = (props) => (
    <TouchableOpacity onPress={() => props.navigation.navigate('DrawerOpen')}>
        <Image style={{marginLeft:15, width:24, height:24}} source={require('./../res/icon_hamburger.png')}/>
    </TouchableOpacity>
)

//Stack
const Stack = StackNavigator({
    root:{screen:TopTab, navigationOptions:TabNavigationOptions},
},{
    navigationOptions:StackNavigationOptions,
    transitionConfig:getSlideFromRightTransition
})

const Stack_Profile = StackNavigator({
    root:{screen:BottomTab, navigationOptions:TabNavigationOptions},
},{
    navigationOptions:StackNavigationOptions,
    transitionConfig:getSlideFromRightTransition
})

//Drawer
const Drawer = DrawerNavigator({
    main:{screen:Stack},
    userprofile:{screen:Stack_Profile}
},{
    navigationOptions:{
        drawerLockMode:'locked-closed',
    },
    backBehavior:'none'
})

//Modal Stack (root)
const ModalStack = StackNavigator({
    logout:{screen:HomeScreen},
    login:{screen:Drawer},
    userprofile:{screen:UserProfileScreen}
},{
    mode:'modal',
    headerMode:'none'
})

export default class Navigation extends React.Component{
    render(){
        return([
            <StatusBar key='statusbar' barStyle="light-content"/>,
            <ModalStack key='navigation'/>
        ])
    }
}
