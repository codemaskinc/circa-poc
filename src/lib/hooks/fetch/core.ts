import { from, lastValueFrom } from 'rxjs'
import qs from 'qs'
import axios from 'axios'
import { catchError } from 'rxjs/operators'
import { HttpMethod, RequestConfig } from 'lib/types'
import { RequestParams } from './types'

type FetchPipeConfig = {
    config: RequestConfig,
    params?: RequestParams
}

export const useFetchPipe = () => ({
    fetchPipe: ({ config, params }: FetchPipeConfig) => {
        const requestConfig = {
            ...config,
            timeout: config.timeout,
            data: config.method !== HttpMethod.GET ? params || {} : undefined,
            params: config.method === HttpMethod.GET ? params : undefined,
            paramsSerializer: config.method === HttpMethod.GET
                ? params => qs.stringify(params)
                : undefined,
        }

        return lastValueFrom(from(axios(requestConfig))
            .pipe(
                catchError(async error => {
                    throw error.response
                })
            ))
    }
})
