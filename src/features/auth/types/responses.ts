export type GetOAuthTokenResponse = {
    access_token: string,
    token_type: string,
    expires_in: string,
    refresh_token: string,
    id_token: string
}

export type GetResidentIdResponse = {
    residentData: {
        id: string
    }
}
