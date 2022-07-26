import React from 'react';
import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import Loader from '../Loader/Loader';
import { CONSTANTS } from "../../common/constants";
const {PRODUCTS} = CONSTANTS;

const ItemDetailContainer = ({id}) => {

  const [item,SetItem]=useState({});
  const [loading,SetLoading] = useState(true);
 
    useEffect(() => {
      getItem(id)
       .then(itemData=>{
        SetItem(itemData);})
       .catch(error=>console.log(error))
       .finally(()=>{  SetLoading(false);});
     }, []);
  
  
     const getItem = (id) =>{
      return new Promise((resolve,reject) => {
        setTimeout(()=>{
          PRODUCTS.find((product) =>{ 
            if(product.id===id) {
            resolve (product);
            }
          }
            );
          },2000);
        });} ;
  
 return (
    <>
    {loading? <Loader/>:<ItemDetail productDetail={item}/>}
    </>
)
}

export default ItemDetailContainer