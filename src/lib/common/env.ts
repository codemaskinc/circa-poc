import env from 'react-native-config'

export const getCredentialsFromEnv = () => ({
    login: env.login,
    password: env.password
})

export const getOAuthUrl = () => env.oauth_url
export const getApiUrl = () => env.api_url
export const getClientId = () => env.client_id

export const getOAuthParameters = () => ({
    client_id: getClientId(),
    grant_type: 'password',
    scope: `openid ${getClientId()} offline_access profile`,
    username: env.login,
    password: env.password,
    response_type: 'token id_token'
})

const validateEnvs = () => {
    const credentials = getCredentialsFromEnv()

    if (!credentials.login || !credentials.password) {
        throw new Error('Tried to run the app without the credentials')
    }

    const oauthUrl = getOAuthUrl()

    if (!oauthUrl) {
        throw new Error('Tried to run the app without the OAuth url')
    }

    const apiUrl = getApiUrl()

    if (!apiUrl) {
        throw new Error('Tried to run the app without the API url')
    }

    const clientId = getClientId()

    if (!clientId) {
        throw new Error('Tried to run the app without the clienId')
    }
}

validateEnvs()
