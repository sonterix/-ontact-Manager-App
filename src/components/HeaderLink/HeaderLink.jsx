import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faUserAltSlash } from '@fortawesome/free-solid-svg-icons'
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

    case 'Contacts':
      return (
        <NavLink to={ path }>
          <span>{ name }</span>
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

const HeaderLink = ({ path, name }) => <li>{ handleGetLink(path, name) }</li>

HeaderLink.propTypes = {
  path: PropTypes.string,
  name: PropTypes.string
}

HeaderLink.defaultProps = {
  path: '/',
  name: 'Home'
}

export default HeaderLink
