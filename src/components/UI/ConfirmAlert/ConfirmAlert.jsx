import React from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import styles from './ConfirmAlert.module.scss'

const ConfirmAlert = ({ message, submitBtn, cancelBtn, submitFunc, cancelFunc }) => createPortal(
  <div className={ styles.ConfirmAlertWrapper }>
    <div className={ styles.ConfirmAlertOverlay } onClick={ () => cancelFunc() }></div>
      <div className={ styles.ConfirmAlertPopup }>
        <div className={ styles.Message }>{ message }</div>
        <div className={ styles.Actions }>
          <button className={ styles.Submit } onClick={ () => { submitFunc(); cancelFunc()} }>{ submitBtn }</button>
          <button className={ styles.Cancel } onClick={ () => cancelFunc() }>{ cancelBtn }</button>
        </div>
      </div>
    </div>,
  document.body
)

ConfirmAlert.propTypes = {
  message: PropTypes.string,
  submitBtn: PropTypes.string,
  cancelBtn: PropTypes.string,
  submitFunc: PropTypes.func,
  cancelFunc: PropTypes.func
}

ConfirmAlert.defaultProps = {
  message: 'Are you sure?',
  submitBtn: 'Yes',
  cancelBtn: 'No',
  submitFunc: () => {},
  cancelFunc: () => {}
}

export default ConfirmAlert
