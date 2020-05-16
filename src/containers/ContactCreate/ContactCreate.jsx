import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { checkForEmptyInputs } from 'helpers.js'
import styles from './ContactCreate.module.scss'

const ContactCreate = ({ putUser }) => {
  const initialState = {
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
    description: ''
  }
  const [ user, setUser ] = useState(initialState)
  const { first_name, last_name, email, description, avatar } = user

  const firstNameInput = useRef()
  const lastNameInput = useRef()
  const emailInput = useRef()
  const descriptionInput = useRef()

  const handleInputData = ({ target: { name, value } }) => setUser({ ...user, [name]: value }) 

  const handleSubmitForm = async event => {
    event.preventDefault()

    // just base validation to not spend so much time
    const inputErrors = checkForEmptyInputs([ 
      firstNameInput.current,
      lastNameInput.current,
      emailInput.current,
      descriptionInput.current
    ])

    if (!inputErrors) {
      putUser(user)
      setUser(initialState)
    }
  }

  return (
    <div className={ `wrapper ${ styles.CreateFormWrapper }` }>
      <h1 className={ styles.CreateFormTitle }>Create Contact</h1>
      <form className={ styles.CreateForm } onSubmit={ event => handleSubmitForm(event) }>
        <input type="text" name="first_name" placeholder="First Name" ref={ firstNameInput } value={ first_name } onChange={ event => handleInputData(event) } autoFocus={ true} />
        <input type="text" name="last_name" placeholder="Last Name" ref={ lastNameInput } value={ last_name } onChange={ event => handleInputData(event) } />
        <input type="email" name="email" placeholder="Email" ref={ emailInput } value={ email } onChange={ event => handleInputData(event) } />
        <textarea name="description" placeholder="Description" ref={ descriptionInput } rows={ 5 } value={ description } onChange={ event => handleInputData(event) } />
        <input type="file" name="avatar" value={ avatar } accept="image/*" onChange={ event => handleInputData(event) } />
        <div className={ styles.CreateFormAction }>
          <button type="submit" className={ styles.Submit }>Create</button>
          <button type="button" className={ styles.Cancel }>Cancel</button>
        </div>
      </form>
    </div>
  )
}

ContactCreate.propTypes = {
  putUser: PropTypes.func
}

ContactCreate.defaultProps = {
  putUser: () => {}
}

export default ContactCreate
