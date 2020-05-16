import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import styles from './Pagination.module.scss'

const Pagination = ({ totalPages, pageId, clearSelected }) => {
  const { push } = useHistory()
  const pages = []
  
  for (let page = 1; page <= totalPages; page++) {
    pages.push(page)
  }

  const handleSwitchPage = pageId => {
    clearSelected()
    push(`/contacts/${ pageId }`)
  }

  return (
    <div className={ styles.Pagination }>
      { pages.map(page => <button key={ page } className={ pageId === page ? 'active' : '' } onClick={ () => handleSwitchPage(page) }>{ page }</button>) }
    </div>
  )
}

Pagination.propTypes = {
  clearSelected: PropTypes.func,
  totalPages: PropTypes.number,
  pageId: PropTypes.number
}

Pagination.defaultProps = {
  clearSelected: () => {},
  totalPages: 1,
  pageId: 1
}

export default Pagination
