import { d } from "./domain"

export const loadApp = d.event()

export const $appReady = d.store(false)