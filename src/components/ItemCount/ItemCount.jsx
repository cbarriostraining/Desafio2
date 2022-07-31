import { useState} from 'react';
import React from 'react';
const style={
    height: 100,
    width: 280,

}
const ItemCount = ({initialCount=1,stock=10 , addCartHandler}) => {
  const [count, setCount] = useState(initialCount);

  const addProductHandler =()=>{
    if(count<stock)setCount(count+1);
   };

  const removeProductHandler =()=>{
    if(count>initialCount)setCount(count-1);
   };

   const addCart=()=>{
    addCartHandler(count);
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
                /></a></li>
            <li className="active"  onClick={addProductHandler}><a href="#!">+</a></li>
          </ul>
           <a className="waves-effect waves-light pink btn" onClick={addCart}><i className="material-icons right">shopping_cart</i>Agregar al carrito</a>
        </div>
      </div>
    </div>
  </div>
 </div>
  </>
 )
}

export default ItemCount