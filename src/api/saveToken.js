import { AsynStorage } from 'react-native'

const saveToken = async (token) => {
    try{
        await AsynStorage.setItem('@token', token)
        return 'THANH_CONG'
    }
    catch(e){
        return e
    }
}

export default saveToken;