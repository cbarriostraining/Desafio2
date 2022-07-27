import React from 'react';
import {Link} from  'react-router-dom';

const CartWidget = () => {
  return (
    <> <li><Link to='/cart'><i className="material-icons right">shopping_cart</i></Link></li></>
  )
}
export default CartWidget