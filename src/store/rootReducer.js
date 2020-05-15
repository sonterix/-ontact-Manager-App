import loginSlice from './slices/loginSlice'
import appSlice from './slices/appSlice'

const rootReducer = {
  login: loginSlice.reducer,
  app: appSlice.reducer
}

export default rootReducer