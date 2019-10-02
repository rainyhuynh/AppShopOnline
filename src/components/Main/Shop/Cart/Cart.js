import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { fromLeft } from 'react-navigation-transitions';
import Cartview from './CartView'
import ProductDetail from './../ProductDetail/ProductDetail'

// const StackNavigator = createStackNavigator({
//     Cartview: { screen: Cartview },
//     ProductDetail: { screen: ProductDetail }
// }, {
//         initialRouteName: 'Cartview',
//         transitionConfig: () => fromLeft(1000),
//         headerMode: 'none'
// });

// export default createAppContainer(StackNavigator);

export default class Cart extends Component{
    
    render(){
        const StackNavigator = createStackNavigator({
            Cartview: { screen: Cartview, params: this.props },
            ProductDetail: { screen: ProductDetail },
            }, {
                    initialRouteName: 'Cartview',
                    transitionConfig: () => fromLeft(1000),
                    headerMode: 'none'
            });

        const Statck = createAppContainer(StackNavigator);

        return(
            <Statck />
        )
    }
}