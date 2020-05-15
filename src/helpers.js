// API
const API_URL = 'https://reqres.in/'
const API_LOGIN = 'api/login'

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

    if (token) {
      localStorage.setItem('token', token)
      localStorage.setItem('user', data.email)
    }

    return { token, error }
  } catch {
    return { error: 'Error with fetching data from the API' }
  }
}

// Nav
export const NAV_ITEMS = [
  { id: 1, path: '/', name: 'Home', privat: false },
  { id: 2, path: '/contacts', name: 'Contacts', privat: true },
  { id: 3, path: '/login', name: 'Login', privat: false },
]