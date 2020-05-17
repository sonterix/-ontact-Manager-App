import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ContactCreate from './ContactCreate'
import { putUserAction } from 'store/slices/contactsSlice'
import { unsetAlertAction, setAlertAction } from 'store/slices/appSlice'

const ContactCreateContainer = props => {
  const { users } = useSelector(({ contacts }) => contacts)

  const dispatch = useDispatch()
  const putUser = user => dispatch(putUserAction(user))
  const setAlert = message => dispatch(setAlertAction(message))
  const unsetAlert = () => dispatch(unsetAlertAction())
  
  const updatedProps = {
    ...props,
    users,
    setAlert,
    unsetAlert,
    putUser
  }

  return <ContactCreate { ...updatedProps } />
}

export default ContactCreateContainer
