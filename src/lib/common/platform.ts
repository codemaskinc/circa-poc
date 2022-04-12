import { Dimensions, Platform } from 'react-native'

const isIOS = Platform.OS === 'ios'
const isAndroid = Platform.OS === 'android'
const isSmallPhone = isIOS && Dimensions.get('window').width <= 375

export const platform = {
    isIOS,
    isAndroid,
    isSmallPhone
}
