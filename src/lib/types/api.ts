import { KeyValuePair } from './common'

export enum HttpMethod {
    GET = 'get',
    POST = 'post',
    PUT = 'put',
    PATCH = 'patch',
    DELETE = 'delete'
}

export enum ErrorCodes {
    Unauthorized = 401,
    BadRequest = 400,
    Forbidden = 403,
    NotFound = 404,
    TooManyRequests = 429
}

export type RequestConfig = {
    url: string,
    method: HttpMethod,
    timeout?: number
}

export type OnSuccessResponse<T = KeyValuePair, R = KeyValuePair> = (data: T, request: R) => void
export type OnErrorResponse<T = KeyValuePair, R = KeyValuePair> = (error: T, request: R) => void

export type Response<T> = {
    data: T,
    status: number,
    statusText: string,
    headers: KeyValuePair,
    config: KeyValuePair,
    response?: Response<T>
}
