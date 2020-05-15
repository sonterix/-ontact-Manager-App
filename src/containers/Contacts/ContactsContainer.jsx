import React from 'react'
import Contacts from './Contacts'
import { useDispatch, useSelector } from 'react-redux'
import { setUsersAction, deleteSelectedAction } from 'store/slices/contactsSlice'

const ContactsContainer = props => {
  const { users, activePage, totalPages } = useSelector(({ contacts }) => contacts)
  const { deleteSelectedButton } = useSelector(({ contacts: { buttons } }) => buttons)
  const dispatch = useDispatch()
  const setUsers = users => dispatch(setUsersAction(users))
  const deleteSelected = () => dispatch(deleteSelectedAction())
  const updatedProps = {
    ...props,
    setUsers,
    users,
    activePage,
    totalPages,
    deleteSelected,
    deleteSelectedButton
  }

  return <Contacts { ...updatedProps } />
}

export default ContactsContainer
