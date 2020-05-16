import contactsSlice, { postUpdatedUserAction } from "store/slices/contactsSlice"

const postUpdatesMiddleware = ({ dispatch }) => next => action => {
  const { type } = action
  const { toggleFavorite, updateUser, deleteUser, deleteSelected } = contactsSlice.actions

  switch (type) {
    case `${ toggleFavorite }`:
    case `${ updateUser }`:
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