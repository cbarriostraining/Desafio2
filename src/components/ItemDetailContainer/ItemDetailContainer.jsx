import React from 'react';
import { useState, useEffect } from 'react';
import {useParams} from  'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

import Loader from '../Loader/Loader';
import { CONSTANTS } from "../../common/constants";
const {PRODUCTS} = CONSTANTS;

const ItemDetailContainer = () => {

  const [item,SetItem]=useState({});
  const [loading,SetLoading] = useState(true);
  const  {id:productId}=useParams();
    useEffect(() => {
      getItem(productId)
       .then(itemData=>{
        SetItem(itemData);})
       .catch(error=>console.log(error))
       .finally(()=>{  SetLoading(false);});
     }, [productId]);
  
  
     const getItem = (id) =>{
      return new Promise((resolve,reject) => {
        setTimeout(()=>{
          PRODUCTS.find((product) =>{ 
            if(product.id===id) {
            resolve (product);
            }
          }
            );
          },1000);
        });} ;
  
 return (
    <>
    {loading? <Loader/>:
    <>
        <div className="container">
                 <div className="row">
                     <div className="col s14 ">
                      <ItemDetail productDetail={item}/>
                     </div>
                  </div>
                 <div className="row">
                      <div className="col s4 ">
                      </div>
                      <div className="col s4 ">
                      
                      </div>
                      <div className="col s4">
              
                      </div>
                 </div>
         </div>   

    </>
    
    
    }
    </>
)
}

export default ItemDetailContainer