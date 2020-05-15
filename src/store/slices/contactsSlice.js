import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  users: [],
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
      state.users = state.users.map(user => {
        if (user.id === payload) {
          user.favorite = !user.favorite
        }
        return user
      })
    }
  }
})

export const {
  setUsers: setUsersAction,
  switchPage: switchPageActio,
  toggleFavorite: toggleFavoriteAction
} = contactsSlice.actions

export default contactsSlice