import React from 'react'
import PropTypes from 'prop-types'
import styles from './ContactsActions.module.scss'

const ContactsActions = ({ deleteSelected, deleteSelectedButton }) => (
  <div className={ styles.Actions }>
    <button className={ styles.DeleteSelected } onClick={ () => deleteSelected() } disabled={ !deleteSelectedButton }>
      Delete Selected
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
