
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import NavBar from './components/NavBar/NavBar'
import './components/NavBar/NavBar.css'

import ItemListContainer from './components/ItemList/ItemListContainer'
import './components/ItemList/ItemListContainer.css'

import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer'
import './components/ItemDetail/ItemDetail.css'

import './components/ItemDetail/ItemCount.css'



function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer prop="CATALOGO" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer prop="CATALOGO" />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />

          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </>

  )

}

export default App
