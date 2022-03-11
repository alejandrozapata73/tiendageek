import React from 'react'
import { useState } from 'react'
import ItemListCounter from './ItemListCounter'

const Item = ({card}) => {

    const [show, setShow] = useState(false)

    const verMas = () => {
        console.log(show)
        setShow(!show)
    }

  return (
    <div> 

        <p>{card}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam totam eaque quod mollitia inventore quidem ex ipsam natus rerum culpa, voluptas ducimus voluptatum porro provident ut iusto praesentium quis eum!</p>
        <button onClick={verMas}> Ver mas</button>
        
        <ItemListCounter stock={8}></ItemListCounter>


        </div>
  )
}

export default Item