import { d } from './domain'
import { AccessToken } from './types'

export const $accessToken = d.store<AccessToken>(null)
export const saveToken = d.event<string>()
export const onSaveToken = d.event()