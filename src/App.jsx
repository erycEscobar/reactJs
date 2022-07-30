import { useState } from 'react'
import logo from './logo.svg'

import './App.css'

import NavBar from './components/NavBar'
import './components/NavBar.css'

import ItemListContainer from './components/ItemListContainer'
import './components/ItemListContainer.css'


function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer prop="aca' ta' la prop" />
    </>

  )

}

export default App
