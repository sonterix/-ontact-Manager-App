import React from 'react'
import Header from 'components/Header/Header'

const App = ({ children }) => (
  <>
    <Header />
    { children } 
  </>
)

export default App
