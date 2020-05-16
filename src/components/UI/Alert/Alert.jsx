import React from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import styles from './Alert.module.scss'

const Alert = ({ message }) => createPortal(<div className={ styles.AlertWrapper }>{ message }</div>, document.body)

Alert.propTypes = {
  message: PropTypes.string
}

Alert.defaultProps = {
  message: ''
}

export default Alert
