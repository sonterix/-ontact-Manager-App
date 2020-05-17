import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import contact from 'assets/images/contact.png'
import styles from './Home.module.scss'

const Home = () => {
  return (
    <div className={ styles.Homepage }>
      <h1>Welcome to <span>Contact Manager</span></h1>
      <LazyLoadImage src={ contact } alt="contact" effect="blur" />
    </div>
  )
}

export default Home
