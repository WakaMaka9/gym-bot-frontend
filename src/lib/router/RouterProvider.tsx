import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


import { locationChanged, navigateChanged } from './navigate'
import { WebAppProvider } from '@vkruglikov/react-telegram-web-app'

type Props = React.PropsWithChildren

export function RouterProvider({ children }: Props) {
  const navigate = useNavigate()
  const location = useLocation()

  React.useEffect(() => {
    navigateChanged(navigate)
  }, [navigate])

  React.useEffect(() => {
    locationChanged(location)
  }, [location])

  return <WebAppProvider
    options={{
      smoothButtonsTransition: true,
    }}
  >{children}</WebAppProvider>
}
