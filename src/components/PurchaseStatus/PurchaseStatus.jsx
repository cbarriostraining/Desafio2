import React from 'react'
import { useCartContext} from '../../context/CartContext';
import {Link} from  'react-router-dom';


const GoHome=()=>{
const {setOrderId}=useCartContext();

const  purcharseFinished=()=>{
setOrderId("");
}


 return(<>
   
    <Link to={`/`} onClick={purcharseFinished} className="waves-effect waves-light btn pink">
      Ir a la pagina principal de compras.
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
                            
                              <h4>{`Gracias por su compra, su Id de la compra es : ${orderId}`}</h4>
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