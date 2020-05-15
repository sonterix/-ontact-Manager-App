import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import App from 'containers/App/AppContainer'
import Loading from 'components/Loading/Loading'

const Home = lazy(() => import('components/Home/Home'))
const Login = lazy(() => import('containers/Login/LoginContainer'))
const Logout = lazy(() => import('containers/Logout/LogoutContainer'))

const PrivateRoute = ({ component: Component, ...props }) => {
  const isLogged = useSelector(({ login: { isLogged } }) => isLogged)
  return (
    <Route { ...props } render={({ location }) =>
        isLogged
        ? <Component { ...props } />
        : <Redirect to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
      }
    />
  )
}

const Router = () => (
  <BrowserRouter>
    <App>
      <Suspense fallback={ <Loading /> }>
        <Switch>
          <Route path="/" component={ Home } exact />
          <Route path="/login" component={ Login } />
          <Route path="/logout" component={ Logout } />
          <PrivateRoute path="/contacts" component={ () => <h1 className="wrapper">Contacts</h1>  }/>
          <PrivateRoute path="/contact-details/:userId" component={ () => <h1 className="wrapper">Contact Details</h1> } />
        </Switch>
      </Suspense>
    </App>
  </BrowserRouter>
)

export default Router
