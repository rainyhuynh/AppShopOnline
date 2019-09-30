import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import urlServer from './../../../../api/urlServer'

const { width } = Dimensions.get('window');

export default class TopProduct extends Component{
    
    navigateDetail(product){
        this.props.navigation.navigate('ProductDetail', {product})
    }
    
    render(){
        
        const { 
            container, titleContainer, title, 
            body, productContainer, productImage,
            productName, productPrice 
        } = styles;

        const  { topProducts } = this.props;

        return(
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>TOP PRODUCT</Text>
                </View>
                    <FlatList 
                        contentContainerStyle={body}
                        data={topProducts}
                        keyExtractor={item => item.id}
                        numColumns={2}
                        renderItem={({ item }) => (
                            <TouchableOpacity 
                                onPress={() => this.navigateDetail(item)}
                                style={productContainer}
                            >
                                <Image source={{ uri: `${urlServer}images/product/${item.images[0]}` }} style={productImage} />
                                <Text style={productName}>{item.name.toUpperCase()}</Text>
                                <Text style={productPrice}>{item.price}$</Text>
                            </TouchableOpacity>
                        )}
                        ItemSeparatorComponent={() => <View style={{ height: 1, width }} />}
                    />
                </View>
        )
    }
}

const produtWidth = (width - 60) / 2;
const productImageHeight = (produtWidth / 361) * 452; 

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    titleContainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10
    },
    title: {
        color: '#D3D3CF',
        fontSize: 20
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingBottom: 10
    },
    productContainer: {
        width: produtWidth,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    productImage: {
        width: produtWidth,
        height: productImageHeight
    },
    productName: {
        marginVertical: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#D3D3CF',
        fontWeight: '500'
    },
    productPrice: {
        marginBottom: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#662F90'
    }
});
