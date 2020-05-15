import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { auth } from 'helpers.js'
import { useHistory, Redirect } from 'react-router-dom'
import styles from './Login.module.scss'

const Login = ({ isLogged, loginUser }) => {
  const initialFormData = { email: '', password: '' }

  const [ formData, setFormData ] = useState(initialFormData)
  const { email, password } = formData

  const { location, push } = useHistory()

  const emailInput = useRef();

  const handleInputData = ({ target: { name, value } }) => setFormData({
    ...formData,
    [name]: value
  }) 

  const handleSubmitForm = async event => {
    event.preventDefault()
    setFormData({ ...formData, ...initialFormData})

    const { token, error } = await auth(formData)
    
    if (token) {
      const { from } = location.state || { from: { pathname: '/' } }
      loginUser(email, token)
      push(from)
    }
  }

  useEffect(() => {
    !isLogged && emailInput.current.focus()
  }, [isLogged])

  return (
    <>
      { isLogged 
      ? <Redirect to="/contacts" />
      : (
          <div className="wrapper">
            <form className={ styles.LoginForm } onSubmit={ event => handleSubmitForm(event) }>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                ref={ emailInput }
                value={ email }
                onChange={ event => handleInputData(event) }
              />

              <input
                type="password"
                name="password"
                placeholder="Your Password"
                value={ password }
                onChange={ event => handleInputData(event) }
              />

              <button type="submit">Login</button>
            </form>
          </div>
        )
      }
    </>
  )
}

Login.propTypes = {
  isLogged: PropTypes.bool,
  loginUser: PropTypes.func
}

Login.defaultProps = {
  isLogged: false,
  loginUser: () => {}
}

export default Login