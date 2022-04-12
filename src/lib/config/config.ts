import { getApiUrl } from '../common'

export const APP_CONFIG = {
    KEYS: {
        ACCESS_TOKEN: 'circa_access_token',
        REFRESH_TOKEN: 'circa_refresh_token'
    },
    URLS: {
        API: getApiUrl()
    },
    REQUEST_TIMEOUT: 10000
}
