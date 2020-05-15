import React from 'react'
import Login from './Login'
import { useDispatch, useSelector } from 'react-redux'
import { loginUserAction } from 'store/slices/loginSlice'
import { loadingOnAction, loadingOffAction, setAlertAction, unsetAlertAction } from 'store/slices/appSlice'

const LoginContainer = props => {
  const dispatch = useDispatch()
  const isLogged = useSelector(({ login: { isLogged } }) => isLogged)
  const loginUser = (user, token) =>  dispatch(loginUserAction({ user, token }))
  const loadingOn = () => dispatch(loadingOnAction())
  const loadingOff = () => dispatch(loadingOffAction())
  const setAlert = message => dispatch(setAlertAction(message))
  const unsetAlert = () => dispatch(unsetAlertAction())

  const updatedProps = {
    ...props,
    isLogged,
    loginUser,
    loadingOn,
    loadingOff,
    setAlert,
    unsetAlert
  }

  return <Login { ...updatedProps }  />
}

export default LoginContainer
