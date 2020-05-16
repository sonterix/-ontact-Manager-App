import contactsSlice from "store/slices/contactsSlice"
import { setAlertAction, unsetAlertAction } from "store/slices/appSlice"

const alertsMiddleware = ({ dispatch }) => next => action => {
  const { type } = action
  const { updateUser, putUser, deleteUser, deleteSelected } = contactsSlice.actions

  switch (type) {
    case `${ updateUser }`:
      dispatch(setAlertAction('Updated'))
      setTimeout(() => dispatch(unsetAlertAction()), 2000)
      break

    case `${ putUser }`:
      dispatch(setAlertAction('Created'))
      setTimeout(() => dispatch(unsetAlertAction()), 2000)
      break

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