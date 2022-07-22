import React from 'react';
import Item from '../Item/Item';

const ItemList = ({products}) => {
  return (
    <>
     {products.map(product=>
        <Item 
        key={product.id} 
        url={product.image} 
        name={product.name} 
        price={product.price}
        />)}

    </>
  )
}

export default ItemList