import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'

import backSpecial from './../../media/appIcon/backs.png';

export default class ChangeInfo extends PureComponent{
    constructor(props){
        super(props)
        this.state = {
            txtName: "Rainy Huynh",
            txtPhone: "0977073155",
            txtAddress: "12/3 Kinh Duong Vuong, Binh Tan."
        }
    }
    
    goBackToMain(){
        const {navigation} = this.props
        navigation.goBack()
    }
    
    render(){
        
        const {wrapper, header, body, backIconStyle, headerTitle, textInput, changeInfoBtnStyle, changeInfoText } = styles

        return(
            <View style={wrapper}>
                <View style={header}>
                    <Text style={headerTitle}>User information</Text>
                    <TouchableOpacity onPress={this.goBackToMain.bind(this)}>
                        <Image source={backSpecial} style={backIconStyle} />
                    </TouchableOpacity>
                </View>

                <View style={body}>
                    <TextInput 
                        style={textInput} 
                        placeholder="Enter your user name" 
                        autoCapitalize="none"
                        value={this.state.txtName}
                        onChangeText={txtName => this.setState({...this.state, txtName})}
                        />
                    <TextInput 
                        style={textInput} 
                        placeholder="Enter your phone" 
                        autoCapitalize="none"
                        value={this.state.txtPhone}
                        onChangeText={txtPhone => this.setState({...this.state, txtPhone})}
                        />
                    <TextInput 
                        style={textInput} 
                        placeholder="Enter your address" 
                        autoCapitalize="none"
                        value={this.state.txtAddress}
                        onChangeText={txtAddress => this.setState({...this.state, txtAddress})}
                        />
                    <TouchableOpacity style={changeInfoBtnStyle}>
                        <Text style={changeInfoText}>Change your information</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

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
    textInput:{
        height: 45,
        backgroundColor: "#fff",
        borderColor: '#2ABB9C',
        borderWidth: 1,
        borderRadius: 20,
        paddingLeft: 20,
        marginBottom: 10,
        marginHorizontal: 20,
        marginTop: 5
    },
    changeInfoBtnStyle: {
        backgroundColor: '#2ABB9C',
        height: 45,
        alignItems: "center",
        borderRadius: 20,
        marginHorizontal: 20,
        justifyContent: "center",
        alignSelf: "stretch"
    },
    changeInfoText: {
        color: "#fff",
        fontSize: 16,
    }
})