import { useState, useEffect } from 'react';
import {useParams} from  'react-router-dom';
import {getFirestore, collection,getDocs, query, where} from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader/Loader';
import { CONSTANTS } from "../../common/constants";
const  {PRODUCTS_COLLECTION} = CONSTANTS;

const ItemListContainer = ({gretting}) => {

  const [products,SetProducts]=useState([]);
  const [loading,SetLoading] = useState(true);
  const  {categoryId}=useParams();
  
  
  useEffect(() => {
    getProducts();
  }, [categoryId]);


  const getProducts = () =>{
    const db= getFirestore()
    const queryCollection = collection(db,PRODUCTS_COLLECTION);
    const queryType = categoryId ? query(queryCollection, where('category','==',categoryId)):queryCollection
    getDocs(queryType)
    .then(resp=>{
    SetProducts(resp.docs.map((prod)=> ({id:prod.id,...prod.data()})))
    })
    .catch()
    .finally(()=> SetLoading(false))
    
};
 return (
    <>
    <h3>{gretting}</h3>
        {loading? <Loader/>:<ItemList products= {products}/>}

    </>
  )
}

export default ItemListContainer