import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import { fromLeft } from 'react-navigation-transitions'

import HomeView from './HomeView'
import ListProduct from '../ListProduct/ListProduct'
import ProductDetail from './../ProductDetail/ProductDetail'

// const StackNavigator = createStackNavigator({
//         HomeView: { screen: HomeView, params: this.props },
//         ProductDetail: { screen: ProductDetail },
//         ListProduct: { screen: ListProduct }
//     }, {
//             initialRouteName: 'HomeView',
//             transitionConfig: () => fromLeft(1000),
//             headerMode: 'none'
//     });

// export default createAppContainer(StackNavigator);


export default class Home extends Component{
        render(){

                const StackNavigator = createStackNavigator({
                HomeView: { screen: HomeView, params: this.props },
                ProductDetail: { screen: ProductDetail },
                ListProduct: { screen: ListProduct }
                }, {
                        initialRouteName: 'HomeView',
                        transitionConfig: () => fromLeft(1000),
                        headerMode: 'none'
                });

                const Statck = createAppContainer(StackNavigator);

                return(
                        <Statck />
                )
        }
}