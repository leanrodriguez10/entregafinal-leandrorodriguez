import React from 'react'
import { useParams } from 'react-router-dom'

const Checkout = () => {
  const {orderId} =  useParams()
  return (
    <div>
       Muchas gracias por su compra.
       {orderId}
    </div>
  )
}

export default Checkout