import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar, faInfoCircle, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faStar as regularStar, faCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import ConfirmAlert from 'components/ConfirmAlert/ConfirmAlert'
import styles from './User.module.scss'

const User = ({ user: { id, first_name, last_name, favorite, checked }, toggleFavorite, toggleCheck, deleteUser }) => {
  const [ confirmPopup, setConfirmPopup ] = useState(false)

  return (
    <>
      { confirmPopup 
        && <ConfirmAlert
            submitBtn="Delete"
            submitFunc={ () => deleteUser(id) }
            cancelFunc={ () => setConfirmPopup(false) }
          />
      }

      <li className={ styles.User }>
        <div className={ styles.Favorite }>
          <button onClick={ () => toggleFavorite(id) }>
            <FontAwesomeIcon icon={ favorite ? solidStar : regularStar } />
          </button>
        </div>
        <div className={ styles.Name }>
          { first_name } { last_name }
        </div>
        <div className={ styles.Select }>
          <button onClick={ () => toggleCheck(id) }>
            <FontAwesomeIcon icon={ checked ? faCheckCircle : faCircle } />
          </button>
        </div>
        <div className={ styles.Details }>
          <Link to={ `/contact-details/${ id }` }>
            <FontAwesomeIcon icon={ faInfoCircle } />
          </Link>
        </div>
        <div className={ styles.Delete }>
          <button onClick={ () => setConfirmPopup(true) }>
            <FontAwesomeIcon icon={ faTrash } />
          </button>
        </div>
      </li>
    </>
  )
}

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    favorite: PropTypes.bool,
    checked: PropTypes.bool
  }),
  toggleFavorite: PropTypes.func,
  toggleCheck: PropTypes.func,
  deleteUser: PropTypes.func
}

User.defaultProps = {
  user: {
    id: 1,
    first_name: '',
    last_name: '',
    favorite: false,
    checked: false
  },
  toggleFavorite: () => {},
  toggleCheck: () => {},
  deleteUser: () => {}
}

export default User
