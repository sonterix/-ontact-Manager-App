import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link, useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import styles from './ContactsActions.module.scss'
import ConfirmAlert from 'components/UI/ConfirmAlert/ConfirmAlert'

const ContactsActions = ({ usersLength, perPage, clearSelected, setPerPage, deleteSelected, deleteSelectedButton }) => {
  const [ confirmPopup, setConfirmPopup ] = useState(false)
  const { push } = useHistory()
  const perPageVariants = []

  for (let pageNumber = usersLength; pageNumber > 3; pageNumber -= 2) {
    perPageVariants.unshift(pageNumber)
  }

  const handleSwitchPerPage = ({ target: { value } }) => {
    clearSelected()
    setPerPage(value)
    push('/contacts/1')
  }

  return (
    <>
      { confirmPopup 
        && <ConfirmAlert
          submitBtn="Delete Selected"
          submitFunc={ () => deleteSelected() }
          cancelFunc={ () => setConfirmPopup(false) }
        />
      }
      <div className={ styles.Actions }>
        <div className={ styles.ActionsLeft }>
          <div className={ styles.PerPage }>
            <select onChange={ event => handleSwitchPerPage(event) } value={ perPage }>
              { perPageVariants.map(variant => <option key={ variant } value={ variant }>{ variant }</option>) }
            </select>
          </div>
        </div>
        <div className={ styles.ActionsRight }>
          <Link to="/contact-create" className={ styles.AddContact }>
            <FontAwesomeIcon icon={ faUserPlus } /> Add New
          </Link>
          <button className={ styles.DeleteSelected } onClick={ () => setConfirmPopup(true) } disabled={ !deleteSelectedButton }>
            <FontAwesomeIcon icon={ faTrash } /> Delete Selected
          </button>
        </div>
      </div>
    </>
  )
}

ContactsActions.propTypes = {
  usersLength: PropTypes.number,
  perPage: PropTypes.number,
  clearSelected: PropTypes.func,
  setPerPage: PropTypes.func,
  deleteSelected: PropTypes.func,
  deleteSelectedButton: PropTypes.bool
}

ContactsActions.defaultProps = {
  usersLength: 1,
  perPage: 3,
  clearSelected: () => {},
  setPerPage: () => {},
  deleteSelected: () => {},
  deleteSelectedButton: false
}

export default ContactsActions
