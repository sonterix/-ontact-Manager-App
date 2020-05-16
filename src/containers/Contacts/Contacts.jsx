import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import User from 'containers/Contacts/User/UserContainer'
import styles from './Contacts.module.scss'
import Pagination from 'components/UI/Pagination/Pagination'
import ContactsActions from 'containers/Contacts/ContactsActions/ContactsActionsContainer'
import { useHistory } from 'react-router-dom'

const Contacts = ({
  computedMatch = {},
  getUsers,
  usersPerPage,
  sortByFavorite,
  sortByName,
  sortByChecked,
  clearSelected
}) => { 
  const { params: { pageId = 1 } } = computedMatch
  const { push } = useHistory()
  const users = usersPerPage[pageId - 1] || []

  useEffect(() => {
    if (!users.length) getUsers()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (!users.length && pageId !== 1) push(`/contacts/${ pageId - 1 }`)
  }, [pageId, push, users.length])

  return (
    <div className={ `wrapper-sm ${ styles.UsersWrapper }` }>
      <ul className={ styles.Users }>
        { users.length
          ? <>
              <li className={ styles.Placeholder }>
                <div className={ styles.FavoritePlaceholder }>
                  <button onClick={ () => sortByFavorite(pageId - 1) }>Fav</button>
                </div>
                <div className={ styles.NamePlaceholder }>
                  <button onClick={ () => sortByName(pageId - 1) }>Name</button>
                </div>
                <div className={ styles.SelectPlaceholder }>
                  <button onClick={ () => sortByChecked(pageId - 1) }>Select</button>
                </div>
                <div className={ styles.DetailsPlaceholder }>Details</div>
                <div className={ styles.DeletePlaceholder }>Delete</div>
              </li>

            { users.map(user => <User key={ user.id } user={ user } />) }
            </>
          : <li className={ styles.NotFound }>Users Not Found</li>
        }
      </ul>

      <ContactsActions />
      <Pagination totalPages={ usersPerPage.length } pageId={ +pageId } clearSelected={ clearSelected } />
    </div>
  )
}

Contacts.propTypes = {
  getUsers: PropTypes.func,
  usersPerPage: PropTypes.array,
  sortByFavorite: PropTypes.func,
  sortByName: PropTypes.func,
  sortByChecked: PropTypes.func,
  clearSelected: PropTypes.func
}

Contacts.defaultProps = {
  getUsers: () => {},
  usersPerPage: [],
  sortByFavorite: () => {},
  sortByName:  () => {},
  sortByChecked: () => {},
  clearSelected: () => {}
}

export default Contacts
