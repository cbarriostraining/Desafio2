import React from 'react';
import {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from  'react-router-dom';
import { CONSTANTS } from "../../common/constants";
import { useCartContext } from '../../context/CartContext';
const {FIRST_ELEMENT, SECOND_ELEMENT,THIRD_ELEMENT,imageformat} = CONSTANTS;

const FinishMyPurchase=()=>{
return(<>
<Link to={`/cart`} className="waves-effect waves-light btn pink">
    Terminar mi compra
    </Link>
</>)
}

const ProductDetail =({productDetail})=>{
return(<>
<div className="container">
                <br/> <br/> <br/>
                  <div className="row">
                  
                      <div className="col s8 m7">
                          <div className="card">
                            <div className="card-image">
                              <img src={productDetail.image[SECOND_ELEMENT]} style={imageformat}/>
                              <span className="card-title">{""}</span>
                            </div>
                            <div className="card-content">
                              <h3>{`Price : $ ${productDetail.price}.00 MX`}</h3>
                            </div>
                            <div className="card-action">
                              <a href="#">  </a>
     
                            </div>
                          </div>


                      </div>
                      <div className="col s4">
                              <h4>{productDetail.title}</h4>
                            <p>{`                         `}</p>
                            <p><strong>Marca : </strong>{`${productDetail.brand}`}</p>
                            <p><strong>Forma : </strong>{`${productDetail.form}`}</p>
                            <p><strong>Acerca de este artículo: </strong></p>
                            <p>{`- ${productDetail.about[FIRST_ELEMENT]}`}</p>
                            <p>{`- ${productDetail.about[SECOND_ELEMENT]}`}</p>
                            <p>{`- ${productDetail.about[THIRD_ELEMENT]}`}</p>

                      
                      </div>
                  
                  </div>
              </div>  
</>)


}

const NotFound =()=>{
return(
  <></>
)

}

const ItemDetail = ({productDetail }) => {

  const {addToCart}=useCartContext();

  const [stock,setStock]=useState(10);
  const [initialCount,setInitialCount]=useState(1);
  const [quantity,setQuantity]=useState(0);

  const addCartHandler=(productQuantity)=>{
    console.log(`La cantidad es : ${productQuantity}`);
    setQuantity(productQuantity);
   addToCart({...productDetail,quantity:productQuantity})
  };




  return(
      <>
      {productDetail.title ? 
      <>
        <ProductDetail productDetail={productDetail}/>
        {quantity ?<FinishMyPurchase/>: <ItemCount initialCount={initialCount} stock={stock}  addCartHandler={addCartHandler} />   }
      </>
       :
       <NotFound/> }
      
      
      </>
  )
}

export default ItemDetail