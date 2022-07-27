import React from 'react';
import {Link} from  'react-router-dom';
const imageformat= {
    height: 300,
    width: 250
  };
const Item = ({url,name,id}) => {

return (
  <div className="card">
  <div className="card-image">
    <img src={url} style={imageformat}/>
    <span className="card-title">{""}</span>
  </div>
  <div className="card-content">
    <p>{name}</p>
  </div>
  <div className="card-action">

    <Link to={`/item/${id}`} className="waves-effect waves-light btn pink">
    Detalle del producto
    </Link>


 
  </div>
</div>


  )
}

export default Item