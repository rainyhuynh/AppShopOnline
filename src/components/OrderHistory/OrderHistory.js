import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native'

import backSpecial from './../../media/appIcon/backs.png';

export default class OrderHistory extends PureComponent{
    constructor(props){
        super(props)
        this.state = {
            arrOrders: []
        }
    }

    goBackToMain(){
        const {navigation} = this.props
        navigation.goBack()
    }

    render(){
        
        const {wrapper, header, body, backIconStyle, headerTitle, orderRow, rowStyle } = styles

        return(
            <View style={wrapper}>
                <View style={header}>
                    <Text style={headerTitle}>Other history</Text>
                    <TouchableOpacity onPress={this.goBackToMain.bind(this)}>
                        <Image source={backSpecial} style={backIconStyle} />
                    </TouchableOpacity>
                </View>

                <View style={body}>
                    <ScrollView>
                        <View style={orderRow}>
                            <View style={rowStyle}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Order id:</Text>
                                <Text style={{ color: '#2ABB9C' }}>ORD001</Text>
                            </View>
                            <View style={rowStyle}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>OrderTime:</Text>
                                <Text style={{ color: '#C21C70' }}>2017-04-19 08:30:08</Text>
                            </View>
                            <View style={rowStyle}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Status:</Text>
                                <Text style={{ color: '#2ABB9C' }}>Pending</Text>
                            </View>
                            <View style={rowStyle}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Total:</Text>
                                <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>100$</Text>
                            </View>
                        </View>
                        <View style={orderRow}>
                            <View style={rowStyle}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Order id:</Text>
                                <Text style={{ color: '#2ABB9C' }}>ORD001</Text>
                            </View>
                            <View style={rowStyle}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>OrderTime:</Text>
                                <Text style={{ color: '#C21C70' }}>2017-04-19 08:30:08</Text>
                            </View>
                            <View style={rowStyle}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Status:</Text>
                                <Text style={{ color: '#2ABB9C' }}>Pending</Text>
                            </View>
                            <View style={rowStyle}>
                                <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Total:</Text>
                                <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>100$</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const { width } = Dimensions.get('window');


const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: "#fff",
        flex: 1
    },
    header:{
        flex: 1,
        backgroundColor: "#2ABB9C",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 10
    },
    body: {
        flex: 10,
        backgroundColor: "#F6F6F6",
        justifyContent: "center"
    },
    headerTitle: {
        color: "#fff",
        fontSize: 18,
        fontFamily: "Avenir"
    },
    backIconStyle: {
        width: 30,
        height: 30
    },
    orderRow: {
        backgroundColor: '#FFF',
        margin: 10,
        padding: 10,
        borderRadius: 2,
        justifyContent: "space-around",
        height: width / 3,
        shadowColor: '#DFDFDF',
        shadowOpacity: 0.2,
        shadowOffset: {width: 2, height: 2}
    },
    rowStyle: {
        flexDirection: 'row', 
        justifyContent: 'space-between'
    }
})