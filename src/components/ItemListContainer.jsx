import React from 'react'
import itemListContainer from '../style/itemListContainer.css'


const ItemListContainer = ({ greeting }) => {
    return (
        <div className='div-itemListContainer'><h1>{greeting}</h1></div>
    )
}

export default ItemListContainer