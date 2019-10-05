import { AsyncStorage } from 'react-native'

const removeCart = async () => {
    try{
        const value = await AsyncStorage.removeItem('@cart')
        if(value === null)
            alert('Removed cart is done!')
        return []
    }
    catch(e){
        return e
    }
}

export default removeCart
