import React from 'react'
import img from '../../public/images/perfume6.png'
import CartWidget from './CartWidget/CartWidget';
import {Link} from  'react-router-dom';
import { CONSTANTS } from "../../common/constants";
const  {logoImageFormat} = CONSTANTS;

const NavBar = () => {
 return (<>
  <div className="App">
    <nav>
      <div className="container">
        <Link to='/'> <img src={img} style={logoImageFormat} /></Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to='/category/perfumes'>Perfumes</Link></li>
            <li><Link to='/category/estuches'>Estuches</Link></li>
            <li><Link to='/category/belleza'>Belleza</Link></li>
            <li><Link to='/category/temporada'>Especiales de Temporada</Link></li>
            <li><Link to='/category/novedades'>Novedades</Link></li>
            <CartWidget/>
          </ul>
      </div>
    </nav>
 </div>
 </>)
};

export default NavBar