import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faUserAltSlash } from '@fortawesome/free-solid-svg-icons'
import { isLogged } from 'constants.js'
import { NavLink } from 'react-router-dom'

const handleGetLink = (path, name) => {
  switch (name) {
    case 'Login':
      return (
        <NavLink to={ path } exact>
          <div className="user">
            <FontAwesomeIcon icon={ faUserAlt } />
          </div>
        </NavLink>
      )

    case 'Logout':
      return (
        <NavLink to={ path } exact>
          <div className="user">
            <FontAwesomeIcon icon={ faUserAltSlash } />
          </div>
        </NavLink>
      )
  
    default:
      return (
        <NavLink to={ path } exact>
          <span>{ name }</span>
        </NavLink>
      )
  }
}

const HeaderLink = ({ path, name, privat }) => {
  const navLink = handleGetLink(path, name)
  
  return (
    <>
      { privat
        ? isLogged && <li>{ navLink }</li>
        : <li>{ navLink }</li>
      }
    </>
  )
}

HeaderLink.propTypes = {
  path: PropTypes.string,
  name: PropTypes.string,
  privat: PropTypes.bool
}

HeaderLink.defaultProps = {
  path: '/',
  name: 'Home',
  privat: false
}

export default HeaderLink
