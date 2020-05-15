import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  aletr: {
    status: false,
    message: ''
  }
}

const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: { 
    loadingOn: state => state.loading = true,
    loadingOff: state => state.loading = false,
    setAletr: (state, payload) => state.aletr = { status: true, message: payload },
    unsetAletr: state => state.aletr = { status: false, message: '' }
  }
})

export const {
  loadingOn: loadingOnAction,
  loadingOff: loadingOffAction,
  setAletr: setAletrAction,
  unsetAletr: unsetAletrAction
} = appSlice.actions