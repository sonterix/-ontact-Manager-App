import React from 'react'
import Contacts from './Contacts'
import { useDispatch, useSelector } from 'react-redux'
import { setUsersAction } from 'store/slices/contactsSlice'

const ContactsContainer = props => {
  const { users, activePage, totalPages } = useSelector(({ contacts }) => contacts)
  const dispatch = useDispatch()
  const setUsers = users => dispatch(setUsersAction(users))
  const updatedProps = {
    ...props,
    setUsers,
    users,
    activePage,
    totalPages
  }

  return <Contacts { ...updatedProps } />
}

export default ContactsContainer
