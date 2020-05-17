import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import styles from './ThemeSwitcher.module.scss'

const ThemeSwitcher = () => {
  useEffect(() => {
    const currentTheme = localStorage.getItem('theme')

    if (currentTheme) {
      document.body.classList.remove('sun')
      document.body.classList.add(currentTheme)
    } else {
      localStorage.setItem('theme', 'sun')
    }
  }, [])

  const handleSetTheme = theme => {
    switch (theme) {
      case 'sun':
        document.body.classList.remove('moon')
        document.body.classList.add('sun')
        localStorage.setItem('theme', 'sun')
        break;
      
      case 'moon':
        document.body.classList.remove('sun')
        document.body.classList.add('moon')
        localStorage.setItem('theme', 'moon')
        break;

      default:
        break;
    }
  }

  return createPortal(
    <div className={ styles.Switcher }>
      <FontAwesomeIcon className={ styles.Sun } icon={ faSun } onClick={ () => handleSetTheme('sun') } />
      <FontAwesomeIcon className={ styles.Moon } icon={ faMoon } onClick={ () => handleSetTheme('moon') } />
    </div>,
    document.body
  )
}

export default ThemeSwitcher
