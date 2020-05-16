import React from 'react'
import ContactDetails from './ContactDetails'
import { useSelector, useDispatch } from 'react-redux'
import { toggleFavoriteAction, deleteUserAction, updateUserAction } from 'store/slices/contactsSlice'

const ContactDetailsContainer = props => {
  const users = useSelector(({ contacts: { users } }) => users)
  const dispatch = useDispatch()
  const toggleFavorite = id => dispatch(toggleFavoriteAction(id))
  const updateUser = user => dispatch(updateUserAction(user))
  const deleteUser = id => dispatch(deleteUserAction(id))

  const updatedProps = {
    ...props,
    users,
    updateUser,
    toggleFavorite,
    deleteUser
  }

  return <ContactDetails { ...updatedProps } />
}

export default ContactDetailsContainer
