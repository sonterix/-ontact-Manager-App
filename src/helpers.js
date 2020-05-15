// API
const API_URL = 'https://reqres.in/'
const API_LOGIN = 'api/login'
const API_USERS = 'api/users?page='

// Auth
export const auth = async data => {
  try {
    const response = await fetch(`${ API_URL }${ API_LOGIN }`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    const { token = null, error = null } = await response.json()

    if (token) setLoginLS(token, data.email)

    return { token, error }
  } catch {
    return { error: 'Error with fetching data from the API' }
  }
}

export const setLoginLS = (token, user) => {
  localStorage.setItem('token', token)
  localStorage.setItem('user', user)
}

export const setLogoutLS = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
}

// Users
export const getUsers = async (page = 1) => {
  try {
    const response = await fetch(`${ API_URL }${ API_USERS }${ page }`)
    const { data, total_pages } = await response.json()
    return { data, total_pages }
  } catch {
    return { error: 'Error with fetching data from the API' }
  }
}

// Nav
export const NAV_ITEMS = {
  userLogin: [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/contacts', name: 'Contacts' },
    { id: 3, path: '/logout', name: 'Logout' }
  ],
  userLogout: [
    { id: 1, path: '/', name: 'Home' },
    { id: 2, path: '/login', name: 'Login' }
  ]
}

// Checks (works with ref)
export const checkForEmptyInputs = inputs => {
  let error = false

  inputs.forEach(element => {
    if (element.value.length < 3) {
      error = true
      element.classList.add('error')
    } else {
      element.classList.remove('error')
    }
  })

  return error
}