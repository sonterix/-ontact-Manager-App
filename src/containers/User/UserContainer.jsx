import React from 'react'
import User from './User'
import { useDispatch } from 'react-redux'
import { toggleFavoriteAction } from 'store/slices/contactsSlice'

const UserContainer = props => {
  const dispatch = useDispatch()
  const toggleFavorite = id => dispatch(toggleFavoriteAction(id))
  const updatedProps = {
    ...props,
    toggleFavorite
  }

  return <User { ...updatedProps } />
}

export default UserContainer
