import React from 'react'
import ItemList from './ItemList'

const ListaComponentes=({titulo, card})=> {
  return (
      <>
    <div>
        <h1>{titulo}</h1>
        
        
    
    <ItemList titulo={titulo} card={card}></ItemList>
    </div>
    </>
  )
}

export default ListaComponentes