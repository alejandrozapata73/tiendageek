import React from 'react'
import { useState } from 'react'

const ItemListCounter = ({stock}) => {

    const [contador, setContador] = useState(1)
    const sumar = () => {

        if(contador<stock)
        setContador(contador + 1)

    }

    const restar = () => {

        if(contador>1){
        setContador(contador - 1)
        }
    }
  return (
    <div>
<div>
<span> Stock Actual: {stock}</span>
</div>
    <button onClick={restar}>-</button>
    
    <span>{contador} </span>
    <button onClick={sumar}>+</button>

    </div>
  )
}

export default ItemListCounter