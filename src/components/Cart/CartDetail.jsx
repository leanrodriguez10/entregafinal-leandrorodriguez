import React, { useContext, } from 'react'
import CartContext from '../../context/cartContext/CartContext'



const CartDetail = () => {

 const { cart, removeItem } = useContext(CartContext)

 console.log(cart)

 

  return (
    <div>
      
      {
        cart.map( el => (
          <div>
            <img src="https://i.postimg.cc/8zp3fHhg/iphone14pro.jpg" alt="" />
           <p>Product: {el.item.name}</p>
            <p>Cantidad: {el.q}</p>

            <button onClick={() => removeItem(el.item.id)}>Eliminar</button>
          </div>
          
        ))
      }
    </div>
  )
}

export default CartDetail