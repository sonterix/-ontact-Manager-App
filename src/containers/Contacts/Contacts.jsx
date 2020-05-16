import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import User from 'containers/User/UserContainer'
import styles from './Contacts.module.scss'
import Pagination from 'components/Pagination/Pagination'
import ContactsActions from 'components/ContactsActions/ContactsActions'
import ConfirmAlert from 'components/ConfirmAlert/ConfirmAlert'

const Contacts = ({
  computedMatch = {},
  getUsers,
  users,
  totalPages,
  sortByFavorite,
  sortByName,
  sortByChecked,
  deleteSelected,
  deleteSelectedButton
}) => { 
  const { params: { pageId = 1 } = {} } = computedMatch
  const [ confirmPopup, setConfirmPopup ] = useState(false)

  useEffect(() => {
    getUsers(pageId)
    // eslint-disable-next-line
  }, [pageId])

  return (
    <>
      { confirmPopup 
        && <ConfirmAlert
            submitBtn="Delete Selected"
            submitFunc={ () => deleteSelected() }
            cancelFunc={ () => setConfirmPopup(false) }
          />
      }
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
          ? <ContactsActions deleteSelected={ () => setConfirmPopup(true) }  deleteSelectedButton={ deleteSelectedButton } />
          : null
        }

        <Pagination totalPages={ totalPages } pageId={ +pageId } />
      </div>
    </>
  )
}

Contacts.propTypes = {
  getUsers: PropTypes.func,
  users: PropTypes.array,
  totalPages: PropTypes.number,
  sortByFavorite: PropTypes.func,
  sortByName: PropTypes.func,
  sortByChecked: PropTypes.func,
  deleteSelected: PropTypes.func,
  deleteSelectedButton: PropTypes.bool
}

Contacts.defaultProps = {
  getUsers: () => {},
  users: [],
  totalPages: 1,
  sortByFavorite: () => {},
  sortByName:  () => {},
  sortByChecked: () => {},
  deleteSelected: () => {},
  deleteSelectedButton: false
}

export default Contacts
