import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ContactsActions from './ContactsActions'
import { deleteSelectedAction, setPerPageAction, clearSelectedAction } from 'store/slices/contactsSlice'

const ContactsActionsContainer = props => {
  const { buttons: { deleteSelectedButton }, users, perPage } = useSelector(({ contacts }) => contacts)

  const dispatch = useDispatch()
  const deleteSelected = () => dispatch(deleteSelectedAction())
  const clearSelected = () => dispatch(clearSelectedAction())
  const setPerPage = perPage => dispatch(setPerPageAction(perPage))

  const updatedProps = {
    ...props,
    usersLength: users.length,
    perPage: +perPage,
    setPerPage,
    clearSelected,
    deleteSelected,
    deleteSelectedButton
  }

  return <ContactsActions { ...updatedProps } />
}

export default ContactsActionsContainer
