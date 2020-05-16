import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { auth, checkForEmptyInputs } from 'helpers.js'
import { useHistory, Redirect } from 'react-router-dom'
import styles from './Login.module.scss'

const Login = ({ isLogged, loginUser, loadingOn, loadingOff, setAlert, unsetAlert }) => {
  const initialFormData = { email: '', password: '' }

  const [ formData, setFormData ] = useState(initialFormData)
  const { email, password } = formData

  const emailInput = useRef()
  const passwordInput = useRef()

  const { location, push } = useHistory()

  const handleInputData = ({ target: { name, value } }) => setFormData({ ...formData, [name]: value }) 

  const handleSubmitForm = async event => {
    event.preventDefault()
    // just base validation to not spend so much time
    const inputErrors = checkForEmptyInputs([ emailInput.current, passwordInput.current ])

    if (!inputErrors) {
      loadingOn()

      const { token, error } = await auth(formData)
      setFormData({ ...formData, ...initialFormData})
      
      if (error) {
        loadingOff()
        setAlert(error)

        setTimeout(() => {
          unsetAlert()
        }, 4000)
      } else if (token) {
        loginUser(email, token)
        loadingOff()

        const { from } = location.state || { from: { pathname: '/contacts/1' } }
        push(from)
      }
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
          <div className={ `wrapper ${ styles.LoginFormWrapper }` }>
            <h1 className={ styles.LoginFormTitle }>Login</h1>
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
                ref={ passwordInput }
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
  loginUser: PropTypes.func,
  loadingOn: PropTypes.func,
  loadingOff: PropTypes.func,
  setAlert: PropTypes.func,
  unsetAlert: PropTypes.func
}

Login.defaultProps = {
  isLogged: false,
  loginUser: () => {},
  loadingOn: () => {},
  loadingOff: () => {},
  setAlert: () => {},
  unsetAlert: () => {}
}

export default Login