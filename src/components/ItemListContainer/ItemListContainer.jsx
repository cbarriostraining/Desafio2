import { useState, useEffect } from 'react';
import {useParams} from  'react-router-dom';
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader/Loader';
import { CONSTANTS } from "../../common/constants";
const {products:catalogproducts,PRODUCTS} = CONSTANTS;

const ItemListContainer = ({gretting}) => {

  const [products,SetProducts]=useState([]);
  const [loading,SetLoading] = useState(true);
  const  {categoryId}=useParams();
  
  
useEffect(() => {
      if(categoryId){
        getProducts()
        .then(productData=>{
          SetProducts(productData.filter(product=>product.category==categoryId));})
        .catch(error=>console.log(error))
        .finally(()=>{  SetLoading(false);});
      }
      else{
        getProducts()
        .then(productData=>{
          console.log("Duda por que esto lo hace 2 Veces , si en la dependencia se indica que solo lo haga en el montaje?");
          console.log(productData);
          SetProducts(productData);})
        .catch(error=>console.log(error))
        .finally(()=>{  SetLoading(false);});
      }

}, [categoryId]);

   const getProducts = () =>{
    return new Promise((resolve,reject) => {
      setTimeout(()=>{
          resolve(PRODUCTS);
        },1000);
      });} ;


  return (
    <>
    <h3>{gretting}</h3>
        {loading? <Loader/>:<ItemList products= {products}/>}

    </>
  )
}

export default ItemListContainer