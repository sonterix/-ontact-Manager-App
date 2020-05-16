import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import contact from 'assets/images/contact.jpg'
import styles from './Home.module.scss'

const Home = () => {
  return (
    <div className={ styles.Homepage }>
      <LazyLoadImage src={ contact } alt="contact" effect="blur" />
    </div>
  )
}

export default Home
