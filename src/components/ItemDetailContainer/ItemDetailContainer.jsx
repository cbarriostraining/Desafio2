import React from 'react';
import { useState, useEffect } from 'react';
import {useParams} from  'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import {getFirestore,doc, getDoc, collection,getDocs, query, where, limit, orderBy} from 'firebase/firestore';
import Loader from '../Loader/Loader';

const ItemDetailContainer = () => {

  const [item,SetItem]=useState({});
  const [loading,SetLoading] = useState(true);
  const  {id:productId}=useParams();

  useEffect(() => {
      getItem(productId);
  }, [productId]);
  
  const getItem = (id) =>{
          const db= getFirestore()
          const queryProduct = doc(db,'products',id)
          getDoc(queryProduct)
          .then(resp=>{
            SetItem({id:resp.id,...resp.data()});
          })
          .catch(error=>console.log(error))
          .finally(()=>{  SetLoading(false);});
   
   
 };

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