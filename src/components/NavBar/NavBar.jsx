import React from 'react'
import img from '../../public/images/perfume2.png'

const NavBar = () => {

  const imageformat= {
    height: 45,
    width: 39,
  }
  return (<>
  <div className="App">
    <nav>
      <div className="container">
      <a href="#" className="brand-logo"><img src={img} style={imageformat} />Perfumes Rosalia</a>
         <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#">Perfumes</a></li>
            <li><a href="#">Estuches</a></li>
            <li><a href="#">Belleza</a></li>
            <li><a href="#">Especiales de Temporada</a></li>
            <li><a href="#">Novedades</a></li>
         </ul>
      </div>
    </nav>
 </div>
 </>)
};

export default NavBar