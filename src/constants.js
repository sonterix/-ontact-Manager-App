export const isLogged = true

export const NAV_ITEMS = [
  { id: 1, path: '/', name: 'Home', privat: false },
  { id: 2, path: '/contacts', name: 'Contacts', privat: true },
  { id: 3, path: `${ isLogged ? '/logout' : '/login' }`, name: `${ isLogged ? 'Logout' : 'Login' }`, privat: false },
]
