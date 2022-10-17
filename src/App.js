import React, { useDebugValue } from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
  return (
    <div className='container'>
      <NavBar />
      <ItemListContainer greeting="WELCOME TO STUDIO DEVEL SHOP" />
    </div>
  )
}

export default App