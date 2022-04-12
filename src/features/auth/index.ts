import * as authUtils from './utils'
import { useGetOAuthToken, useGetResidentId } from './actions'

const authActions = {
    useGetOAuthToken,
    useGetResidentId
}

export {
    authUtils,
    authActions
}
