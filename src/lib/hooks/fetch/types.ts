import { KeyValuePair } from 'lib/types'

export type RequestExtras<T, R> = {
    isLoadingAtStart?: boolean,
    onSuccess?(data: T, requestParams: R): void,
    onError?(error: KeyValuePair, requestParams: R): void
}

export type RequestParams = KeyValuePair
