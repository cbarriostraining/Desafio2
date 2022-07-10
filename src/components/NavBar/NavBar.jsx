import React from 'react'
import img from '../../public/images/perfume6.png'
import CartWidget from './CartWidget/CartWidget';


const NavBar = () => {

  const imageformat= {
    height: 115,
    width: 109,
  }
  return (<>
  <div className="App">
    <nav>
      <div className="container">
 <a href="#" className="brand-logo"><img src={img} style={imageformat} /></a>
         <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#">Perfumes</a></li>
            <li><a href="#">Estuches</a></li>
            <li><a href="#">Belleza</a></li>
            <li><a href="#">Especiales de Temporada</a></li>
            <li><a href="#">Novedades</a></li>
            <CartWidget/>
           
          
         </ul>


      </div>

    </nav>
 </div>
 </>)
};

export default NavBar