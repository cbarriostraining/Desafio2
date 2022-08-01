import React from 'react'
import img from '../../public/images/perfume6.png'
import CartWidget from './CartWidget/CartWidget';
import {Link} from  'react-router-dom';


const NavBar = () => {

  const imageformat= {
    height: 115,
    width: 109,
  }
  return (<>
  <div className="App">
    <nav>
      <div className="container">
        <Link to='/'> <img src={img} style={imageformat} /></Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to='/category/perfumes'>Perfumes</Link></li>
            <li><Link to='/category/estuches'>Estuches</Link></li>
            <li><Link to='/belleza'>Belleza</Link></li>
            <li><Link to='/temporada'>Especiales de Temporada</Link></li>
            <li><Link to='/novedades'>Novedades</Link></li>
            <CartWidget/>
           
          
         </ul>


      </div>

    </nav>
 </div>
 </>)
};

export default NavBar