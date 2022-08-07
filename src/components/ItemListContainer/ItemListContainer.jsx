import { useState, useEffect } from 'react';
import {useParams} from  'react-router-dom';
import {getFirestore,doc, getDoc, collection,getDocs, query, where, limit, orderBy} from 'firebase/firestore';
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader/Loader';

const ItemListContainer = ({gretting}) => {

  const [products,SetProducts]=useState([]);
  const [loading,SetLoading] = useState(true);
  const  {categoryId}=useParams();
  
  
  useEffect(() => {
    getProducts();
  }, [categoryId]);


  const getProducts = () =>{
    const db= getFirestore()

    if(categoryId){
    const queryCollection = collection(db,'products');
    const filteredQuery =query(queryCollection,
      where('category','==',categoryId)
    )
    getDocs(filteredQuery)
    .then(resp=>{
    SetProducts(resp.docs.map((prod)=> ({id:prod.id,...prod.data()})))
    })
    .catch(err => console.log(err) )
    .finally(()=> SetLoading(false))
    }
    else{
      const queryCollection = collection(db,'products');
      getDocs(queryCollection)
      .then(resp=>{
      SetProducts(resp.docs.map((prod)=> ({id:prod.id,...prod.data()})))
      })
      .catch(err => console.log(err) )
      .finally(()=> SetLoading(false))
    }

};
 return (
    <>
    <h3>{gretting}</h3>
        {loading? <Loader/>:<ItemList products= {products}/>}

    </>
  )
}

export default ItemListContainer