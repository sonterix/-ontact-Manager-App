import React from 'react'
import { useDispatch } from 'react-redux'
import { checkUser as checkUserAction } from 'store/slices/loginSlice'
import App from './App'

const AppContainer = props => {
  const dispatch = useDispatch()
  const checkUser = (user, token) =>  dispatch(checkUserAction(user, token))
  const updatedProps = { ...props, checkUser }

  return <App { ...updatedProps } />
}

export default AppContainer
