import React  from 'react';
import { useCartContext} from '../../context/CartContext';
import PurchaseStatus from '../PurchaseStatus/PurchaseStatus';
import BuyerDataForm from '../BuyerDataForm/BuyerDataForm';
import OrderList from './OrderList';
import CartListTable from './CartListTable';
import NoItemsInCart from './NoItemsInCart';
import { CONSTANTS } from "../../common/constants";
const  {WITHOUT_ORDERID, EMPTY_PRODUCT_LIST} = CONSTANTS;







const Cart= () => {
  const {cartList,orderId,proceedToBuy}=useCartContext();
  
  const areThereProductsInTheShoppingCart =()=>
  cartList.length !== EMPTY_PRODUCT_LIST
  const isThereNoOrderAndAreThereNoProductsInTheShoppingCart=()=>
  orderId === WITHOUT_ORDERID  && cartList.length==EMPTY_PRODUCT_LIST

  return (
    <>
      {areThereProductsInTheShoppingCart() &&
                              <>
                                <h3>Carrito de compras</h3>
                                <CartListTable OrderList={OrderList}/>
                              </>}
      {isThereNoOrderAndAreThereNoProductsInTheShoppingCart()  &&<NoItemsInCart/>}
      {orderId&&<PurchaseStatus/> }
      {proceedToBuy && areThereProductsInTheShoppingCart() &&<BuyerDataForm/>}
    
    </>
  )
}

export default Cart