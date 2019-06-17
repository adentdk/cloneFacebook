import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';
import {
    TabNavigator,
    StackNavigator
} from 'react-navigation';

import Login from './screens/Login';
import News from './screens/News';
import HeaderMenu from './screens/HeaderMenu';


export const TabNavigate = TabNavigator({
    Login:{screen:Login},
    News:{screen:News},

},
{
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: false,
    tabBarComponent: props=>{
        return(
            <HeaderMenu navigation={props.navigation}/>
        )
    }
});


// export const StackOverTabs = StackNavigator({
//     Root: {screen:TabNavigate},
//     GotoAbout:{screen:About}
// });


// export const SignedOut = StackNavigator({
//     Login:{screen:Login,navigationOptions:{header:null}},
//     Signup:{screen:Signup,navigationOptions:{header:null}}
// });


