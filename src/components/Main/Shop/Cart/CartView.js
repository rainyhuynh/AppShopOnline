import React, { Component } from 'react'
import { 
    View, Text, TouchableOpacity, ScrollView, 
    Dimensions, StyleSheet, Image, FlatList
} from 'react-native';

//import global from '../../../../api/global'
import urlServer from '../../../../api/urlServer'

function toTitleCase(str){
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

class CartView extends Component{
    
    gotoDetail(product) {
        const { navigation } = this.props;
        navigation.navigate('ProductDetail', { product});
    }

    removeProduct(id){

    }

    incrQuantity(id){

    }

    decrQuantity(id){

    }

    onSendOrder(){

    }

    render(){
        const { main, checkoutButton, checkoutTitle, wrapper,
                productStyle, mainRight, productController,
                txtName, txtPrice, productImage, numberOfProduct, 
                txtShowDetail, showDetailContainer,functionText } = styles;

        const { cartArray } = this.props.navigation.state.params
        const arrTotal = cartArray.map(e => e.product.price * e.quantity)
        const total = arrTotal.length ? arrTotal.reduce((a, b) => a + b) : 0
        console.log('CartView')
    
        return(
            <View style={wrapper}>
                <ScrollView style={main}>
                    
                <FlatList
                        keyExtractor={item => item.id}
                        data={cartArray}
                        numColumns={1}
                        renderItem={({item}) => (
                            <View style={productStyle}>
                                <Image source={{ uri: `${urlServer}images/product/${item.product.images[0]}` }} style={productImage} />
                                <View style={mainRight}>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                        <Text style={txtName}>{toTitleCase(item.product.name)}</Text>
                                        <TouchableOpacity onPress={this.removeProduct(item.product.id)}>
                                            <Text style={{ fontFamily: 'Avenir', color: '#969696', fontSize: 15 }}>X</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View>
                                        <Text style={txtPrice}>{item.product.price}$</Text>
                                    </View>
                                    <View style={productController}>
                                        <View style={numberOfProduct}>
                                            <TouchableOpacity onPress={this.incrQuantity(item.product.id)}>
                                                <Text styles={functionText}>+</Text>
                                            </TouchableOpacity>
                                            <Text>{item.quantity}</Text>
                                            <TouchableOpacity onPress={this.decrQuantity(item.product.id)}>
                                                <Text styles={functionText}>-</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <TouchableOpacity style={showDetailContainer} onPress={() => this.gotoDetail(item.product)}>
                                            <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )}
                    />
                    
                </ScrollView>
                <TouchableOpacity style={checkoutButton} onPress={this.onSendOrder.bind(this)}>
                    <Text style={checkoutTitle}>TOTAL {total}$ CHECKOUT NOW</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#DFDFDF'
    },
    checkoutButton: {
        height: 50,
        margin: 10,
        marginTop: 0,
        backgroundColor: '#2ABB9C',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    main: {
        width, backgroundColor: '#DFDFDF'
    },
    checkoutTitle: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Avenir'
    },
    productStyle: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    productImage: {
        width: imageWidth,
        height: imageHeight,
        flex: 1,
        resizeMode: 'center'
    },
    mainRight: {
        flex: 3,
        justifyContent: 'space-between'
    },
    productController: {
        flexDirection: 'row'
    },
    numberOfProduct: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    txtName: {
        paddingLeft: 20,
        color: '#A7A7A7',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtPrice: {
        paddingLeft: 20,
        color: '#C21C70',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir'
    },
    txtShowDetail: {
        color: '#C21C70',
        fontSize: 10,
        fontWeight: '400',
        fontFamily: 'Avenir',
        textAlign: 'right',
    },
    showDetailContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    functionText: {
        fontSize: 15,
    }
});

export default CartView