import React from 'react';
import {Link} from  'react-router-dom';
import { CONSTANTS } from "../../common/constants";
const  {THERE_IS_NOT_ARTICLE,
        RETURN_TO_THE_MAIN_SHOPPING_PAGE} = CONSTANTS;

const ArticleNotExist = () => {
  
  return (
      <>
      <h4>{THERE_IS_NOT_ARTICLE}</h4>
      <Link to={`/`} className="waves-effect waves-light btn pink">
        {RETURN_TO_THE_MAIN_SHOPPING_PAGE}
        </Link>
      </>
  )
}

export default ArticleNotExist