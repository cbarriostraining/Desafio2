import React from 'react';
import { useCartContext} from '../../context/CartContext';

const RemoveItemFromCartButton =({index})=>{
    const {removeItemFromCart}=useCartContext();
  
    const removeItem =()=>{
      removeItemFromCart(index);
  
    }
  
    return(
      <a className="waves-effect waves-light btn pink" onClick={removeItem}>x</a>
      
    
    )
  }

export default RemoveItemFromCartButton