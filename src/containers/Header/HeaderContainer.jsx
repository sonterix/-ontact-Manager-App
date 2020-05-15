import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'

const HeaderContainer = props => {
  const isLogged = useSelector(({ login: { isLogged } }) => isLogged)
  const updatedProps = { ...props, isLogged }
  return <Header { ...updatedProps } />
}

export default HeaderContainer
