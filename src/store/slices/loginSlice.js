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

export const {
  loginUser: loginUserAction,
  logoutUser: logoutUserAction
} = loginSlice.actions

export const checkUser = (user, token) => async dispatch => {
  dispatch(loadingOnAction())
  const response = await new Promise((resolve) => {
    setTimeout(() => {
      if (token) {
        resolve({ logged: true })
      } else {
        resolve({ logged: false })
      }
    }, 250)
  })

  const { logged } = await response

  if (logged) {
    dispatch(loginUserAction(user, token))
  } else {
    dispatch(logoutUserAction())
  }

  dispatch(loadingOffAction())
}

export default loginSlice