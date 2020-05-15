import React from 'react'
import { NAV_ITEMS } from 'helpers.js'
import HeaderLink from '../../containers/HeaderLink/HeaderLinkContainer'
import Logo from 'components/Logo/Logo'
import styles from './Header.module.scss'

const Header = () => (
  <header className={ styles.HeaderWrapper }>
    <div className="wrapper">
      <div className={ styles.Header }>
        <Logo />
        <ul className={ styles.HeaderNav }>
          { NAV_ITEMS.map(({ id, ...props }) => <HeaderLink key={ id } { ...props } />) }
        </ul>
      </div>
    </div>
  </header>
)

export default Header
