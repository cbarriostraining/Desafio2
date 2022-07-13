import React from 'react';
import ItemCard from '../ItemCard/ItemCard';

const ItemListContainer = ({gretting,productCatalog}) => {
  return (
    <>
    <h3>{gretting}</h3>  
        {productCatalog.map(product=>
        <ItemCard 
        key={product.id} 
        url={product.image} 
        name={product.name} 
        price={product.price}
        />)}

    </>
  )
}

export default ItemListContainer