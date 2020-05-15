import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  alert: {
    status: false,
    message: ''
  }
}

const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: { 
    loadingOn: state => {
      state.loading = true
    },
    loadingOff: state => {
      state.loading = false
    },
    setAlert: (state, payload) => {
      state.alert = { status: true, message: payload.payload } 
    },
    unsetAlert: state => {
      state.alert = { status: false, message: '' }
    }
  }
})

export const {
  loadingOn: loadingOnAction,
  loadingOff: loadingOffAction,
  setAlert: setAlertAction,
  unsetAlert: unsetAlertAction
} = appSlice.actions

export default appSlice