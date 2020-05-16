import React from 'react'
import ContactDetails from './ContactDetails'
import { useSelector } from 'react-redux'

const ContactDetailsContainer = props => {
  const users = useSelector(({ contacts: { users } }) => users)

  const updatedProps = {
    ...props,
    users
  }

  return <ContactDetails { ...updatedProps } />
}

export default ContactDetailsContainer
