import React from 'react'
import { useDispatch } from 'react-redux'
import ContactCreate from './ContactCreate'
import { putUserAction } from 'store/slices/contactsSlice'

const ContactCreateContainer = props => {
  const dispatch = useDispatch()
  const putUser = user => dispatch(putUserAction(user))
  
  const updatedProps = {
    ...props,
    putUser
  }

  return <ContactCreate { ...updatedProps } />
}

export default ContactCreateContainer
