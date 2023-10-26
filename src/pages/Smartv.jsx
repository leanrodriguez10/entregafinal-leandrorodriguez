import React from 'react'
import ItemListContainer from '../components/Items/ItemListContainer'
import ItemDetailContainer from '../components/Details/ItemDetailContainer'

const Smartv = () => {
  return (
    <div>

<>
    <CartContextProvider />
    <CartDetail />
  
    </>
    </div>
  )
}

export default Smartv