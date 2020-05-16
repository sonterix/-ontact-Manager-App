import React from 'react'
import Contacts from './Contacts'
import { useDispatch, useSelector } from 'react-redux'
import { setUsersAction, deleteSelectedAction, sortByFavoriteAction, sortByNameAction, sortByCheckedAction } from 'store/slices/contactsSlice'

const ContactsContainer = props => {
  const { users, totalPages } = useSelector(({ contacts }) => contacts)
  const { deleteSelectedButton } = useSelector(({ contacts: { buttons } }) => buttons)

  const dispatch = useDispatch()
  const setUsers = users => dispatch(setUsersAction(users))
  const sortByFavorite = () => dispatch(sortByFavoriteAction())
  const sortByName = () => dispatch(sortByNameAction())
  const sortByChecked = () => dispatch(sortByCheckedAction())
  const deleteSelected = () => dispatch(deleteSelectedAction())
  
  const updatedProps = {
    ...props,
    setUsers,
    users,
    totalPages,
    sortByFavorite,
    sortByName,
    sortByChecked,
    deleteSelected,
    deleteSelectedButton
  }

  return <Contacts { ...updatedProps } />
}

export default ContactsContainer
