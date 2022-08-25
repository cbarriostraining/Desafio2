import React from 'react';
import { useCartContext} from '../../context/CartContext';
import BuyButton from './BuyButton';
import CleanCartButton from './CleanCartButton';


const CartListTable=({OrderList})=>{
    const {totalPurchase}=useCartContext();
  
  return(<>
  <div className="row">
  <table className="striped" >
          <thead>
            <tr>
                <th>Imagen</th>
                <th>Producto</th>
                <th>Descripción</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Importe</th>
                <th>Accciones</th>
            </tr>
          </thead>
          <tbody>
           <OrderList/>
           <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>Total:</th>
                <th>{`$ ${totalPurchase}`}</th>
                <th></th>
            </tr>
            <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th><BuyButton/> </th>
                <th><CleanCartButton/></th>
            </tr>
  
          </tbody>
        </table>
     <div className="col s3 ">
     </div>
     <div className="col s6 ">
  
     </div>
     <div className="col s3">
     </div>
  
  </div>
  </>)
  
  }

export default CartListTable