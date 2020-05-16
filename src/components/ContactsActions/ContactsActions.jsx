import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import styles from './ContactsActions.module.scss'

const ContactsActions = ({ deleteSelected, deleteSelectedButton }) => (
  <div className={ styles.Actions }>
    <Link to="/contact-create" className={ styles.AddContact }>
      <FontAwesomeIcon icon={ faUserPlus } /> Add New
    </Link>
    <button className={ styles.DeleteSelected } onClick={ () => deleteSelected() } disabled={ !deleteSelectedButton }>
      <FontAwesomeIcon icon={ faTrash } /> Delete Selected
    </button>
  </div>
)

ContactsActions.propTypes = {
  deleteSelected: PropTypes.func,
  deleteSelectedButton: PropTypes.bool
}

ContactsActions.defaultProps = {
  deleteSelected: () => {},
  deleteSelectedButton: false
}

export default ContactsActions
