import React from 'react'
import Contacts from './Contacts'
import { useDispatch, useSelector } from 'react-redux'
import {
  getUsersAction,
  setUsersAction,
  sortByFavoriteAction,
  sortByNameAction,
  sortByCheckedAction,
  clearSelectedAction,
} from 'store/slices/contactsSlice'

const ContactsContainer = props => {
  const { usersPerPage } = useSelector(({ contacts }) => contacts)

  const dispatch = useDispatch()
  const getUsers = page => dispatch(getUsersAction(page))
  const setUsers = users => dispatch(setUsersAction(users))
  const sortByFavorite = () => dispatch(sortByFavoriteAction())
  const sortByName = () => dispatch(sortByNameAction())
  const sortByChecked = pageId => dispatch(sortByCheckedAction(pageId))
  const clearSelected = () => dispatch(clearSelectedAction())
  
  const updatedProps = {
    ...props,
    getUsers,
    setUsers,
    usersPerPage,
    sortByFavorite,
    sortByName,
    sortByChecked,
    clearSelected
  }

  return <Contacts { ...updatedProps } />
}

export default ContactsContainer
