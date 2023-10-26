
import ItemDetailContainer from './components/Details/ItemDetailContainer'
import ItemListContainer from './components/Items/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Contacto from './pages/Contacto'
import { Route, Routes } from 'react-router'
import { Link } from 'react-router-dom'
import Detalle from './pages/Detalle'
import Mujer from './pages/Mujer'
import { useState } from 'react'
import UserProfile from './pages/UserProfile'
import UserContextProvider from './context/UserContext/UserContextProvider'
import CartContextProvider from './context/cartContext/CartContextProvider'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Smartv from './pages/Smartv'





const App = () => {
  
  return (
    <>
    <CartContextProvider>
    <UserContextProvider>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About  />} />
      <Route path='/user' element={<UserProfile />} />
      <Route path='/detalle/:id' element={<Detalle />} />     
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout/:orderId' element={<Checkout />} />
      </Routes>
     </UserContextProvider>
     </CartContextProvider>
   
    </>
  )
}

export default App
