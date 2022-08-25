import React from 'react'
import { useCartContext} from '../../context/CartContext';
import {Link} from  'react-router-dom';
import { CONSTANTS } from "../../common/constants";
const  {INITIALIZE_STRING,GOTO_THE_MAIN_SHOPPING_PAGE,PURCHASE_END_MESSAGE} = CONSTANTS;

const GoHome=()=>{
const {setOrderId}=useCartContext();

const  purcharseFinished=()=>{
setOrderId(INITIALIZE_STRING);
}
 return(<>
    <Link to={`/`} onClick={purcharseFinished} className="waves-effect waves-light btn pink">
    {GOTO_THE_MAIN_SHOPPING_PAGE}
      </Link>
    </>)
 }


const PurchaseStatus = () => {

  const {orderId}=useCartContext();

  return (
    <>
    <br/><br/><br/>
        <div className="container">
                 <div className="row">
                  <div className="col s8 m7">
                          <div className="card">
                            <div className="card-image">
                              <span className="card-title"></span>
                            </div>
                            <div className="card-content">
                               <h4>{`${PURCHASE_END_MESSAGE}${orderId}`}</h4>
                            </div>
                            <div className="card-action">
                              <GoHome/>
                            </div>
                          </div>
                      </div>
                  </div>
        </div>  
</>
  )
}

export default PurchaseStatus;