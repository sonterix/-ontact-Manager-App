import contactsSlice from "store/slices/contactsSlice"
import { setAlertAction, unsetAlertAction } from "store/slices/appSlice"

const alertsMiddleware = ({ dispatch }) => next => action => {
  const { type } = action
  const { deleteUser, deleteSelected } = contactsSlice.actions

  switch (type) {
    case `${ deleteUser }`:
    case `${ deleteSelected }`:
      dispatch(setAlertAction('Deleted'))
      setTimeout(() => dispatch(unsetAlertAction()), 2000)
      break

    default:
      break
  }
  
  next(action)
}

export default alertsMiddleware