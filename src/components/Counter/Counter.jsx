import React, { useState } from 'react'

const Counter = ({onAdd}) => {
    const [count, setCounter] = useState(0)

    const increment = () => {
        
        setCounter(count + 1)

    }
        
    const decrement = () => {
        if(count > 1){
            setCounter(count - 1)  
        }
       

    }
        
  return (
    <div>
        <button className='btn btn-primary' onClick={increment}>AGREGAR</button>
        <span>{ count }</span>
        <button className='btn btn-primary' onClick={decrement}>QUITAR</button>
        
        <button className='btn btn-primary' onClick={() => onAdd(count)}>Agregar al carrito</button>

    </div>
  )
}

export default Counter