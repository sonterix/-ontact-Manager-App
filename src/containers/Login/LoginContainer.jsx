import React from 'react'
import Login from './Login'
import { useDispatch, useSelector } from 'react-redux'
import { loginUserAction } from 'store/slices/loginSlice'

const LoginContainer = props => {
  const dispatch = useDispatch()
  const isLogged = useSelector(({ login: { isLogged } }) => isLogged)
  const loginUser = (user, token) =>  dispatch(loginUserAction({ user, token }))

  const updatedProps = { ...props, isLogged, loginUser }

  return <Login { ...updatedProps }  />
}

export default LoginContainer
