import React from 'react';
import { useCartContext} from '../../context/CartContext';

const BuyButton =()=>{
    const {setProceedToBuy}=useCartContext();
    
      const proceedToBuy=()=>{
        setProceedToBuy(true);
      };
  
    return(
    <a className="waves-effect waves-light btn pink" onClick={proceedToBuy}>Proceder a Comprar</a>
    )
  }

export default BuyButton