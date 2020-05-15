import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from 'App'

const Home = lazy(() => import('components/Home/Home'))

const Router = () => (
  <BrowserRouter>
    <Suspense fallback="Loading..">
      <App>
        <Switch>
          <Route path="/" component={ Home } exact />
        </Switch>
      </App>
    </Suspense>
  </BrowserRouter>
)

export default Router
