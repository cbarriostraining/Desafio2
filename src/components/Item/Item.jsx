import React from 'react';

const imageformat= {
    height: 300,
    width: 250
  }
const Item = ({url,name}) => {

return (
<div className="col-md-4 p-1">
    <div className="col s6 m7">
      <div className="card">
        <div className="card-image">
          <img src={url} style={imageformat}/>
          <span className="card-title">{""}</span>
        </div>
        <div className="card-content">
          <p>{name}</p>
        </div>
        <div className="card-action">
       <p>Detalle del producto</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Item