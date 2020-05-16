import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import noFount from 'assets/images/404.png'
import styles from './NoFound.module.scss'

const NoFound = () => (
  <div className={ styles.NoFound }>
    <LazyLoadImage src={ noFount } alt="404" effect="blur" />
  </div>
)

export default NoFound
