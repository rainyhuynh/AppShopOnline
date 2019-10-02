import { AsynStorage } from 'react-native'

const saveToken = async (token) => {
    try{
        await AsynStorage.setItem('@token', token)
        return 'Save token is successful.'
    }
    catch(e){
        return e
    }
}