import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkUserAction } from 'store/slices/loginSlice'
import App from './App'

const AppContainer = props => {
  const loading = useSelector(({ app: { loading } }) => loading)
  const alertMessage = useSelector(({ app: { alert } }) => alert)
  const dispatch = useDispatch()
  const checkUser = (user, token) =>  dispatch(checkUserAction({ user, token }))

  const updatedProps = {
    ...props,
    checkUser,
    loading,
    alertMessage
  }

  return <App { ...updatedProps } />
}

export default AppContainer
