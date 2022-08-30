import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import NavBar from './components/NavBar/NavBar'
import './components/NavBar/NavBar.css'

import ItemListContainer from './components/ItemList/ItemListContainer'
import './components/ItemList/ItemListContainer.css'

import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer'
import './components/ItemDetail/ItemDetail.css'

import CartContainer from './components/Cart/CartContainer'
import './components/ItemDetail/ItemCount.css'

import CartProvider from './components/CartContext';

import Checkout from './components/Cart/Checkout';

import './components/Cart/CartItem.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer prop="CATALOGO" />} />
            <Route path="/category/:categoryId" element={<ItemListContainer prop="CATALOGO" />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/checkout" element={<Checkout/>} />

            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>

  )

}

export default App
