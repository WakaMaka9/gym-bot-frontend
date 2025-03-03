import { attach, createEvent, createStore } from 'effector'
import type { Location, NavigateFunction } from 'react-router-dom'

export const navigateChanged = createEvent<NavigateFunction>()
export const locationChanged = createEvent<Location>()

const $navigate = createStore<NavigateFunction | null>(null)
const $location = createStore<Location | null>(null)

$navigate.on(navigateChanged, (_, navigate) => navigate)
$location.on(locationChanged, (_, location) => location)

export const navigateToFx = attach({
  source: $navigate,
  effect: (
    navigate,
    { pathname, search }: { pathname?: string; search?: string; hash?: string },
  ) => {
    if (!navigate) throw new Error('navigate is null')
    navigate({ pathname, search, hash: '' })
  },
})
