import React from 'react';
import ItemCard from '../ItemCard/ItemCard';

const ItemList = ({productCatalog}) => {
  return (
    <>
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

export default ItemList