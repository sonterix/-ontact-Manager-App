import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Home = lazy(() => import('components/Home/Home'))

const Router = () => (
  <BrowserRouter>
    <Suspense fallback="Loading..">
      <Switch>
        <Route path="/" component={ Home } exact />
      </Switch>
    </Suspense>
  </BrowserRouter>
)

export default Router
