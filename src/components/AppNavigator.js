import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { fromLeft } from 'react-navigation-transitions';

import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';
import OrderHistory from './OrderHistory/OrderHistory';

import refreshToken from './../api/refreshToken'
import global from './../api/global'

const StackNavigator = createStackNavigator({
    Authentication: { screen: Authentication },
    ChangeInfo: { screen: ChangeInfo },
    OrderHistory: { screen: OrderHistory },
    Main: { screen: Main }
}, {
        initialRouteName: 'Main',
        transitionConfig: () => fromLeft(1000),
        headerMode: 'none'
});

const AppNavi = createAppContainer(StackNavigator);

export default class AppNavigator extends Component{
    componentDidMount(){
        setInterval(refreshToken, 30000);
    }

    render(){
        return(
            <AppNavi />
        )
    }
}




