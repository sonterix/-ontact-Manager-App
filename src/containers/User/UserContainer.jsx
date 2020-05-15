import React from 'react'
import User from './User'
import { useDispatch } from 'react-redux'
import { toggleFavoriteAction, deleteUserAction } from 'store/slices/contactsSlice'

const UserContainer = props => {
  const dispatch = useDispatch()
  const toggleFavorite = id => dispatch(toggleFavoriteAction(id))
  const deleteUser = id => dispatch(deleteUserAction(id))
  const updatedProps = {
    ...props,
    toggleFavorite,
    deleteUser
  }

  return <User { ...updatedProps } />
}

export default UserContainer
