import AsyncStorage from '@react-native-async-storage/async-storage'
import { APP_CONFIG } from 'lib/config'

export const getAccessToken = () => AsyncStorage
    .getItem(APP_CONFIG.KEYS.ACCESS_TOKEN)
    .catch(() => null)

export const getRefreshToken = () => AsyncStorage
    .getItem(APP_CONFIG.KEYS.REFRESH_TOKEN)
    .catch(() => null)

export const saveAccessToken = (accessToken: string) => AsyncStorage
    .setItem(APP_CONFIG.KEYS.ACCESS_TOKEN, accessToken)
    .catch(() => {})

export const saveRefreshToken = (refreshToken: string) => AsyncStorage
    .setItem(APP_CONFIG.KEYS.REFRESH_TOKEN, refreshToken)
    .catch(() => {})

export const clearAuthTokens = () => AsyncStorage
    .multiRemove([
        APP_CONFIG.KEYS.ACCESS_TOKEN,
        APP_CONFIG.KEYS.REFRESH_TOKEN,
    ])
    .catch(() => {})
