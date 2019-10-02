import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Image, Dimensions, FlatList, RefreshControl } from 'react-native';

import getListProducts from '../../../../api/getListProduct'
import urlServer from '../../../../api/urlServer'

const icBackList = require('../../../../media/appIcon/backList.png')
const sp1 = require('../../../../media/images/sp1.jpeg')

const { width, height } = Dimensions.get("window")

function toTitleCase(str) {
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

export default class ListProduct extends Component{
    constructor(props){
        super(props)

        this.state = {
            listProducts: [],
            refreshing: false,
            page: 1
        },
        this.arrProducts = []
    }

    componentDidMount(){
        //get param from category
        const Idtype = this.props.navigation.getParam('category').id
        
        getListProducts(Idtype, 1)
            .then(arrProducts => {
                this.arrProducts = arrProducts
                this.setState({ listProducts: this.arrProducts })
            })
            .catch(error => console.log(error))
    }

    navigateProductDetail(product){
        this.props.navigation.navigate("ProductDetail", {product})
    }

    onRefresh(){
        this.setState({ refreshing: true });
        const newPage = this.state.page + 1;
        const idType = id;
        getListProduct(idType, newPage)
        .then(arrProduct => {
            this.arrProducts = this.arrProducts.concat(arrProduct);
            
            alert("Refresh control")
            console.log(this.arrProducts)

            this.setState({ 
                listProducts: this.arrProducts,
                refreshing: false 
            });
        })
        .catch(err => console.log(err));
    }

    render(){
        
        const { container, header, wrapper, iconbackStyles,
            titleStyle, productContainer, lastRowInfo,
            productImage, productInfo, wrapImageStyle, 
            txtName, txtPrice, txtMaterial, txtColor, txtShowDetail } = styles;

        const { id, name } = this.props.navigation.getParam('category')
     
        return(
            <View style={container}>
                <ScrollView style={wrapper}>
                    <View style={header}>
                        <TouchableOpacity 
                            onPress={() => this.props.navigation.goBack()}
                        >  
                            <Image source={icBackList} style={iconbackStyles} />
                        </TouchableOpacity>
                        <Text style={titleStyle}>{name}</Text>
                        <View style={iconbackStyles} />
                    </View>

                    <FlatList
                        keyExtractor={item => item.id}
                        data={this.state.listProducts}
                        numColumns={1}
                        refreshControl={
                            <RefreshControl 
                                refreshing={this.state.refreshing}
                                onRefresh={this.onRefresh.bind(this)}
                            />
                        }
                        renderItem={({item}) => (
                            <View style={productContainer}>
                                <View style={wrapImageStyle}>
                                    <Image style={productImage} source={{ uri: `${urlServer}images/product/${item.images[0]}`}} />
                                </View>
                                <View style={productInfo}>
                                    <Text style={txtName}>{toTitleCase(item.name)}</Text>
                                    <Text style={txtPrice}>{item.price}$</Text>
                                    <Text style={txtMaterial}>{item.material}</Text>
                                    <View style={lastRowInfo} >
                                        <Text style={txtColor}>{item.color}</Text>
                                        <View style={{ backgroundColor: item.color.toLowerCase(), height: width * 0.06, width: width * 0.06, borderRadius: width * 0.03 }} />
                                        <TouchableOpacity onPress={() => this.navigateProductDetail(item)}>
                                            <Text style={txtShowDetail}>SHOW DETAIL</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            )}
     
                        />
     
                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DBDBD8',
        padding: height * 0.01,
        
    },
    wrapper: {
        backgroundColor: '#fff',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        elevation: 8,
        paddingHorizontal: width * 0.01
    },
    header: {
        height: height * 0.08,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: width * 0.01,
        alignItems: 'center'
    },
    iconbackStyles: {
        width: width * 0.08,
        height: width * 0.08
    },
    productContainer: {
        flexDirection: 'row',
        borderTopColor: '#F0F0F0',
        borderTopWidth: 1,
        paddingVertical: width * 0.04
    },
    titleStyle: {
        fontFamily: 'Avenir',
        color: '#B10D65',
        fontSize: width * 0.05
    },
    wrapImageStyle: {
        width: width * 0.3,
        height: width * 0.3
    },
    productImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
    productInfo: {
        justifyContent: 'space-between',
        flex: 1,
        alignSelf: 'stretch'
    },
    lastRowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        alignItems: 'center',
        paddingRight: width * 0.01
    },
    txtName: {
        fontFamily: 'Avenir',
        color: '#BCBCBC',
        fontSize: width * 0.05,
        fontWeight: '700'
    }, 
    txtPrice: {
        fontFamily: 'Avenir',
        color: '#B10D65', 
    }, 
    txtMaterial: {
        fontFamily: 'Avenir'
    },
    txtColor: {
        fontFamily: 'Avenir'
    }, 
    txtShowDetail: {
        fontFamily: 'Avenir',
        color: '#B10D65',
        fontSize: width * 0.025
    }
});
