import React from 'react';
import {Link} from  'react-router-dom';
import { CONSTANTS } from "../../common/constants";
const  {
    RETURN_TO_THE_MAIN_SHOPPING_PAGE, 
    THERE_ARE_NO_PRODCUTS_IN_THE_SHOPPING_CART} = CONSTANTS;

const NoItemsInCart=()=>{
    return(<>
      <h4>{THERE_ARE_NO_PRODCUTS_IN_THE_SHOPPING_CART}</h4>
      <Link to={`/`} className="waves-effect waves-light btn pink">
        {RETURN_TO_THE_MAIN_SHOPPING_PAGE}
        </Link>
      </>)
    
    }

export default NoItemsInCart