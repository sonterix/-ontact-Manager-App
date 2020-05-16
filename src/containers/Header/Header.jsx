import React from 'react'
import PropTypes from 'prop-types'
import { NAV_ITEMS } from 'helpers.js'
import Logo from 'components/UI/Logo/Logo'
import HeaderLink from 'components/HeaderLink/HeaderLink'
import styles from './Header.module.scss'

const Header = ({ isLogged }) => {
  const { userLogin, userLogout } = NAV_ITEMS

  return (
    <header className={ styles.HeaderWrapper }>
      <div className="wrapper">
        <div className={ styles.Header }>
          <Logo />
          <ul className={ styles.HeaderNav }>
            { isLogged 
              ? userLogin.map(({ id, ...props }) => <HeaderLink key={ id } { ...props } />)
              : userLogout.map(({ id, ...props }) => <HeaderLink key={ id } { ...props } />)
            }
          </ul>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  isLogged: PropTypes.bool
}

Header.defaultProps = {
  isLogged: false
}

export default Header
