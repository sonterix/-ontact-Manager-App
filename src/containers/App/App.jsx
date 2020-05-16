import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Header from 'containers/Header/HeaderContainer'
import Loading from 'components/UI/Loading/Loading'
import Alert from 'components/UI/Alert/Alert'

const App = ({ children, checkUser, loading, alertMessage: { status: alertStatus, message: alertMessage } }) => {
  useEffect(() => {
    const user = localStorage.getItem('user')
    const token = localStorage.getItem('token')
    checkUser(user, token)
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Header />
      { children } 
      { loading && <Loading /> }
      { alertStatus && <Alert message={ alertMessage } /> }
    </>
  )
}

App.propTypes = {
  checkUser: PropTypes.func,
  loading: PropTypes.bool
}

App.defaultProps = {
  checkUser: () => {},
  loading: false
}

export default App
