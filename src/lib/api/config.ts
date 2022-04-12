import axios from 'axios'
import { authUtils } from 'features/auth'
import { APP_CONFIG } from '../config'

export const setAxiosDefaults = () => {
    axios.defaults.baseURL = APP_CONFIG.URLS.API
    axios.defaults.timeout = APP_CONFIG.REQUEST_TIMEOUT
}

axios.interceptors.request.use(async request => {
    const authToken = await authUtils.getAccessToken()

    request.headers = request.headers || {}

    if (authToken) {
        request.headers.Authorization = `Bearer ${authToken}`
    }

    return request
})
