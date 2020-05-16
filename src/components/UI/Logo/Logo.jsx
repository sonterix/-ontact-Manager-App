import React from 'react'
import logo from 'assets/images/logo.png'
import { Link } from 'react-router-dom'

const Logo = () => (
  <Link className="logo" to="/">
    <img src={ logo } alt="logo" />
  </Link>
)

export default Logo
