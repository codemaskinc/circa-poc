import { useFetch } from 'lib/hooks'
import { HttpMethod, VoidFunction } from 'lib/types'
import { getOAuthParameters, getOAuthUrl } from 'lib/common'
import { useResidentStore } from 'lib/stores'
import { GetOAuthTokenResponse, GetResidentIdResponse } from './types'
import { saveAccessToken, saveRefreshToken } from './utils'

export const useGetOAuthToken = (
    onSuccess: VoidFunction,
    onError?: VoidFunction
) => {
    const { fetch, fetchState } = useFetch<GetOAuthTokenResponse>({
        url: `${getOAuthUrl()}/token`,
        method: HttpMethod.POST
    }, {
        onSuccess: async ({ id_token, refresh_token }) => {
            await saveAccessToken(id_token)
            // todo this is poc, we won't do anything with refresh token
            await saveRefreshToken(refresh_token)

            onSuccess()
        },
        onError
    })

    return {
        fetch: () => fetch(getOAuthParameters()),
        fetchState
    }
}

export const useGetResidentId = (onError: VoidFunction) => {
    const { residentActions: { setResidentId } } = useResidentStore()

    return useFetch<GetResidentIdResponse>({
        url: '/residents',
        method: HttpMethod.GET
    }, {
        onSuccess: async ({ residentData: { id } }) => setResidentId(id),
        onError
    })
}
