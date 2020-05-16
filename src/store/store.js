import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import alertsMiddleware from './middleware/alertsMiddleware'
import postUpdatesMiddleware from './middleware/postUpdatesMiddleware'

const store = configureStore({
  reducer: rootReducer,
  middleware: [
    ...getDefaultMiddleware(),
    alertsMiddleware,
    postUpdatesMiddleware
  ]
})

export default store