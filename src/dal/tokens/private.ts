import { d } from './domain'

export const saveTokenFx = d.effect<string, void, Error>()