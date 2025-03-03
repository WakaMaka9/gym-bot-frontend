import { AxiosError, AxiosResponse } from 'axios'
import { d } from './domain'
import { attach } from 'effector'
import { $accessToken } from '../tokens'
import { Request } from './types'

export type AuthRequestFxParams = {
    url: string,
    accessToken: string,
}

export const requestFx = d.effect<Request, AxiosResponse, AxiosError>()
export const authRequestFx = attach({
    effect: requestFx,
    source: $accessToken,
    mapParams: (data: Request, accessToken) => ({
        ...data,
        accessToken: accessToken || undefined,
        isAuthRequest: true,
    }),
})