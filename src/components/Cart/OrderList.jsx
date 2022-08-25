import React from 'react';
import { useCartContext} from '../../context/CartContext';
import RemoveItemFromCartButton from './RemoveItemFromCartButton';
import { CONSTANTS } from "../../common/constants";
const  {listImageFormat, FIRST_ELEMENT} = CONSTANTS;

const OrderList=()=>{
    const {cartList}=useCartContext();
    return(<>
        {cartList.map((product,index)=>
            <tr key={product.id} >
              <td> <img src={product.image[FIRST_ELEMENT]} style={listImageFormat}/></td>
              <td>{product.name}</td>
              <td>{product.form}</td>
              <td>{product.quantity}</td>
              <td>{`$ ${product.price}`}</td>
              <td>{`$ ${product.price*product.quantity}`}</td>
              <td><RemoveItemFromCartButton index={index}/></td>
            </tr>
          )}
    
    </>)
  }
  

export default OrderList