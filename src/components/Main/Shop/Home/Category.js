import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper'
import urlServer from './../../../../api/urlServer'

const { width } = Dimensions.get('window');

export default class Category extends Component{
    
    gotoListProduct(category){
        this.props.navigation.navigate('ListProduct', {category})
    }
    
    render(){

        const { wrapper, textStyle, imageStyle, cateTitle } = styles;
        const { types } = this.props
        
        const swiper = (
            <Swiper showsPagination width={imageWidth} height={imageHeight} >
                { types.map(e => (
                    <TouchableOpacity onPress={() => this.gotoListProduct(e)} key={e.id}>
                        <ImageBackground source={{ uri: `${urlServer}/images/type/${e.image}` }} style={imageStyle}>
                            <Text style={cateTitle}>{e.name}</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                )) }
            </Swiper>
        );

        return(
            <View style={wrapper}>
                <View style={{ justifyContent: 'center', height: 50 }}>
                    <Text style={textStyle} >LIST OF CATEGORY</Text>
                </View>
                <View style={{ justifyContent: 'flex-end', flex: 4 }}>
                    { types.length ? swiper : null }
                </View>
            </View>
        )
    }
}

//800 x 400
const imageWidth = width - 40;
const imageHeight = imageWidth / 2;

const styles = StyleSheet.create({
    wrapper: {
        width: width - 20,
        backgroundColor: '#FFF',
        margin: 10,
        justifyContent: 'space-between',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0
    },
    textStyle: {
        fontSize: 20,
        color: '#AFAEAF'
    },
    imageStyle: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cateTitle: {
        fontSize: 20,
        fontFamily: 'Avenir',
        color: '#9A9A9A'
    }
});