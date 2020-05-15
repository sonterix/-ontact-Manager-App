import React from 'react'
import HeaderLink from './HeaderLink'
import { useSelector } from 'react-redux'

const HeaderLinkContainer = props => {
  const isLogged = useSelector(({ login: { isLogged } }) => isLogged)
  const updatedProps = { ...props, isLogged }
  return <HeaderLink { ...updatedProps } />
}

export default HeaderLinkContainer
