import contactsSlice, { postUpdatedUserAction } from "store/slices/contactsSlice"

const postUpdatesMiddleware = ({ dispatch }) => next => action => {
  const { type } = action
  const { toggleFavorite, updateUser, putUser, deleteUser, deleteSelected } = contactsSlice.actions

  switch (type) {
    case `${ toggleFavorite }`:
    case `${ updateUser }`:
    case `${ deleteUser }`:
    case `${ deleteSelected }`:
    case `${ putUser }`:
      dispatch(postUpdatedUserAction())
      break

    default:
      break
  }
  
  next(action)
}

export default postUpdatesMiddleware