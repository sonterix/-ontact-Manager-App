import { createSlice } from "@reduxjs/toolkit";
import { loadingOnAction, loadingOffAction } from "./appSlice";

const initialState = {
  user: '',
  token: '',
  isLogged: false
}

const loginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    loginUser: (state, { payload: { user, token } }) => {
      state.user = user
      state.token = token
      state.isLogged = true
    },
    logoutUser: () => initialState
  }
})

loginSlice.actions.checkUser = ({ user, token }) => async dispatch => {
  // fake check token on backend
  dispatch(loadingOnAction())

  const response = await new Promise((resolve) => {
    setTimeout(() => {
      if (token) {
        resolve({ logged: true })
      } else {
        resolve({ logged: false })
      }
    }, 100)
  })

  const { logged } = await response

  if (logged) {
    dispatch(loginUserAction(user, token))
  } else {
    dispatch(logoutUserAction())
  }

  dispatch(loadingOffAction())
}

export const {
  loginUser: loginUserAction,
  logoutUser: logoutUserAction,
  checkUser: checkUserAction
} = loginSlice.actions

export default loginSlice