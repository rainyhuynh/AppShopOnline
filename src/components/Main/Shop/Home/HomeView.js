import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import Collection from './Collection'
import Category from './Category'
import TopProduct from './TopProduct'

export default class HomeView extends Component{
    render(){

        const { types, topProducts } = this.props.navigation.state.params

        // console.log("HomeView")
        // console.log(this.props.navigation)
        //console.log(topProducts)

        return(
            <ScrollView style={{ flex:1, backgroundColor: '#DBDBD8'}}>
                <Collection navigation={this.props.navigation} />
                <Category navigation={this.props.navigation} types={types} /> 
                <TopProduct navigation={this.props.navigation} topProducts={topProducts}/>
            </ScrollView>
        )
    }
}