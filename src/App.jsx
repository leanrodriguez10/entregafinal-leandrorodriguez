
import ItemDetailContainer from './components/Details/ItemDetailContainer'
import ItemListContainer from './components/Items/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Contacto from './pages/Contacto'
import { Route, Routes } from 'react-router'
import { Link } from 'react-router-dom'
import Detalle from './pages/Detalle'
import Hombre from './pages/Hombre'
import Mujer from './pages/Mujer'




const App = () => {
  
  return (
    <>
   
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About  />}/>
      <Route path='/contacto' element={<Contacto  />}/>
      <Route path='/detalle/:id' element={<Detalle />}/>
      <Route path='/category/hombre' element={<Hombre />}/>
      <Route path='/category/mujer' element={<Mujer />}/>
      
      
     

   
  </Routes>


    {/*<ItemListContainer />
    {/*} <ItemDetailContainer />*/}
      </>
  )
}

export default App
