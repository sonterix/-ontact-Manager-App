import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import App from 'containers/App/AppContainer'
import Loading from 'components/UI/Loading/Loading'

const Home = lazy(() => import('components/Home/Home'))
const Login = lazy(() => import('containers/Login/LoginContainer'))
const Logout = lazy(() => import('containers/Logout/LogoutContainer'))
const Contacts = lazy(() => import('containers/Contacts/ContactsContainer'))
const ContactDetails = lazy(() => import('containers/ContactDetails/ContactDetailsContainer'))
const ContactCreate = lazy(() => import('containers/ContactCreate/ContactCreateContainer'))

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
          <Route path="/login" component={ Login } exact />
          <Route path="/logout" component={ Logout } exact />
          <PrivateRoute path={[ '/contacts/:pageId', '/contacts' ]} component={ Contacts } />
          <PrivateRoute path="/contact-details/:userId" component={ ContactDetails } />
          <PrivateRoute path="/contact-create" component={ ContactCreate } />
        </Switch>
      </Suspense>
    </App>
  </BrowserRouter>
)

export default Router
