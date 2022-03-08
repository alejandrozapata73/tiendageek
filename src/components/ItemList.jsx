import React from 'react'
import Item from './Item'

 const ItemList = ({card}) => {
  return (
    <div>
        <Item card={card}></Item>
    </div>
  )
}

export default ItemList
