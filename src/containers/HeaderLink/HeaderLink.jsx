import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faUserAltSlash } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const handleGetLink = (path, name, isLogged) => {
  switch (typeof name) {
    case 'object':
      if (isLogged) {
        return (
          <NavLink to={ path[1] } exact>
            <div className="user">
              <FontAwesomeIcon icon={ faUserAltSlash } />
            </div>
          </NavLink>
        )
      } else {
        return (
          <NavLink to={ path[0] } exact>
            <div className="user">
              <FontAwesomeIcon icon={ faUserAlt } />
            </div>
          </NavLink>
        )
      }
  
    default:
      return (
        <NavLink to={ path } exact>
          <span>{ name }</span>
        </NavLink>
      )
  }
}

const HeaderLink = ({ path, name, privat, isLogged }) => {
  const navLink = handleGetLink(path, name, isLogged)
  
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
  path:PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  privat: PropTypes.bool,
  isLogged: PropTypes.bool
}

HeaderLink.defaultProps = {
  path: '/',
  name: 'Home',
  privat: false,
  isLogged: false
}

export default HeaderLink
