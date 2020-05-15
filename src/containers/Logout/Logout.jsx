import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { setLogoutLS } from 'helpers'

const Logout = ({ logoutUser }) => {
  setLogoutLS()
  logoutUser()
  return <Redirect to="/login" />
}

Logout.propTypes = {
  logoutUser: PropTypes.func
}


Logout.defaultProps = {
  logoutUser: () => {}
}

export default Logout
