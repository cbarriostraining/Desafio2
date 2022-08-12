import React from 'react';
import Item from '../Item/Item';

const ItemList = ({products}) => {
  console.log(products);
  return (
    <>

<div className="row">
{products.map(product=>
       <div className="col s12" key={product.id}> 
       <Item 
        id={product.id}
        key={product.id} 
        url={product.image} 
        name={product.name} 
        price={product.price}
        product={product}
        />
        </div>)}

  </div>
   
    </>
  )
}

export default ItemList