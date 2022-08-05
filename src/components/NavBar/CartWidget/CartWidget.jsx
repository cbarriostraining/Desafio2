import React from 'react';
import {Link} from  'react-router-dom';
import { useCartContext } from '../../../context/CartContext';
const THERE_ARE_NO_PRODUCTS="";

const CartWidget = () => {

  const {numberProducts}=useCartContext();

  return (

    <>
       <li>
      <Link to='/cart'>
      <i className="material-icons right">shopping_cart</i>
       {numberProducts ? numberProducts : THERE_ARE_NO_PRODUCTS}
      </Link>
      </li>
      
      </>
  )
}
export default CartWidget


