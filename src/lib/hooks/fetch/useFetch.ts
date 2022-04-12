import { useState } from 'react'
import { setAxiosDefaults } from 'lib/api'
import { KeyValuePair, RequestConfig, Response } from 'lib/types'
import { RequestExtras } from './types'
import { useFetchPipe } from './core'

setAxiosDefaults()

export const useFetch = <ResponseType , RequestParams = KeyValuePair>(
    config: RequestConfig,
    extras?: RequestExtras<ResponseType, RequestParams>,
) => {
    const { fetchPipe } = useFetchPipe()
    const [hasError, setError] = useState(false)
    const [isLoading, setLoading] = useState(extras?.isLoadingAtStart || false)

    return {
        fetchState: {
            hasError,
            isLoading,
        },
        fetch: (params?: RequestParams) => {
            setLoading(true)
            setError(false)

            fetchPipe({
                config,
                params,
            })
                .then((response: Response<ResponseType>) => {
                    setError(false)
                    setLoading(false)

                    if (extras?.onSuccess) {
                        extras.onSuccess(response.data, params as RequestParams)
                    }
                })
                .catch((response: Response<KeyValuePair>) => {
                    setError(true)
                    setLoading(false)

                    if (extras?.onError) {
                        extras?.onError(response, params as RequestParams)
                    }
                })
        },
    }
}
