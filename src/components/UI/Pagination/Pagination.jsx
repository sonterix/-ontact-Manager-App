import React from 'react'
import PropTypes from 'prop-types'
import styles from './Pagination.module.scss'
import { Link } from 'react-router-dom'

const Pagination = ({ totalPages, pageId }) => {
  const pages = []
  
  for (let page = 1; page <= totalPages; page++) {
    pages.push(page)
  }

  return (
    <div className={ styles.Pagination }>
      { pages.map(page => <Link key={ page } to={ `/contacts/${ page }` } className={ pageId === page ? 'active' : '' }>{ page }</Link>) }
    </div>
  )
}

Pagination.propTypes = {
  totalPages: PropTypes.number,
  pageId: PropTypes.number
}

Pagination.defaultProps = {
  totalPages: 1,
  pageId: 1
}

export default Pagination
