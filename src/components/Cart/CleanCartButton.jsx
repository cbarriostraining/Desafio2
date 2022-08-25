import React from 'react';
import { useCartContext} from '../../context/CartContext';

const CleanCartButton =()=>{
    const {cleanCart}=useCartContext();
    return(
    <a className="waves-effect waves-light btn pink" onClick={cleanCart}>Limpiar Carrito</a>
    )
}

export default CleanCartButton