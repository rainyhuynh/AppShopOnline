import React, { Component } from 'react'
import { 
    View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity 
} from 'react-native';

import urlServer from '../../../../api/urlServer'
import global from '../../../../api/global'

const back = require('../../../../media/appIcon/back.png');
const cart = require('../../../../media/appIcon/cartfull.png');

export default class ProductDetail extends Component{
    
    goBack(){
        const { navigation } = this.props
        navigation.goBack()
    }

    addThisProductToCart() {
        const product = this.props.navigation.getParam('product')
        global.addProductToCart(product);
    }
    
    render(){

        const {
            wrapper, cardStyle, header,
            footer, backStyle,
            imageContainer, cartStyle, textBlack,
            textSmoke, textHighlight, textMain, titleContainer,
            descContainer, productImageStyle, descStyle, txtMaterial, txtColor
        } = styles;

        ///get param from TopProduct
        const { name, price, color, material, description, images } = this.props.navigation.getParam('product')

        return(
            <View style={wrapper}>
                <View style={cardStyle}>
                    <ScrollView>
                        <View style={header}>
                            <TouchableOpacity onPress={this.goBack.bind(this)}>
                                <Image style={backStyle} source={back} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={this.addThisProductToCart.bind(this)}
                            >
                                <Image style={cartStyle} source={cart} />
                            </TouchableOpacity>
                        </View>
                        <View style={imageContainer}>
                            <ScrollView style={{ flexDirection: 'row', padding: 10, height: swiperHeight }} horizontal >
                                <Image source={{ uri: `${urlServer}images/product/${images[0]}` }} style={productImageStyle} />
                                <Image source={{ uri: `${urlServer}images/product/${images[1]}` }} style={productImageStyle} />
                            </ScrollView>
                        </View>
                        <View style={footer}>
                            <View style={titleContainer}>
                                <Text style={textMain}>
                                    <Text style={textBlack}>{name.toUpperCase()}</Text>
                                    <Text style={textHighlight}> / </Text>
                                    <Text style={textSmoke}>{price}$</Text>
                                </Text>
                            </View>
                            <View style={descContainer}>
                                <Text style={descStyle}>{description}</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15 }}>
                                    <Text style={txtMaterial}>Material {material} </Text>
                                    <View style={{ flexDirection: 'row' }} >
                                        <Text style={txtColor}>Color {color}</Text>
                                        <View style={{ height: 15, width: 15, backgroundColor: color.toLowerCase(), borderRadius: 15, marginLeft: 10, borderWidth: 1, borderColor: '#C21C70' }} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const { width, height } = Dimensions.get('window');
const swiperWidth = (width / 1.8) - 30;
const swiperHeight = (swiperWidth * 1200) / 960;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#D6D6D6',
    },
    cardStyle: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        marginHorizontal: 10,
        marginVertical: 10
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 20
    },
    cartStyle: {
        width: 25,
        height: 25
    },
    backStyle: {
        width: 25,
        height: 25
    },
    productStyle: {
        width: width / 2,
        height: width / 2
    },
    footer: {
        flex: 6
    },
    imageContainer: {
        flex: 6,
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 10,
        //marginTop: 15
    },
    textMain: {
        paddingLeft: 20,
        marginVertical: 10
    },
    textBlack: {
        fontFamily: 'Avenir',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3F3F46'
    },
    textSmoke: {
        fontFamily: 'Avenir',
        fontSize: 20,
        color: '#9A9A9A'
    },
    textHighlight: {
        fontFamily: 'Avenir',
        fontSize: 20,
        color: '#7D59C8'
    },
    titleContainer: {
        borderBottomWidth: 1,
        borderColor: '#F6F6F6',
        marginHorizontal: 10,
        paddingBottom: 5,
        marginTop: 20,
        alignItems: 'center'
    },
    descContainer: {
        margin: 5,
        marginBottom: 10,
        paddingTop: 10,
        paddingHorizontal: 10,
    },
    descStyle: {
        color: '#AFAFAF'
    },
    linkStyle: {
        color: '#7D59C8'
    },
    productImageStyle: {
        width: swiperWidth,
        height: swiperHeight,
        marginHorizontal: 5
    },
    mainRight: {
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        paddingLeft: 20
    },
    txtColor: {
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtMaterial: {
        color: '#C21C70',
        fontSize: 15,
        fontWeight: '400',
        fontFamily: 'Avenir'
    }
});