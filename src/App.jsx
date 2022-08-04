
import './App.css'

import NavBar from './components/NavBar'
import './components/NavBar.css'

import ItemListContainer from './components/ItemListContainer'
import './components/ItemListContainer.css'

import ItemCount from './components/ItemCount'
import './components/ItemCount.css'

import ItemDetailContainer from './components/ItemDetailContainer'
import './components/ItemDetail.css'


function App() {

  return (
    <>
      <NavBar />
      {/* <ItemListContainer prop="CATALOGO" /> */}
      <ItemDetailContainer />
    </>

  )

}

export default App
