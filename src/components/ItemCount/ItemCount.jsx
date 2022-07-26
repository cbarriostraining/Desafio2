import { useState} from 'react';
import React from 'react';
const style={
    height: 100,
    width: 280,

}
const ItemCount = ({initialCount,stock , addCartHandler}) => {
  const [count, setCount] = useState(1);

  const removeProductHandler =()=>{
    if(count>1)setCount(count-1);
   };
   const addProductHandler =()=>{
    if(count<stock)setCount(count+1);
   };

   const productQuantityChangeHandler=()=>{
    console.log("Se cambio la cantidad directamente");
  };

  return (<>
  <div style={style}>
  <div className="row">
    <div className="col s6 m6">
      <div className="card">
        <div className="card-content">
          <ul className="pagination">
            <li className="active"  onClick={removeProductHandler} ><a href="#!">-</a></li>
            <li className="waves-effect">
              <a href="#!">
                <input 
                disabled={true}
                type="text" 
                style={{"textAlign": "center"} } 
                placeholder={count} 
                value={count} 
                onChange={productQuantityChangeHandler}
                /></a></li>
            <li className="active"  onClick={addProductHandler}><a href="#!">+</a></li>
          </ul>
           <a className="waves-effect waves-light pink btn" onClick={addCartHandler}><i className="material-icons right">shopping_cart</i>Agregar al carrito</a>
        </div>
      </div>
    </div>
  </div>
 </div>
  </>
 )
}

export default ItemCount