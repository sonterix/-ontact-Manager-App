import loginSlice from './slices/loginSlice'
import appSlice from './slices/appSlice'
import contactsSlice from './slices/contactsSlice'

const rootReducer = {
  login: loginSlice.reducer,
  app: appSlice.reducer,
  contacts: contactsSlice.reducer
}

export default rootReducer