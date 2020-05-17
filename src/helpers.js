// API
const API_URL = 'https://reqres.in/'
const API_LOGIN = 'api/login'
const API_USERS = 'api/users'
const API_PAGE = '?per_page=9999'

const RANDOM_AVATAR_URL = 'https://api.adorable.io/avatars/128/'

// Nav
const NAV_ITEMS = {
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

// Auth
const auth = async data => {
  try {
    const response = await fetch(`${ API_URL }${ API_LOGIN }`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    const { token = null, error = null } = await response.json()

    if (token) setLoginLS(token, data.email)

    return { token, error }
  } catch {
    return { error: 'Error with fetching data from the API' }
  }
}

const setLoginLS = (token, user) => {
  localStorage.setItem('token', token)
  localStorage.setItem('user', user)
}

const setLogoutLS = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
}

const loadBody = (load = true) => {
  if (load) {
    setTimeout(() => {
      document.body.style.opacity = 1
    }, 1)
  } else {
    setTimeout(() => {
      document.body.style.opacity = 0
    }, 1)
  }
}

// Checks (works with ref)
const checkForEmptyInputs = inputs => {
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

// Split users for pagination
const splitUsers = (users, perPage) => {
  if (!users) return []

  const firstChunk = users.slice(0, perPage)

  if (!firstChunk.length) {
    return users
  }

  return [firstChunk].concat(splitUsers(users.slice(perPage, users.length), perPage))
}

export {
  API_URL,
  API_LOGIN,
  API_USERS,
  API_PAGE,
  NAV_ITEMS,
  RANDOM_AVATAR_URL,
  auth,
  setLoginLS,
  setLogoutLS,
  loadBody,
  splitUsers,
  checkForEmptyInputs
}