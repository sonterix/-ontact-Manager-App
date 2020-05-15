import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { getUsers } from 'helpers.js'
import User from 'containers/User/UserContainer'
import styles from './Contacts.module.scss'

const Contacts = ({ setUsers, users, activePage, totalPages }) => {
  useEffect(() => {
    if (!users.length) {
      (async () => {
        const { data, total_pages } = await getUsers()
        const users = data.map(user => ({ ...user, favorite: false }))
        setUsers({ users, total_pages })
      })()
    }
  }, [])

  return (
    <div className={ `wrapper-sm ${ styles.UsersWrapper }` }>
      <ul className={ styles.Users }>
        { users.length
          ? <>
              <li className={ styles.Placeholder }>
                <div className={ styles.FavoritePlaceholder }>Fav</div>
                <div className={ styles.NamePlaceholder }>Name</div>
                <div className={ styles.SelectPlaceholder }>Select</div>
                <div className={ styles.DetailsPlaceholder }>Details</div>
                <div className={ styles.DeletePlaceholder }>Delete</div>
              </li>

            { users.map(user => <User key={ user.id } user={ user } />) }
            </>
          : <li className={ styles.NotFound }>Users Not Found</li>
        }
      </ul>
    </div>
  )
}

Contacts.propTypes = {
  updatedProps: PropTypes.func
}

Contacts.defaultProps = {
  updatedProps: () => {}
}

export default Contacts
