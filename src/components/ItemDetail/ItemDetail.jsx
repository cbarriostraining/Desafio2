import React from 'react';
import M from "materialize-css";
import { useEffect ,useState} from 'react';

import Modal from 'react-modal';
import { CONSTANTS } from "../../common/constants";
const {FIRST_ELEMENT, SECOND_ELEMENT,THIRD_ELEMENT} = CONSTANTS;


const imageformat= {
    height: 300,
    width: 250
  }
const ItemDetail = ({productDetail }) => {
  return(
      <>
      {productDetail.title ?
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
          :""}
      </>
  )
}

export default ItemDetail