import React from 'react'
import { createPortal } from 'react-dom'
import styles from './Loading.module.scss'

const Loading = () => createPortal(
  <div className={ styles.Loading }>
    <div className={ styles.LoadingText }>Loading...</div>
  </div>,
  document.body
)

export default Loading
