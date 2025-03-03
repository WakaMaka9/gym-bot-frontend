import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { RouterProvider } from './RouterProvider'

export type RouteConfig = {
  path: string
  component: React.FC | typeof React.Component
  children?: RouteConfig[]
}

export type RouterConfig = {
  routes: RouteConfig[]
}

type RouteGuardProps = {
  route: RouteConfig
}

const RouteGuard = ({
  route,
}: RouteGuardProps) => {

  const Component = route.component
  return <Component />
}

const renderRoutes = (
  config: RouterConfig,
  parentPath?: string,
) =>
  config.routes.map((route) => (
    <Route
      key={route.path}
      path={parentPath ? parentPath + route.path : route.path}
      element={
        <RouteGuard
          route={route}
        />
      }
    >
      {route.children !== undefined &&
        renderRoutes({ routes: route.children }, route.path)}
    </Route>
  ))

export type RoutesProps = {
  config: RouterConfig
}

export const Navigator = ({ config }: RoutesProps) => (
  <RouterProvider>
    <Routes>{renderRoutes(config)}</Routes>
  </RouterProvider>
)
