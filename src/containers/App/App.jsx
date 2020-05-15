import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Header from 'containers/Header/HeaderContainer'

const App = ({ children, checkUser }) => {
  useEffect(() => {
    const user = localStorage.getItem('user')
    const token = localStorage.getItem('token')
    checkUser(user, token)
  }, [checkUser])

  return (
    <>
      <Header />
      { children } 
    </>
  )
}

App.propTypes = {
  checkUser: PropTypes.func
}

App.defaultProps = {
  checkUser: () => {}
}

export default App
