import { useState, useEffect } from 'react';
import {useParams} from  'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import {getFirestore,doc, getDoc} from 'firebase/firestore';
import Loader from '../Loader/Loader';
import { CONSTANTS } from "../../common/constants";
import ArticleNotExist from './ArticleNotExist';
const  {PRODUCTS_COLLECTION} = CONSTANTS;
const ItemDetailContainer = () => {

  const [item,SetItem]=useState({});
  const [loading,SetLoading] = useState(true);
  const [existsId,SetExistsId] = useState(true);
  const  {id:productId}=useParams();

  useEffect(() => {
      getItem(productId);
  }, [productId]);
  
  const getItem = (id) =>{
          const db= getFirestore()
          const queryProduct = doc(db,PRODUCTS_COLLECTION,id)
          getDoc(queryProduct)
          .then(resp=>{
            const detailItem={id:resp.id,...resp.data()}
            if(detailItem.name){
               SetExistsId(true)
               SetItem({id:resp.id,...resp.data()});
            }else{
               SetExistsId(false)
            }
          })
          .catch(error=>console.log(error))
          .finally(()=>{  
            SetLoading(false);
          });
   
   
 };
 

 return (
    <>
      
      
      
      {loading && <Loader/>}
            
               
      {!existsId && !item.name ? <ArticleNotExist/>:        
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
                                          </div>   }
    </>
)
}

export default ItemDetailContainer