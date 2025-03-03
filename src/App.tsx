import React from 'react'
import { GlobalStyle, Loader } from './ui'
import { routerConfig } from './pages/router-config'
import { Navigator } from './lib/router'
import { useUnit } from 'effector-react'
import { $appReady } from './features/app/model/public'
import { useExpand, useInitData } from '@vkruglikov/react-telegram-web-app'
import { getUser } from './features/user/model'

export const App = () => {
  const appReady = useUnit($appReady)
  const [initDataUnsafe] = useInitData();
  const [isExpanded, expand] = useExpand();

  React.useEffect(() => {
    if (!isExpanded) {
      expand()
    }
    if (initDataUnsafe && initDataUnsafe.user) {
      getUser(initDataUnsafe.user)
    }
  }, [initDataUnsafe, isExpanded])

  if (!appReady) {
    return <Loader />
  }



  return (
    <>
      <GlobalStyle />
      <React.Suspense fallback="loading...">
        <Navigator config={routerConfig} />
      </React.Suspense>
    </>
  )
}