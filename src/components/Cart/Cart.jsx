import React,{useEffect}  from 'react';
import { useCartContext} from '../../context/CartContext';
const imageformat= {
  height: 75,
  width: 80
};


const NoItemsInCart=()=>{
return(<>
  <h4>No hay productos en el carrito de compras</h4>
  </>)

}
const CleanCartButton =()=>{
  const {cleanCart}=useCartContext();
  return(
  <a className="waves-effect waves-light btn pink" onClick={cleanCart}>Limpiar Carrito</a>
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
              <th></th>
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
  

const Cart = () => {
  const {cartList}=useCartContext();

    
  return (
    <>
   {cartList.length?<>
    <h3>Carrito de compras</h3>
      <CartListTable OrderList={OrderList}/>
   </>: <NoItemsInCart/>}
    
    </>
  )
}

export default Cart