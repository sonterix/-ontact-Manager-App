import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { getUsers } from 'helpers.js'
import User from 'containers/User/UserContainer'
import styles from './Contacts.module.scss'
import Pagination from 'components/Pagination/Pagination'

const Contacts = ({
  computedMatch = {},
  setUsers,
  users,
  totalPages,
  sortByFavorite,
  sortByName,
  sortByChecked,
  deleteSelected,
  deleteSelectedButton
}) => { 
  const { params: { pageId = 1 } = {} } = computedMatch

  useEffect(() => {
    (async () => {
      const { data, total_pages } = await getUsers(pageId)
      const users = data.map(user => ({ ...user, favorite: false, checked: false }))
      setUsers({ users, total_pages })
    })()
  }, [pageId])

  return (
    <div className={ `wrapper-sm ${ styles.UsersWrapper }` }>
      <ul className={ styles.Users }>
        { users.length
          ? <>
              <li className={ styles.Placeholder }>
                <div className={ styles.FavoritePlaceholder }>
                  <button onClick={ () => sortByFavorite() }>Fav</button>
                </div>
                <div className={ styles.NamePlaceholder }>
                  <button onClick={ () => sortByName() }>Name</button>
                </div>
                <div className={ styles.SelectPlaceholder }>
                  <button onClick={ () => sortByChecked() }>Select</button>
                </div>
                <div className={ styles.DetailsPlaceholder }>Details</div>
                <div className={ styles.DeletePlaceholder }>Delete</div>
              </li>

            { users.map(user => <User key={ user.id } user={ user } />) }
            </>
          : <li className={ styles.NotFound }>Users Not Found</li>
        }
      </ul>

      { users.length
      && <>
          <div className={ styles.Actions }>
            <button className={ styles.DeleteSelected } onClick={ () => deleteSelected() } disabled={ !deleteSelectedButton }>
              Delete Selected
            </button>
          </div>

          <Pagination totalPages={ totalPages } pageId={ +pageId } />
        </>
      }
    </div>
  )
}

Contacts.propTypes = {
  setUsers: PropTypes.func,
  users: PropTypes.array,
  totalPages: PropTypes.number,
  sortByFavorite: PropTypes.func,
  sortByName: PropTypes.func,
  sortByChecked: PropTypes.func,
  deleteSelected: PropTypes.func,
  deleteSelectedButton: PropTypes.bool
}

Contacts.defaultProps = {
  setUsers: () => {},
  users: [],
  totalPages: 1,
  sortByFavorite: () => {},
  sortByName:  () => {},
  sortByChecked: () => {},
  deleteSelected: () => {},
  deleteSelectedButton: false
}

export default Contacts
