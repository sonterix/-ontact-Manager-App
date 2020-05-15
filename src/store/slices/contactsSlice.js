import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  users: [],
  buttons: {
    deleteSelectedButton: false
  },
  activePage: 1,
  totalPages: 1
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    setUsers: (state, { payload: { users, total_pages } }) => {
      state.users= users
      state.totalPages = total_pages
    },
    switchPage: (state, { payload: { activePage } }) => {
      state.activePage = activePage
    },
    toggleFavorite: (state, { payload }) => {
      state.users = state.users.map(user => user.id === payload ? { ...user, favorite: !user.favorite } : user)
    },
    toggleCheck: (state, { payload }) => {
      state.users = state.users.map(user => user.id === payload ? { ...user, checked: !user.checked } : user)
      state.buttons.deleteSelectedButton = state.users.some(user => user.checked)
    },
    deleteUser: (state, { payload }) => {
      state.users = state.users.filter(user => user.id !== payload)
    },
    deleteSelected: state => {
      state.users = state.users.filter(user => user.checked === false)
    }
  }
})

export const {
  setUsers: setUsersAction,
  switchPage: switchPageActio,
  toggleFavorite: toggleFavoriteAction,
  toggleCheck: toggleCheckAction,
  deleteUser: deleteUserAction,
  deleteSelected: deleteSelectedAction
} = contactsSlice.actions

export default contactsSlice