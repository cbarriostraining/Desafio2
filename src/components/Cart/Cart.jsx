import React  from 'react';
import { useCartContext} from '../../context/CartContext';
import {Link} from  'react-router-dom';
import {getFirestore, collection, addDoc} from 'firebase/firestore';
import PurchaseStatus from '../PurchaseStatus/PurchaseStatus';
const imageformat= {
  height: 75,
  width: 80
};


const NoItemsInCart=()=>{
return(<>
  <h4>No hay productos en el carrito de compras</h4>
  <Link to={`/`} className="waves-effect waves-light btn pink">
    Volver a la pagina principal de compras.
    </Link>
  </>)

}
const CleanCartButton =()=>{
  const {cleanCart}=useCartContext();
  return(
  <a className="waves-effect waves-light btn pink" onClick={cleanCart}>Limpiar Carrito</a>
  )
}




const BuyButton =()=>{
  const {cartList,totalPurchase,setOrderId,cleanCart}=useCartContext();
  // Función para guardar la orden de la base de datos.  
const saveOrder  =async ()=>{
  const orderData={
    buyer:{
      email:"cbarrios@gmail.com",
      name:"Christian",
      phone:"3432342342"
    },
    items:cartList.map(product=>{
          return{
          product:product.name,
          id:product.id,
          price:product.price
           }
          }),
    total:totalPurchase
  }
  const db=getFirestore();
  const  queryOrders=collection(db,'orders');
  addDoc(queryOrders,orderData)
  .then(resp=>{ 
    cleanCart();
    setOrderId(resp.id);
  });
  }
  return(
  <a className="waves-effect waves-light btn pink" onClick={saveOrder}>Comprar</a>
  )
}


const RemoveItemFromCartButton =({index})=>{
  const {removeItemFromCart}=useCartContext();

  const removeItem =()=>{
    removeItemFromCart(index);

  }

  return(
    <a className="waves-effect waves-light btn pink" onClick={removeItem}>x</a>
    
  
  )
}
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
              <th><BuyButton/></th>
              <th></th>
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
const OrderList=()=>{
  const {cartList}=useCartContext();
  return(<>
  {cartList.map((product,index)=>
          <tr key={product.id} >
            <td> <img src={product.image[0]} style={imageformat}/></td>
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




const Cart= () => {
  const {cartList,orderId}=useCartContext();
  return (
    <>
   {cartList.length !== 0 &&<>
                            <h3>Carrito de compras</h3>
                            <CartListTable OrderList={OrderList}/>
                           </>}
  {orderId ===""  && cartList.length==0  &&<NoItemsInCart/>}
  {orderId&&<PurchaseStatus/> }
    
    </>
  )
}

export default Cart