import { AxiosRequestConfig, AxiosError } from 'axios'

export enum Method {
    get = 'GET',
    post = 'POST',
    put = 'PUT',
    patch = 'PATCH',
    delete = 'DELETE',
}

export type Request = {
    method: Method
    url: string
    headers?: AxiosRequestConfig['headers']
    accessToken?: string
    isAuthRequest?: boolean
    query?: {
        [key: string]: number | string | undefined | number[] | string[]
    }
    fake?: boolean
    // eslint-disable-next-line @typescript-eslint/ban-types
    body?: Object | FormData
    responseType?: AxiosRequestConfig['responseType']
}

export type AccessToken = string | null