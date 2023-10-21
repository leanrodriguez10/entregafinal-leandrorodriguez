import React, { useEffect } from 'react'
import Counter from '../Counter/Counter'



const ItemDetail = ({ item, onAdd }) => {
  
  return (
    <div>
      <h5>{ item.name}</h5>
      <img src="https://i.postimg.cc/8zp3fHhg/iphone14pro.jpg" alt="" />
      <p>
       stock: {item.stock}
      </p>
      <p>
       price: {item.price}
      </p>
      <p>
       category: {item.category}
      </p>
      <Counter onAdd={onAdd} />
    </div>
  )
}

export default ItemDetail