import React from 'react'
import { useDispatch } from 'react-redux'
import { logoutUserAction } from 'store/slices/loginSlice'
import Logout from './Logout'

const LogoutContainer = props => {
  const dispatch = useDispatch()
  const logoutUser = () => dispatch(logoutUserAction())
  const updatedProps = { logoutUser, ...props }
  return <Logout { ...updatedProps } />
}

export default LogoutContainer
