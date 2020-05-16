import contactsSlice, { postUpdatedUserAction } from "store/slices/contactsSlice"

const postUpdatesMiddleware = ({ dispatch }) => next => action => {
  const { type } = action
  const { toggleFavorite, deleteUser, deleteSelected } = contactsSlice.actions

  switch (type) {
    case `${ toggleFavorite }`:
    case `${ deleteUser }`:
    case `${ deleteSelected }`:
      dispatch(postUpdatedUserAction())
      break

    default:
      break
  }
  
  next(action)
}

export default postUpdatesMiddleware