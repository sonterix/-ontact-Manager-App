import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar, faInfoCircle, faTrash } from '@fortawesome/free-solid-svg-icons'
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons'
import styles from './User.module.scss'

const User = ({ user: { id, first_name, last_name, favorite }, toggleFavorite, deleteUser }) => {
  return (
    <li className={ styles.User }>
      <div className={ styles.Favorite }>
        <button>
          <FontAwesomeIcon onClick={ () => toggleFavorite(id) } icon={ favorite ? solidStar : regularStar } />
        </button>
      </div>
      <div className={ styles.Name }>
        { first_name } { last_name }
      </div>
      <div className={ styles.Select }>
        <input type="checkbox" />
      </div>
      <div className={ styles.Details }>
        <button>
          <FontAwesomeIcon icon={ faInfoCircle } />
        </button>
      </div>
      <div className={ styles.Delete }>
        <button onClick={ () => deleteUser(id) }>
          <FontAwesomeIcon icon={ faTrash } />
        </button>
      </div>
    </li>
  )
}

User.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    favorite: PropTypes.bool
  }),
  toggleFavorite: PropTypes.func,
  deleteUser: PropTypes.func
}

User.defaultProps = {
  user: {
    id: 1,
    first_name: '',
    last_name: '',
    favorite: false
  },
  toggleFavorite: () => {},
  deleteUser: () => {}
}

export default User
